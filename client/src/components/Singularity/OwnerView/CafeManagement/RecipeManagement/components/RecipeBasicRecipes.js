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
  AddIcon,
  TotalCost,
  TotalCostText,
  FinalRawMaterialCost
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

import SearchBoxResults from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SearchBoxResults.js';

const RecipeBasicRecipies = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    recipeBasicRecipes,
    handleBasicRecipeRMQuantityChange,
    handleBasicRecipeRMRateChange,
    handleBasicRecipeRMDelete,
    handleRemoveBasicRecipe,
    handleBasicRecipeMSearchFilter
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
                <FormHeadingText>{material.name}</FormHeadingText>
                <DeleteIcon
                  onClick={() => handleRemoveBasicRecipe(material._id)}
                  style={{ margin: '0' }}
                />
                <AddIcon
                  onClick={() => handleBasicRecipeMSearchFilter(material._id)}
                />
                {material.showSearchBox && (
                  <SearchBoxResults
                    arrayIndex={index}
                    basicRecipeID={material._id}
                  />
                )}

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
                        <RawMaterial>{item.name}</RawMaterial>
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
                            value={item.rate}
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
                          onClick={() =>
                            handleBasicRecipeRMDelete(
                              index,
                              item._id,
                              material._id
                            )
                          }
                          style={{ margin: '0' }}
                        />
                      </GridContainenr>
                    </>
                  );
                })}
                <TotalCost>
                  <TotalCostText>{`${material.name} Cost`}</TotalCostText>
                  <FinalRawMaterialCost>
                    {Math.round(
                      material.details.reduce(
                        (total, obj) => obj.costOfRawMaterial + total,
                        0
                      )
                    )}
                  </FinalRawMaterialCost>
                </TotalCost>
              </RecipeManagementContainer>
            );
          })
        : null}
      <PartialWidthDivider />
      <TotalCost>
        <TotalCostText>Total Basic Recipe Cost</TotalCostText>
        <FinalRawMaterialCost>
          {Math.round(
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
      </TotalCost>
    </RecipeManagementContainer>
  );
};

export default RecipeBasicRecipies;
