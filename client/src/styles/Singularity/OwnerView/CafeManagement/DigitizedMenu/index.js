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
