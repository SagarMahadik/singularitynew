import React, { useRef, useEffect } from 'react';
import { TimelineMax, Circ, Power3, gsap } from 'gsap';

import {
  Ball,
  BallContainer,
  Shadow,
  Wall,
  MainContainer,
  LoadingText,
  TextContainer,
  DoneText,
  LoadingTextContiner
} from 'styles/Singularity/Style1.0/Loaders/Ball';
import styled from 'styled-components';

function BallLoader() {
  let ballRef = useRef(null);
  let textRef = useRef(null);
  let mainRef = useRef(null);

  useEffect(() => {
    let backcolor = '#ffffff';
    let ease = Circ.easeIn;
    var tl = new TimelineMax({ repeat: -1, yoyo: true });
    tl.add('start')
      .to(ballRef.current, 0.8, {
        y: 100,
        ease: ease
      })
      .to(
        ballRef.current,
        0.1,
        {
          scaleY: 0.6,
          transformOrigin: 'center bottom',
          borderBottomLeftRadius: '40%',
          borderBottomRightRadius: '40%',
          ease: ease
        },
        '-=.05'
      );

    gsap.fromTo(
      textRef.current,
      0.8,
      {
        opacity: 0,
        y: -100,
        ease: 'bouce.ease',
        delay: 1.2
      },
      {
        y: 0,
        opacity: 1,
        ease: 'bounce.easeOut'
      }
    );
    gsap.from(mainRef.current, 0.8, {
      backgroundColor: backcolor,
      ease: 'none',
      duration: 1
    });
  });
  return (
    <>
      <div ref={mainRef}>
        <MainContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeOut',
            duration: 0.8
          }}
          exit={{ opacity: 0 }}
          ref={mainRef}
        >
          <TextContainer>
            <LoadingTextContiner
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeOut',
                duration: 0.3
              }}
              exit={{ opacity: 0 }}
            >
              <LoadingText>Working on it..</LoadingText>
            </LoadingTextContiner>
            <DoneText ref={textRef}>Done :-)</DoneText>
          </TextContainer>
          <BallContainer>
            <Ball ref={ballRef} />
            <Wall src="https://res.cloudinary.com/antilibrary/image/upload/v1596128625/beautiful-purple-brick-wall-background_181624-2861_z5icys.jpg" />
          </BallContainer>
        </MainContainer>
      </div>
    </>
  );
}

export default BallLoader;
