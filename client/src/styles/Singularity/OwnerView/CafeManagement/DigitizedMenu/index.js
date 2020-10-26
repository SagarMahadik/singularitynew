import styled from 'styled-components';
import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';

import {
  CenterAlignedColumnContainer,
  RowContainer,
  ColumnContainer,
  LeftAlignedRowContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  PTSansText,
  FormHeadingText
} from 'styles/Singularity/Style1.0/TextStyles';

import {
  SearchInputWrapper,
  SearchBox,
  SearchBoxLabel
} from 'styles/Singularity/Style1.0/FormInputStyles';

export const DMenuFormContainer = styled(CenterAlignedColumnContainer)``;

export const CategoryContainer = styled(RowContainer)`
  width: 90%;
  justify-content: space-evenly;
  overflow-y: auto;

  @media (min-width: 765px) {
    width: 60%;
  }
`;

export const SubCategoryContainer = styled(CategoryContainer)``;

export const ProductTypeContainer = styled(CategoryContainer)``;

export const OuterBorder = styled.div`
  display: block;
  height: 150px;
  width: 150px;
  border: 2px solid ${styles.dMenuContentColor};
  border-radius: 15px;
  padding-top: 5px;
  margin-right: 10px;
  margin-top: 10px;
  margin-left: 20px;
`;

export const InnerBox = styled(CenterAlignedColumnContainer)`
  height: 140px;
  width: 140px;
  border: 2px solid ${styles.dMenuContentColor};
  border-radius: 10px;
  background: ${props => props.backGroundcolor || 'white'};
`;

export const Background = styled(CenterAlignedColumnContainer)`
  height: 100vh;
`;

export const CategoryText = styled(PTSansText)`
  font-size: 25px;
  color: ${styles.dMenuContentColor};
`;

export const DMenuCategoryContainer = styled(LeftAlignedRowContainer)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;
