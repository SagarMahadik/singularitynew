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
    console.log('In a slowewr');
    return gsap.fromTo(
      target,
      {
        y: -100,
        ease: 'power3.easeOut',
        autoAlpha: 0
      },
      {
        y: 0,
        ease: 'power3.easeOut',
        autoAlpha: 1,
        duration: 1.22
      }
    );
  }
};
