import React from 'react';
import Logo from 'components/Singularity/ApplicationView/Logo';
import PiattoTagLine from 'components/Singularity/ApplicationView/PiattoTagLine';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';

const LogoWithPiattoTagline = () => {
  return (
    <CenterAlignedColumnContainer>
      <Logo />
      <PiattoTagLine />
    </CenterAlignedColumnContainer>
  );
};

export default LogoWithPiattoTagline;
