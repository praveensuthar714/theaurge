import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Antigravity Scroll Controller
 * Orchestrates cinematic transitions and scroll-driven events.
 */
export const scrollController = {
  createScrollProxy: (trigger: string | Element, config: any) => {
    return ScrollTrigger.create({
      trigger,
      start: "top top",
      end: "bottom bottom",
      scrub: 1, // Smooth interpolation
      ...config
    });
  },

  animateOnScroll: (target: string | Element, vars: gsap.TweenVars, trigger: string | Element) => {
    return gsap.fromTo(target, 
      { opacity: 0, y: 50 },
      {
        ...vars,
        scrollTrigger: {
          trigger,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        }
      }
    );
  }
};

export default scrollController;
