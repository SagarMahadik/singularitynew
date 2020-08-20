import React, { useContext } from 'react';
import {
  FormHeadingText,
  FormSectionHeadingTextContainer
} from 'styles/Singularity/Style1.0/TextStyles';
import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import {
  RawMaterial,
  Quantity,
  QuantityUnit,
  BaseRate,
  CostOfRawMaterial,
  BaseRateUnit,
  GridContainenr,
  QuantityDisplay,
  DeleteIcon,
  TotalCost,
  TotalCostText,
  FinalRawMaterialCost
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

const RecipeBasicRecipies = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    recipeBasicRecipes,
    handleRemoveRawMaterial,
    handleBasicRecipeRMQuantityChange,
    handleRateChange,
    handleBasicRecipeRMRateChange
  } = RecipeManagementContext;

  return (
    <RecipeManagementContainer>
      <FormHeadingText>
        <FormSectionHeadingTextContainer>
          Basic Recipe Details
        </FormSectionHeadingTextContainer>
      </FormHeadingText>

      {recipeBasicRecipes.length > 0
        ? recipeBasicRecipes.map((material, index) => {
            return (
              <RecipeManagementContainer key={index}>
                {material.name}
                <GridContainenr>
                  <RawMaterial style={{ fontWeight: 'bold' }}>
                    Raw Material
                  </RawMaterial>
                  <QuantityDisplay style={{ fontWeight: 'bold' }}>
                    Quantity
                  </QuantityDisplay>

                  <BaseRate style={{ fontWeight: 'bold' }}>Rate </BaseRate>

                  <CostOfRawMaterial style={{ fontWeight: 'bold' }}>
                    Cost
                  </CostOfRawMaterial>
                  <h6 style={{ margin: '0', opacity: '0' }}>Delete</h6>
                </GridContainenr>

                {material.details.map(item => {
                  return (
                    <>
                      <GridContainenr>
                        <RawMaterial>{item.rawMaterial}</RawMaterial>
                        <div
                          style={{
                            display: 'flex',
                            flexDirecction: 'row',
                            alignItems: 'baseline',
                            justifyContent: 'center',
                            marginLeft: '-10px'
                          }}
                        >
                          <Quantity
                            type="text"
                            name="quantity"
                            defaultValue={item.quantityInRecipe}
                            onChange={handleBasicRecipeRMQuantityChange(
                              item._id,
                              material.name,
                              index
                            )}
                          />
                          <QuantityUnit>{item.recipeUnit}</QuantityUnit>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirecction: 'row',
                            alignItems: 'baseline',
                            justifyContent: 'center'
                          }}
                        >
                          <Quantity
                            type="text"
                            defaultValue={item.rate}
                            onChange={handleBasicRecipeRMRateChange(
                              item._id,
                              material.name,
                              index
                            )}
                          />
                          <BaseRateUnit>
                            /{item.baseQuantity}
                            {item.baseUnit}
                          </BaseRateUnit>
                        </div>
                        <CostOfRawMaterial>
                          {(item.rate * item.quantityInRecipe) /
                            item.baseQuantity}
                        </CostOfRawMaterial>
                        <DeleteIcon
                          onClick={() => handleRemoveRawMaterial(item._id)}
                          style={{ margin: '0' }}
                        />
                      </GridContainenr>
                    </>
                  );
                })}
              </RecipeManagementContainer>
            );
          })
        : null}

      <PartialWidthDivider />
      <TotalCost>
        <TotalCostText>Total Basic Recipe Cost</TotalCostText>
      </TotalCost>
      <PartialWidthDivider />
    </RecipeManagementContainer>
  );
};

export default RecipeBasicRecipies;
