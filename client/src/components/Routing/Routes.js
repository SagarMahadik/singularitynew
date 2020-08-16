import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddProductMainComponent from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/AddProductMainComponent';
import RecipeManagementMainComponent from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/RecipeManagementMainComponent.js';
import Ball from 'components/Singularity/ApplicationView/Loaders/Ball';
import ImageGallery from 'components/Singularity/ApplicationView/ImageGallery';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/addProduct" component={AddProductMainComponent} />
      <Route
        exact
        path="/recipeManagement"
        component={RecipeManagementMainComponent}
      />
      <Route exact path="/gallery" component={ImageGallery} />
    </Switch>
  );
}
