'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

interface InteractiveLakeProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  isActive: boolean;
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uVideoTexture;
  uniform sampler2D uRippleMap;
  uniform vec2 uResolution;
  varying vec2 vUv;

  void main() {
    // Sample the ripple map (red channel for height, green/blue for gradients if we had them)
    // We'll use the gradient of the ripple map to displace the UVs
    float pixelSize = 1.0 / uResolution.x;
    
    float hL = texture2D(uRippleMap, vUv + vec2(-pixelSize, 0.0)).r;
    float hR = texture2D(uRippleMap, vUv + vec2(pixelSize, 0.0)).r;
    float hT = texture2D(uRippleMap, vUv + vec2(0.0, -pixelSize)).r;
    float hB = texture2D(uRippleMap, vUv + vec2(0.0, pixelSize)).r;
    
    vec2 displacement = vec2(hL - hR, hT - hB) * 0.035; // Subtle refraction strength
    
    // Sample video with displaced UVs
    vec4 color = texture2D(uVideoTexture, vUv + displacement);
    
    // Subtle brightness boost on ripples (specular shimmer)
    float rippleIntensity = max(0.0, hL - hR) + max(0.0, hT - hB);
    color.rgb += rippleIntensity * 0.05;
    
    gl_FragColor = color;
  }
`;

// This shader solves the wave equation
const simulationFragmentShader = `
  uniform sampler2D uPrevTexture;
  uniform sampler2D uCurrTexture;
  uniform vec2 uMouse;
  uniform float uMouseDown;
  uniform float uMouseSize;
  uniform float uViscosity;
  uniform vec2 uResolution;
  varying vec2 vUv;

  void main() {
    vec2 pixel = 1.0 / uResolution;
    
    // Neighbors
    float top = texture2D(uCurrTexture, vUv + vec2(0.0, pixel.y)).r;
    float bottom = texture2D(uCurrTexture, vUv + vec2(0.0, -pixel.y)).r;
    float left = texture2D(uCurrTexture, vUv + vec2(-pixel.x, 0.0)).r;
    float right = texture2D(uCurrTexture, vUv + vec2(pixel.x, 0.0)).r;
    
    float current = texture2D(uCurrTexture, vUv).r;
    float prev = texture2D(uPrevTexture, vUv).r;
    
    // Wave equation: newHeight = (avgNeighbors * 2 - prev) * damping
    float next = (top + bottom + left + right) * 0.5 - prev;
    next *= uViscosity;
    
    // Add mouse influence
    float dist = distance(vUv, uMouse);
    if (dist < uMouseSize) {
      next += (1.0 - dist / uMouseSize) * 0.2 * uMouseDown;
    }
    
    gl_FragColor = vec4(next, 0.0, 0.0, 1.0);
  }
`;

export const InteractiveLake: React.FC<InteractiveLakeProps> = ({ videoRef, isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const isMovingRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. Textures
    const videoTexture = new THREE.VideoTexture(videoRef.current);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBAFormat;

    // 3. Simulation Buffers (Ping-Pong)
    const simRes = 256; // Low res for stability and performance
    let renderTarget1 = new THREE.WebGLRenderTarget(simRes, simRes, {
      type: THREE.HalfFloatType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    });
    let renderTarget2 = renderTarget1.clone();
    let renderTarget3 = renderTarget1.clone();

    // 4. Simulation Material
    const simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPrevTexture: { value: renderTarget1.texture },
        uCurrTexture: { value: renderTarget2.texture },
        uMouse: { value: new THREE.Vector2(-1, -1) },
        uMouseDown: { value: 0.0 },
        uMouseSize: { value: 0.02 },
        uViscosity: { value: 0.96 },
        uResolution: { value: new THREE.Vector2(simRes, simRes) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: simulationFragmentShader,
    });

    const simScene = new THREE.Scene();
    const simMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), simMaterial);
    simScene.add(simMesh);

    // 5. Final Output Material
    const mainMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uVideoTexture: { value: videoTexture },
        uRippleMap: { value: renderTarget3.texture },
        uResolution: { value: new THREE.Vector2(width, height) },
      },
      vertexShader,
      fragmentShader,
    });

    const mainMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mainMaterial);
    scene.add(mainMesh);

    // 6. Interaction
    const onMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      mouseRef.current.set(x, y);
      
      simMaterial.uniforms.uMouseDown.value = 1.0;
      isMovingRef.current = true;

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        isMovingRef.current = false;
        simMaterial.uniforms.uMouseDown.value = 0.0;
      }, 100);
    };

    window.addEventListener('mousemove', onMouseMove);

    // 7. Animation Loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Update simulation
      simMaterial.uniforms.uMouse.value.copy(mouseRef.current);
      
      // Step 1: RT1 -> RT2 -> RT3 (Ping-pong)
      renderer.setRenderTarget(renderTarget3);
      renderer.render(simScene, camera);

      // Swap
      const temp = renderTarget1;
      renderTarget1 = renderTarget2;
      renderTarget2 = renderTarget3;
      renderTarget3 = temp;

      simMaterial.uniforms.uPrevTexture.value = renderTarget1.texture;
      simMaterial.uniforms.uCurrTexture.value = renderTarget2.texture;
      mainMaterial.uniforms.uRippleMap.value = renderTarget2.texture;

      // Ensure video texture updates during scrub
      // (VideoTexture usually updates manually if video is paused but currentTime changed)
      videoTexture.needsUpdate = true;

      // Render final scene
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      renderer.setSize(w, h);
      mainMaterial.uniforms.uResolution.value.set(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (timerRef.current) clearTimeout(timerRef.current);
      
      renderer.dispose();
      videoTexture.dispose();
      renderTarget1.dispose();
      renderTarget2.dispose();
      renderTarget3.dispose();
      simMaterial.dispose();
      mainMaterial.dispose();
    };
  }, [videoRef]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden"
    />
  );
};

export default InteractiveLake;
