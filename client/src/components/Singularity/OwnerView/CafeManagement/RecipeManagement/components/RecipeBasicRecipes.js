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
  BasicRecipeName
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

import SearchBoxResults from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SearchBoxResults.js';
import { AnimatePresence, motion } from 'framer-motion';

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
    handleBasicRecipeDisplay
  } = RecipeManagementContext;

  const basicRcipeRefs = useRef([]);
  basicRcipeRefs.current = [];

  const addToRefs = el => {
    if (el && !basicRcipeRefs.current.includes(el)) {
      basicRcipeRefs.current.push(el);
    }
  };

  useEffect(() => {
    console.log(basicRcipeRefs);

    gsap.fromTo(
      basicRcipeRefs.current,
      { opacity: 0 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
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
          duration: 2
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

          {hideItem
            ? recipeBasicRecipes.length > 0
              ? recipeBasicRecipes.map((material, index) => {
                  return (
                    <RecipeManagementContainer key={index}>
                      <BasicRecipeNameContainer>
                        <FormHeadingText>{material.name}</FormHeadingText>
                        <DeleteIcon
                          onClick={() => handleRemoveBasicRecipe(material._id)}
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
                          <AddIcon
                            onClick={() =>
                              handleBasicRecipeMSearchFilter(material._id)
                            }
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

                            <BaseRate style={{ fontWeight: 'bold' }}>
                              Rate{' '}
                            </BaseRate>

                            <CostOfRawMaterial style={{ fontWeight: 'bold' }}>
                              Cost
                            </CostOfRawMaterial>
                            <h6 style={{ margin: '0', opacity: '0' }}>
                              Delete
                            </h6>
                          </GridContainenr>
                          {material.details.map(item => {
                            return (
                              <>
                                <AnimatePresence>
                                  <AnimationContainer
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                      ease: 'easeOut',
                                      duration: 3
                                    }}
                                    exit={{ opacity: 0 }}
                                  >
                                    <GridContainenr
                                      className="basicReccipe"
                                      ref={addToRefs}
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
                                        <Quantity
                                          type="number"
                                          name="quantity"
                                          defaultValue={item.quantityInRecipe}
                                          onChange={handleBasicRecipeRMQuantityChange(
                                            item._id,
                                            material.name,
                                            index
                                          )}
                                        />
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
                                        {Math.round(
                                          (item.rate * item.quantityInRecipe) /
                                            item.baseQuantity,
                                          0
                                        )}
                                      </CostOfRawMaterial>
                                      <DeleteIcon
                                        onClick={() =>
                                          handleBasicRecipeRMDelete(
                                            index,
                                            item._id,
                                            material._id
                                          )
                                        }
                                      />
                                    </GridContainenr>
                                  </AnimationContainer>
                                </AnimatePresence>
                              </>
                            );
                          })}
                          <DetailsContainer>
                            <TotalCostText>{`${material.name}`}</TotalCostText>

                            <FinalRawMaterialCost>
                              {Math.round(
                                material.details.reduce(
                                  (total, obj) => obj.costOfRawMaterial + total,
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
                                      Number(obj.quantityInRecipe) + total,
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
