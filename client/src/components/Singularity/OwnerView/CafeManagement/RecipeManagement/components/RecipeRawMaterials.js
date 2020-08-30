import React, { useContext, useState } from 'react';
import {
  FormHeadingText,
  FormSectionHeadingTextContainer
} from 'styles/Singularity/Style1.0/TextStyles';
import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import {
  AnimationContainer,
  RawMaterial,
  Quantity,
  QuantityUnit,
  BaseRate,
  CostOfRawMaterial,
  BaseRateUnit,
  GridContainenr,
  QuantityDisplay,
  DetailsContainer,
  TotalCostText,
  FinalRawMaterialCost,
  RotateIcon
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

import DeleteIcon from 'components/Singularity/ApplicationView/Icons/DeleteIcon.js';
import HideIcon from 'components/Singularity/ApplicationView/Icons/HideIcon.js';
import { TotalQuantity } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement/index';

const RecipeRawMaterials = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    recipeRawMaterials,
    handleRemoveRawMaterial,
    handleQuantityChange,
    handleRateChange
  } = RecipeManagementContext;

  const [hideItem, setHideItem] = useState(true);

  return (
    <AnimationContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeOut',
        duration: 1.2
      }}
      exit={{ opacity: 0 }}
    >
      <RecipeManagementContainer>
        <FormHeadingText>
          <FormSectionHeadingTextContainer>
            Raw Material Details
          </FormSectionHeadingTextContainer>
        </FormHeadingText>
        <RotateIcon clicked={hideItem}>
          <HideIcon onClick={() => setHideItem(!hideItem)} />
        </RotateIcon>

        {hideItem ? (
          <>
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
            {recipeRawMaterials.map((material, index) => {
              return (
                <>
                  <AnimationContainer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      ease: 'easeOut',
                      duration: 1.2
                    }}
                    exit={{ opacity: 0 }}
                  >
                    <GridContainenr key={index}>
                      <RawMaterial>{material.name}</RawMaterial>
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
                          type="number"
                          name="quantity"
                          value={material.quantityInRecipe}
                          onChange={handleQuantityChange(material._id)}
                        />
                        <QuantityUnit>{material.recipeUnit}</QuantityUnit>
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
                          type="number"
                          value={material.rate}
                          onChange={handleRateChange(material._id)}
                        />
                        <BaseRateUnit>
                          /{material.baseQuantity}
                          {material.baseUnit}
                        </BaseRateUnit>
                      </div>
                      <CostOfRawMaterial>
                        {(
                          (material.rate * material.quantityInRecipe) /
                          material.baseQuantity
                        ).toFixed(2)}
                      </CostOfRawMaterial>
                      <DeleteIcon
                        onClick={() => handleRemoveRawMaterial(material._id)}
                        style={{ margin: '0' }}
                      />
                    </GridContainenr>
                  </AnimationContainer>
                </>
              );
            })}
          </>
        ) : null}
        <PartialWidthDivider />
        <DetailsContainer>
          <TotalCostText>Total Raw Material Cost</TotalCostText>
          <FinalRawMaterialCost>
            {Math.round(
              recipeRawMaterials.reduce(
                (total, obj) => obj.costOfRawMaterial + total,
                0
              )
            )}
          </FinalRawMaterialCost>
          <TotalQuantity>
            /
            <FinalRawMaterialCost>
              {Math.round(
                recipeRawMaterials.reduce(
                  (total, obj) => Number(obj.quantityInRecipe) + total,
                  0
                )
              )}
            </FinalRawMaterialCost>
            <BaseRateUnit>gm</BaseRateUnit>
          </TotalQuantity>
        </DetailsContainer>
        <PartialWidthDivider />
      </RecipeManagementContainer>
    </AnimationContainer>
  );
};

export default RecipeRawMaterials;
