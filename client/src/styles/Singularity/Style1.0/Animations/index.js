import { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import styled from 'styled-components';

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

export const MainContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  z-index: -1;
  background-image: url('https://res.cloudinary.com/antilibrary/image/upload/v1596378567/bck_2_lbhkag.svg');
`;

export const MainProductConatiner = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  z-index: -1;
`;
