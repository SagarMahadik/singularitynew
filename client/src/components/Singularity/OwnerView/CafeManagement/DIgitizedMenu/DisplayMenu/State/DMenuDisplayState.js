import React, { useReducer, useEffect } from 'react';
import displayDMenuContext from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/State/dMenuDisplayContext.js';
import displayDMenuReducer from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/State/dMenuDisplayReducer.js';

import { SET_SLECTEDCATEGORY } from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/types.js';

const DMenuDisplayState = props => {
  const initialState = {
    activeCategory: '',
    loading: false
  };

  const [state, dispatch] = useReducer(displayDMenuReducer, initialState);

  const { activeCategory, loading } = state;

  const setCategory = category => {
    dispatch({
      type: SET_SLECTEDCATEGORY,
      payload: category
    });
  };

  return (
    <displayDMenuContext.Provider
      value={{
        activeCategory,
        loading,
        setCategory
      }}
    >
      {props.children}
    </displayDMenuContext.Provider>
  );
};

export default DMenuDisplayState;
