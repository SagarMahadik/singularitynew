import React, { useRef, useEffect } from 'react';
import Logo from 'components/Singularity/ApplicationView/Logo';
import {
  LeftAlignedRowContainer,
  CenterAlignedColumnContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';
import { FormHeadingText } from 'styles/Singularity/Style1.0/TextStyles';
import { FullWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

const FormHeadings = React.forwardRef((props, headingRef) => {
  const { headingRef1, headingRef2 } = headingRef;
  return (
    <>
      <CenterAlignedColumnContainer>
        <LeftAlignedRowContainer ref={headingRef1}>
          <Logo ref={headingRef1} />
          <FormHeadingText ref={headingRef2}>{props.heading}</FormHeadingText>
        </LeftAlignedRowContainer>
        <FullWidthDivider />
      </CenterAlignedColumnContainer>
    </>
  );
});

export default FormHeadings;
