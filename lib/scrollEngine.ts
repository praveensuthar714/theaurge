import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export const initScrollAnimations = () => {
  // Ensure all triggers are refreshed after initial loading
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1500);
  }
};

export const createScrollTimeline = (options?: gsap.TimelineVars) => {
  return gsap.timeline(options);
};

export { gsap, ScrollTrigger, MotionPathPlugin };
