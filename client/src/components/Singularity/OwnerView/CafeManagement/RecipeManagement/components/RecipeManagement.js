import React, { useContext, useState, useEffect } from 'react';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import RecipeName from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeName.js';
import SearchItems from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SeachItems.js';
import RecipeRawMaterials from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeRawMaterials.js';
import SubmitRecipe from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SubmitRecipe.js';
import Ball from 'components/Singularity/ApplicationView/Loaders/Ball';
import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
const RecipeManagement = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    isDataUploaded,
    showLoader,
    loading,
    isRawmUploaded
  } = RecipeManagementContext;

  if (showLoader) {
    return <Ball loading={loading} isComplete={isDataUploaded} />;
  }
  return (
    <>
      <FormHeadings heading="Start Building Your Recipe" />
      <RecipeName />
      <SearchItems />
      <RecipeRawMaterials />
      <SubmitRecipe />
    </>
  );
};

export default RecipeManagement;
