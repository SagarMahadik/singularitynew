import styled, { keyframes } from 'styled-components/macro';

import {
  ColumnContainer,
  RowContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import { PTSansText } from 'styles/Singularity/Style1.0/TextStyles';

import { SubmitButton } from 'styles/Singularity/Style1.0/ButtonStyles';

import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';

export const GridContainenr = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 38% 20% 20% 12% 8%;
  grid-auto-rows: 35px;
  align-items: center;
  justify-items: center;
  color: ${styles.formContentColor};
  font-size: 12px;
  font-family: PT Sans;
`;

export const RawMaterial = styled.div`
  text-align: center;
  align-self: center;
  justify-self: center;
`;

export const QuantityDisplay = styled.div`
  align-self: center;
  justify-self: center;
`;

export const Quantity = styled.input`
  font-size: 12px;
  width: 28px;
  height: 1em;
  outline: none;
  border: none;
  color: #6e5dcc;
  text-align: right;
  padding-top: 3px;
  &:focus {
    outline: none;
    border: 1px solid #6e5dcc;
  }
`;

export const QuantityUnit = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
`;

export const BaseRate = styled.div`
  align-self: center;
  justify-self: center;
`;

export const BaseRateUnit = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
`;

export const CostOfRawMaterial = styled.div`
  align-self: center;
  justify-self: center;
`;

export const SearchResultContainer = styled(ColumnContainer)`
  width: 80%;
  height: 2.5em;
  align-items: flex-start;
  border: 1px solid #cac9cf;
  box-sizing: border-box;
  color: ${styles.formContentColor};
  padding-left: 10px;
  border-radius: 5px;
  background: rgba(176, 167, 229, 0.2);
`;

export const SearchResultText = styled(PTSansText)`
  font-size: 14px;
`;

export const SearchBrandName = styled(PTSansText)`
  font-size: 10px;
`;

export const SearchPrice = styled(PTSansText)`
  font-size: 10px;
  margin-left: 10px;
`;

export const SearchBaseUnitRate = styled(PTSansText)`
  font-size: 10px;
`;

export const BrandPriceContainer = styled(RowContainer)`
  align-items: flex-start;
  padding: 4px;
`;

export const DeleteIcon = styled.div`
  width: 10px;
  height: 1em;
  border-radius: 50%;
  border: 5px solid ${styles.formContentColor};
`;

export const AddIcon = styled.div`
  width: 10px;
  height: 1em;
  border-radius: 50%;
  border: 5px solid #28b463;
`;

export const TotalCost = styled(RowContainer)`
  width: 60%;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 10px;
`;

export const TotalCostText = styled(PTSansText)`
  font-size: 16px;
  color: ${styles.formContentColor};
  font-weight: bold;
`;

export const FinalRawMaterialCost = styled(PTSansText)`
  font-size: 16px;
  color: ${styles.formContentColor};
`;

export const SaveOptionsContainer = styled(RowContainer)`
  width: 90%;
  justify-content: space-evenly;
  margin-top: 1em;
  overflow-y: auto;
  @media (min-width: 765px) {
    width: 60%;
  }
`;

export const RecipeSubmitButton = styled(SubmitButton)`
  margin-top: 2em;
`;
