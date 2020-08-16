import React from 'react';

import RecipeName from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeName.js';
import SearchItems from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SeachItems.js';
import RecipeRawMaterials from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeRawMaterials.js';
import SearchResults from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SearchResults.js';

const RecipeManagement = () => {
  return (
    <>
      <RecipeName />
      <SearchItems />
      <RecipeRawMaterials />
    </>
  );
};

export default RecipeManagement;
