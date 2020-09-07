import React, { useContext, useRef, useEffect, useState } from 'react';
import {
  FormHeadingText,
  FormSectionHeadingTextContainer
} from 'styles/Singularity/Style1.0/TextStyles';

import AddIcon from 'components/Singularity/ApplicationView/Icons/AddIcon.js';
import DeleteIcon from 'components/Singularity/ApplicationView/Icons/DeleteIcon.js';
import HideIcon from 'components/Singularity/ApplicationView/Icons/HideIcon.js';
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
  BasicRecipeNameContainer,
  TotalQuantity,
  RotateIcon,
  BasicRecipeName,
  LabelGridContainenr,
  TableContainer,
  QuantityDisplayProduction,
  NumberOfUnits
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

import SearchBoxResults from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SearchBoxResults.js';
import { AnimatePresence, motion } from 'framer-motion';

import animation from 'styles/Singularity/GSAPAnimations';

import { gsap } from 'gsap';

const RecipeBasicRecipies = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    recipeBasicRecipes,
    handleBasicRecipeRMQuantityChange,
    handleBasicRecipeRMRateChange,
    handleBasicRecipeRMDelete,
    handleRemoveBasicRecipe,
    handleBasicRecipeMSearchFilter,
    handleBasicRecipeDisplay,
    hideBasicRecipeRMOnDelete,
    handleBasicRecipeUnits
  } = RecipeManagementContext;

  const basicRcipeRefs = useRef([]);
  basicRcipeRefs.current = [];

  const basicRcipeRMRefs = useRef([]);
  basicRcipeRMRefs.current = [];

  const addToRefs = el => {
    if (el && !basicRcipeRefs.current.includes(el)) {
      basicRcipeRefs.current.push(el);
    }
  };

  const addRMToRefs = el => {
    if (el && !basicRcipeRMRefs.current.includes(el)) {
      basicRcipeRMRefs.current.push(el);
      console.log(basicRcipeRMRefs);
    }
  };

  useEffect(() => {
    console.log(basicRcipeRefs);
    console.log(basicRcipeRMRefs);

    gsap.fromTo(
      basicRcipeRefs.current,
      { opacity: 0 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        delay: 0.4,
        duration: 0.8,
        ease: 'Power3.easeIn'
      }
    );

    return () => {};
  }, []);

  const [hideItem, setHideItem] = useState(true);

  return (
    <AnimatePresence>
      <AnimationContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeOut',
          duration: 0.8
        }}
        exit={{ opacity: 0 }}
      >
        <RecipeManagementContainer>
          <BasicRecipeName>
            <FormSectionHeadingTextContainer>
              Basic Recipe Details
            </FormSectionHeadingTextContainer>
          </BasicRecipeName>
          <RotateIcon clicked={hideItem}>
            <HideIcon onClick={() => setHideItem(!hideItem)} />
          </RotateIcon>
          <AnimatePresence>
            {hideItem
              ? recipeBasicRecipes.length > 0
                ? recipeBasicRecipes.map((material, index) => {
                    return (
                      <RecipeManagementContainer key={index}>
                        <BasicRecipeNameContainer>
                          <FormHeadingText>{material.name}</FormHeadingText>
                          <NumberOfUnits
                            type="number"
                            defaultValue={material.unitPerBaseQuantity}
                            onChange={handleBasicRecipeUnits(index)}
                          />
                          <DeleteIcon
                            onClick={() =>
                              handleRemoveBasicRecipe(material._id)
                            }
                          />
                          <RotateIcon clicked={material.showItem}>
                            <HideIcon
                              onClick={() =>
                                handleBasicRecipeDisplay(material._id)
                              }
                            />
                          </RotateIcon>
                        </BasicRecipeNameContainer>
                        {material.showItem ? (
                          <>
                            {material.showSearchBox && (
                              <SearchBoxResults
                                arrayIndex={index}
                                basicRecipeID={material._id}
                              />
                            )}
                            <LabelGridContainenr>
                              <RawMaterial style={{ fontWeight: 'bold' }}>
                                Raw Material
                              </RawMaterial>
                              <QuantityDisplay style={{ fontWeight: 'bold' }}>
                                Quantity
                              </QuantityDisplay>

                              <BaseRate style={{ fontWeight: 'bold' }}>
                                Rate{' '}
                              </BaseRate>

                              <CostOfRawMaterial style={{ fontWeight: 'bold' }}>
                                Cost
                              </CostOfRawMaterial>
                              <h6 style={{ margin: '0', opacity: '0' }}>
                                Delete
                              </h6>
                            </LabelGridContainenr>

                            {material.details.map((item, index1) => {
                              return (
                                <>
                                  <AnimationContainer
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                      ease: 'easeOut',
                                      duration: 0.5
                                    }}
                                    exit={{ opacity: 0 }}
                                  >
                                    <GridContainenr
                                      className="basicReccipe"
                                      ref={addToRefs}
                                      clicked={item.hiddeRM}
                                      isEven={index1 % 2 === 0}
                                    >
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
                                        <QuantityDisplayProduction
                                          isEven={index1 % 2 === 0}
                                          clicked={item.hiddeRM}
                                        >
                                          {item.quantityPerUnit *
                                            material.unitPerBaseQuantity}
                                        </QuantityDisplayProduction>

                                        <QuantityUnit>
                                          {item.recipeUnit}
                                        </QuantityUnit>
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
                                          value={item.rate}
                                          clicked={item.hiddeRM}
                                          onChange={handleBasicRecipeRMRateChange(
                                            item._id,
                                            material.name,
                                            index
                                          )}
                                          isEven={index1 % 2 === 0}
                                        />
                                        <BaseRateUnit>
                                          /{item.baseQuantity}
                                          {item.baseUnit}
                                        </BaseRateUnit>
                                      </div>
                                      <CostOfRawMaterial>
                                        {Math.round(
                                          (item.rate *
                                            item.quantityPerUnit *
                                            material.unitPerBaseQuantity) /
                                            item.baseQuantity,
                                          0
                                        )}
                                      </CostOfRawMaterial>
                                      <DeleteIcon
                                        ref={addRMToRefs}
                                        onClick={() => {
                                          hideBasicRecipeRMOnDelete(
                                            index,
                                            index1
                                          );
                                          setTimeout(() => {
                                            handleBasicRecipeRMDelete(
                                              index,
                                              index1,
                                              item._id,
                                              material._id
                                            );
                                          }, 1200);
                                        }}
                                      />
                                    </GridContainenr>
                                  </AnimationContainer>
                                </>
                              );
                            })}
                            <AddIcon
                              onClick={() =>
                                handleBasicRecipeMSearchFilter(material._id)
                              }
                            />
                            <DetailsContainer>
                              <TotalCostText>{`${
                                material.name
                              }`}</TotalCostText>

                              <FinalRawMaterialCost>
                                {Math.round(
                                  material.details.reduce(
                                    (total, obj) =>
                                      (obj.rate *
                                        obj.quantityPerUnit *
                                        material.unitPerBaseQuantity) /
                                        obj.baseQuantity +
                                      total,
                                    0
                                  )
                                )}
                              </FinalRawMaterialCost>
                              <TotalQuantity>
                                <FinalRawMaterialCost>
                                  /
                                  {Math.round(
                                    material.details.reduce(
                                      (total, obj) =>
                                        Number(
                                          obj.quantityPerUnit *
                                            material.unitPerBaseQuantity
                                        ) + total,
                                      0
                                    )
                                  )}
                                </FinalRawMaterialCost>
                                <BaseRateUnit style={{ marginLeft: '2px' }}>
                                  gm
                                </BaseRateUnit>
                              </TotalQuantity>
                            </DetailsContainer>
                          </>
                        ) : null}
                      </RecipeManagementContainer>
                    );
                  })
                : null
              : null}
          </AnimatePresence>
          <PartialWidthDivider />
          <DetailsContainer>
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
            <TotalQuantity>
              <FinalRawMaterialCost>
                /
                {Math.round(
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
      </AnimationContainer>
    </AnimatePresence>
  );
};

export default RecipeBasicRecipies;
