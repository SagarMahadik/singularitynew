import styled from 'styled-components';
import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';

import {
  CenterAlignedColumnContainer,
  RowContainer,
  ColumnContainer
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
  height: 154px;
  width: 162px;
  border-radius: 5px solid ${styles.dMenuContentColor};
  border: 15px;
`;

export const InnerBox = styled(CenterAlignedColumnContainer)`
  height: 140px;
  width: 150px;
  border-radius: 5px solid ${styles.dMenuContentColor};
  border: 10px;
`;

export const CategoryText = styled(PTSansText)`
  font-size: 25px;
  color: ${styles.dMenuContentColor};
`;
