import React, { useContext } from 'react';
import {
  RecipeName,
  InputWrapper,
  RecipeNameLabel
} from 'styles/Singularity/Style1.0/FormInputStyles';
import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';

const RecipeNameComponent = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const { handleChangeFor, recipeName } = RecipeManagementContext;
  return (
    <>
      <RecipeManagementContainer>
        <InputWrapper>
          <RecipeName
            placeholder=" "
            type="text"
            name="recipeName"
            value={recipeName}
            onChange={handleChangeFor('recipeName')}
          />
          <RecipeNameLabel>Recipe Name</RecipeNameLabel>
        </InputWrapper>
        <PartialWidthDivider />
      </RecipeManagementContainer>
    </>
  );
};

export default RecipeNameComponent;
