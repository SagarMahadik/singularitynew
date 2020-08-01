import React, { useEffect } from 'react';

import {
  Background,
  LandingPageContainer,
  LandingPageContentContainer,
  ContentContainer,
  Content,
  Button,
  Quote,
  AuthorName
} from 'styles/Singularity/CustomerView/LandingPage';
import { useLocation } from 'react-router-dom';

import Logo from 'components/Singularity/ApplicationView/Logo';

const LandingPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <LandingPageContainer>
      <Background />
      <LandingPageContentContainer>
        <ContentContainer>
          <Logo />
          <Content>Premium handcrafted delicacies</Content>
          <Button to="/addProduct">Lets go!</Button>
          <Quote>I'm not a vegetarian, I'm a dessertarian</Quote>
          <AuthorName>Bill Waterson</AuthorName>
        </ContentContainer>
      </LandingPageContentContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
