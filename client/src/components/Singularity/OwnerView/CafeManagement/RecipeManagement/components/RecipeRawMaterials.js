import React, { useContext } from 'react';
import {
  RadioButtonText,
  TextContainer,
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

const RecipeRawMaterials = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    recipeRawMaterials,
    handleRemoveRawMaterial,
    handleQuantityChange,
    handleRateChange
  } = RecipeManagementContext;

  return (
    <RecipeManagementContainer>
      <FormHeadingText>
        <FormSectionHeadingTextContainer>
          Raw Material Details
        </FormSectionHeadingTextContainer>
      </FormHeadingText>
      <GridContainenr>
        <RawMaterial style={{ fontWeight: 'bold' }}>Raw Material</RawMaterial>
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
            <GridContainenr key={index}>
              <RawMaterial>{material.rawMaterial}</RawMaterial>
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
                  defaultValue={material.quantityInRecipe}
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
                  type="text"
                  value={material.rate}
                  onChange={handleRateChange(material._id)}
                />
                <BaseRateUnit>
                  /{material.baseQuantity}
                  {material.baseUnit}
                </BaseRateUnit>
              </div>
              <CostOfRawMaterial>
                {(material.rate * material.quantityInRecipe) /
                  material.baseQuantity}
              </CostOfRawMaterial>
              <DeleteIcon
                onClick={() => handleRemoveRawMaterial(material._id)}
                style={{ margin: '0' }}
              />
            </GridContainenr>
          </>
        );
      })}
      <PartialWidthDivider />
      <TotalCost>
        <TotalCostText>Total Food Cost</TotalCostText>
        <FinalRawMaterialCost>
          {Math.round(
            recipeRawMaterials.reduce(
              (total, obj) => obj.costOfRawMaterial + total,
              0
            )
          )}
        </FinalRawMaterialCost>
      </TotalCost>
    </RecipeManagementContainer>
  );
};

export default RecipeRawMaterials;
