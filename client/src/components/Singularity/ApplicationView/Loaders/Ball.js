import React, { useRef, useEffect, useState } from 'react';
import { TimelineMax, Circ, Power3, gsap } from 'gsap';
import Loaders from 'components/Singularity/ApplicationView/Loaders';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';

import {
  Ball,
  BallContainer,
  Shadow,
  Wall,
  MainContainer,
  LoadingText,
  TextContainer,
  DoneText,
  LoadingTextContiner,
  DoneTextContainer
} from 'styles/Singularity/Style1.0/Loaders/Ball';
import styled from 'styled-components';

const BallLoader = props => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (props.isComplete) {
      setTimeout(() => setRedirect(true), 2000);
    }
  }, [props.isComplete]);

  if (redirect) {
    return window.location.reload();
  }
  return (
    <>
      <div>
        <MainContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeOut',
            duration: 0.8
          }}
          exit={{ opacity: 0 }}
          completed={props.isComplete}
        >
          <TextContainer>
            {props.isComplete ? (
              <DoneTextContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: 'easeOut',
                  duration: 0.9
                }}
                exit={{ opacity: 0 }}
              >
                <DoneText>Done</DoneText>
              </DoneTextContainer>
            ) : (
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
            )}
          </TextContainer>
          <Loaders />
        </MainContainer>
      </div>
    </>
  );
};

export default BallLoader;
