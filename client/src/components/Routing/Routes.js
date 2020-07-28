
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddProductMainComponent from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/AddProductMainComponent';



export default function Routes() {
  return (
    <Switch>
      <Route exact path="/addProduct" component={AddProductMainComponent} />
    </Switch>
  );
}

