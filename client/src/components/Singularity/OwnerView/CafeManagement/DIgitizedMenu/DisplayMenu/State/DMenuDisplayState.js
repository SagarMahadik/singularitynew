import React, { useReducer, useEffect } from 'react';
import displayDMenuContext from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/State/dMenuDisplayContext.js';
import displayDMenuReducer from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/State/dMenuDisplayReducer.js';

import {
  SET_SLECTEDCATEGORY,
  SET_CATEGORYDATA,
  SET_LOADING,
  SET_DMENUPRODUCTDATA
} from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/types.js';

import { useHttpClient } from 'Hooks/httpsHooks';

import axios from 'axios';

const DMenuDisplayState = props => {
  const initialState = {
    categoryData: [],
    dMenuProductData: [],
    loading: false
  };

  const [state, dispatch] = useReducer(displayDMenuReducer, initialState);

  const { categoryData, dMenuProductData, loading } = state;

  useEffect(() => {
    getData('/api/v1/category', 'SET_CATEGORYDATA');
    getData('/api/v1/dMenuProduct', 'SET_DMENUPRODUCTDATA');
  }, []);

  const { sendRequest, error } = useHttpClient();

  const getData = async (url, typeString) => {
    try {
      let res = await sendRequest(url);

      dispatch({
        type: `${typeString}`,
        payload: res
      });
    } catch (err) {}
  };

  return (
    <displayDMenuContext.Provider
      value={{
        categoryData,
        dMenuProductData,
        loading
      }}
    >
      {props.children}
    </displayDMenuContext.Provider>
  );
};

export default DMenuDisplayState;
