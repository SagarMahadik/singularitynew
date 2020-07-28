import React from 'react';
import Logo from 'components/Singularity/ApplicationView/Logo';
import {
  LeftAlignedRowContainer,
  CenterAlignedColumnContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';
import { FormHeadingText } from 'styles/Singularity/Style1.0/TextStyles';
import { FullWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

const FormHeadings = props => {
  return (
    <>
      <CenterAlignedColumnContainer>
        <LeftAlignedRowContainer>
          <Logo />
          <FormHeadingText>{props.heading}</FormHeadingText>
        </LeftAlignedRowContainer>
        <FullWidthDivider />
      </CenterAlignedColumnContainer>
    </>
  );
};

export default FormHeadings;
