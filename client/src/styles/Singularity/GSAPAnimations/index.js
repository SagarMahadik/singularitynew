import { gsap } from 'gsap';

export default {
  SlideInleft(target) {
    return gsap.fromTo(
      target,
      {
        x: -200,
        ease: 'power3.easeOut',
        autoAlpha: 0
      },
      {
        x: 0,
        ease: 'power3.easeOut',
        autoAlpha: 1,
        duration: 1.22
      }
    );
  },
  SlideInleftSolwer(target) {
    return gsap.fromTo(
      target,
      {
        x: -400,
        ease: 'power3.easeOut',
        autoAlpha: 0
      },
      {
        x: 0,
        ease: 'power3.easeOut',
        autoAlpha: 1,
        duration: 1.22
      }
    );
  }
};
