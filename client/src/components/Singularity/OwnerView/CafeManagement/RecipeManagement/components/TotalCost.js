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
  const { recipeBasicRecipes, recipeRawMaterials } = RecipeManagementContext;
  return (
    <>
      <RecipeManagementContainer>
        <DetailsContainer>
          <TotalCostText style={{ fontWeight: 'bold' }}>
            Total Recipe Cost
          </TotalCostText>

          <FinalRawMaterialCost>
            {Math.round(
              recipeRawMaterials.reduce(
                (total, obj) => obj.costOfRawMaterial + total,
                0
              )
            ) +
              Math.round(
                recipeBasicRecipes.reduce(
                  (total, obj) =>
                    obj.details.reduce(
                      (total1, obj1) => obj1.costOfRawMaterial + total1,
                      0
                    ) + total,
                  0
                )
              )}
          </FinalRawMaterialCost>
          <TotalQuantity>
            <FinalRawMaterialCost>
              /
              {Math.round(
                recipeRawMaterials.reduce(
                  (total, obj) => Number(obj.quantityInRecipe) + total,
                  0
                )
              ) +
                Math.round(
                  recipeBasicRecipes.reduce(
                    (total, obj) =>
                      obj.details.reduce(
                        (total1, obj1) =>
                          Number(obj1.quantityInRecipe) + total1,
                        0
                      ) + total,
                    0
                  )
                )}
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
