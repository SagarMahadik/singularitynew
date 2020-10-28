import React, { useReducer, useEffect } from 'react';
import displayDMenuContext from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/State/dMenuDisplayContext.js';
import displayDMenuReducer from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/State/dMenuDisplayReducer.js';

import { SET_SLECTEDCATEGORY } from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/types.js';

const DMenuDisplayState = props => {
  const initialState = {
    selectedCategory: '',
    loading: false
  };

  const [state, dispatch] = useReducer(displayDMenuReducer, initialState);

  const { selectedCategory, loading } = state;

  const setCategory = e => {
    let categorySelected = e.currentTarget.value;

    dispatch({
      type: SET_SLECTEDCATEGORY,
      payload: categorySelected
    });
  };

  return (
    <displayDMenuContext.Provider
      value={{
        selectedCategory,
        loading,
        setCategory
      }}
    >
      {props.children}
    </displayDMenuContext.Provider>
  );
};

export default DMenuDisplayState;
