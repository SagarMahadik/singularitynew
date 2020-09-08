import React, { useContext } from 'react';
import {
  BaseRateUnit,
  DetailsContainer,
  TotalCostText,
  FinalRawMaterialCost,
  TotalQuantity
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';

import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
const TotalCost = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    totalRawMQuantityInRecipe,
    totalRawMaterialCostInRecipe,
    totalBasicRecipeRAWMQuantity,
    totalBasicRecipeRAWMCost
  } = RecipeManagementContext;
  return (
    <>
      <RecipeManagementContainer>
        <DetailsContainer>
          <TotalCostText style={{ fontWeight: 'bold' }}>
            Total Recipe Cost
          </TotalCostText>

          <FinalRawMaterialCost>
            {Number(totalRawMaterialCostInRecipe) +
              Number(totalBasicRecipeRAWMCost)}
          </FinalRawMaterialCost>
          <TotalQuantity>
            <FinalRawMaterialCost>
              /{totalRawMQuantityInRecipe + totalBasicRecipeRAWMQuantity}
            </FinalRawMaterialCost>
            <BaseRateUnit>gm</BaseRateUnit>
          </TotalQuantity>
        </DetailsContainer>
        <PartialWidthDivider />
      </RecipeManagementContainer>
    </>
  );
};

export default TotalCost;
