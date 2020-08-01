import React, { useEffect, useRef } from 'react';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { TimelineLite, Power3, Power2, Linear, RoughEase } from 'gsap';

import {
  Background,
  LandingPageContainer,
  BackgroundImage,
  LandingPageContentContainer,
  ContentContainer,
  Content,
  Button,
  Quote,
  AuthorName
} from 'styles/Singularity/Style1.0/LaandingPageStyles';
import { useLocation } from 'react-router-dom';

import Logo from 'components/Singularity/ApplicationView/Logo';

const LandingPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let image = useRef(null);
  let overlay = useRef(null);
  let logo = useRef(null);
  let contentRef = useRef([]);
  let tl = new TimelineLite();

  useEffect(() => {
    tl.fromTo(
      logo,
      0.5,
      { opacity: 0 },
      { opacity: 1, ease: Power2.easeInOut, scale: 1.6 }
    );
    tl.fromTo(
      contentRef.current,
      1.5,
      { opacity: 0 },
      { opacity: 1, ease: Power2.easeInOut, stagger: 0.7 }
    );
    tl.to(overlay, 1.2, { width: '0%', ease: Power3.easeInOut, delay: -1.2 });
    tl.from(image, 1.6, {
      scale: 1.4,
      ease: Power2.easeInOut,
      delay: -1.6
    });
    tl.fromTo(
      contentRef.current[2],
      0.5,
      { x: 10 },
      {
        x: -10,
        ease: 'wiggle',
        clearProps: 'x',
        delay: -0.4
      }
    );
  });

  return (
    <LandingPageContainer>
      <Background
        ref={el => {
          overlay = el;
        }}
      >
        {' '}
      </Background>
      <BackgroundImage
        ref={el => {
          image = el;
        }}
        src="https://res.cloudinary.com/antilibrary/image/upload/v1596298612/Piatto/IMG_0470_1_hlcmy6.jpg"
      />

      <LandingPageContentContainer>
        <ContentContainer>
          <Logo
            ref={el => {
              logo = el;
            }}
          />

          <Content
            ref={el => {
              contentRef.current[0] = el;
            }}
          >
            Premium handcrafted delicacies
          </Content>
          <Button
            ref={el => {
              contentRef.current[2] = el;
            }}
            to="/addProduct"
          >
            Lets go!
          </Button>
          <div
            ref={el => {
              contentRef.current[1] = el;
            }}
          >
            <Quote>I'm not a vegetarian, I'm a dessertarian</Quote>
            <AuthorName>Bill Waterson</AuthorName>
          </div>
        </ContentContainer>
      </LandingPageContentContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
