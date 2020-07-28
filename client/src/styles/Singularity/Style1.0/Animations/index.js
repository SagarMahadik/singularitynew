import { keyframes, css } from 'styled-components';

export const SlideInRight = keyframes`
   0% {
    -webkit-transform: translateX(100px);
            transform: translateX(100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
`;

export const SlideInLeft = keyframes`
0% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
`;

export const WobbleTop = keyframes`
0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-10px) rotate(6deg);
            transform: translateX(-10px) rotate(6deg);
  }
  30% {
    -webkit-transform: translateX(5px) rotate(-6deg);
            transform: translateX(5px) rotate(-6deg);
  }
  45% {
    -webkit-transform: translateX(-5px) rotate(3.6deg);
            transform: translateX(-5px) rotate(3.6deg);
  }
  60% {
    -webkit-transform: translateX(4px) rotate(-2.4deg);
            transform: translateX(4px) rotate(-2.4deg);
  }
  75% {
    -webkit-transform: translateX(-2px) rotate(1.2deg);
            transform: translateX(-2px) rotate(1.2deg);
  }
}

`;
