import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import AddAddOn from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAddOnItems/AddAddOn';
import AddAddonItemState from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAddOnItems/AddAddOnItemsState/AddAddOnItemState';
import AddAdditionalProductInformation from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAdditionalProductInformation/AddAdditionalProductInformation/AddAdditionalProductInformation.js';
import AddAdditionalProductInformationState from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAdditionalProductInformation/AddAdditionalProductInformationState/AddAdditionalProductInformationsState.js';
import AddProduct from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/AddProduct.js';
import AddProductState from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/AddProductState.js';

import Routes from "components/Routing/Routes.js";
import LandingPage from "components/Singularity/OwnerView/LandingPage.js"

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
