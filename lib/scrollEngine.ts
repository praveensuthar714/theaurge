import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export const initScrollAnimations = () => {
  // Global scroll settings or base animations can be initialized here
  console.log('Scroll Engine Initialized');
};

export const createScrollTimeline = (options?: gsap.TimelineVars) => {
  return gsap.timeline(options);
};

export { gsap, ScrollTrigger, MotionPathPlugin };
