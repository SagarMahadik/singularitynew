import React, { useContext } from 'react';

import {
  RadioButtonText,
  TextContainer,
  FormHeadingText,
  FormSectionHeadingTextContainer,
  ButtonText
} from 'styles/Singularity/Style1.0/TextStyles';

import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import { TextRadioButton } from 'styles/Singularity/Style1.0/FormInputStyles';

import {
  SaveOptionsContainer,
  RecipeSubmitButton
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';
import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
const SubmitRecipe = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    saveOptionDisplay,
    saveOption,
    handleSaveOption,
    onSubmit
  } = RecipeManagementContext;

  return (
    <>
      <RecipeManagementContainer>
        <FormHeadingText>
          <FormSectionHeadingTextContainer>
            Save this recipe as a:
          </FormSectionHeadingTextContainer>
        </FormHeadingText>

        <SaveOptionsContainer>
          {saveOptionDisplay.map((item, index) => {
            return (
              <TextRadioButton
                value={item.optionValue}
                selected={saveOption === `${item.optionValue}`}
                onClick={handleSaveOption}
              >
                <RadioButtonText
                  selected={saveOption === `${item.optionValue}`}
                >
                  <TextContainer>{item.option}</TextContainer>
                </RadioButtonText>
              </TextRadioButton>
            );
          })}
        </SaveOptionsContainer>
        <RecipeSubmitButton onClick={onSubmit}>
          <ButtonText>I am Done</ButtonText>
        </RecipeSubmitButton>
        <PartialWidthDivider />
      </RecipeManagementContainer>
    </>
  );
};

export default SubmitRecipe;
