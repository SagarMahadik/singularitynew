import React, { useReducer, useState, useEffect } from 'react';

import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import recipeManagementReducer from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementReducer.js';

import {
  SET_LOADING,
  SET_RAWMATERIALS,
  UPDATE_FIELD,
  UPDATE_SEARCHSTRING,
  UPDATE_SEARCHRESULTS,
  CLEAR_SEARCHRESULTS,
  UPDATE_RAWMATERIALS,
  REMOVE_RAWMATERIAL,
  UPDATE_RAWMATERIAL_PRICE,
  UPDATE_RAWMATERIAL_RATE,
  UPDATE_RAWMATERIAL_COST
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/types.js';

import { useHttpClient } from 'Hooks/httpsHooks';

const RecipeManagementState = props => {
  const initialState = {
    loading: false,
    rawMaterials: [],
    recipe: [],
    recipeName: '',
    searchFilter: 'rawMaterial',
    searchString: '',
    recipeRawMaterials: [],
    searchResults: [],
    currentArray: [],
    searchFilterDisplay: [
      { filterDisplay: 'Raw Material', filterValue: 'rawMaterial' },
      { filterDisplay: 'Basic Recipe', filterValue: 'basicRecipe' },
      { filterDisplay: 'Product', filterValue: 'product' }
    ]
  };

  const [searchText, setSearchText] = useState('');
  let [updatedRMArray, setUpdatedRMArray] = useState([]);

  const { sendRequest, error } = useHttpClient();

  const [state, dispatch] = useReducer(recipeManagementReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  useEffect(() => {
    getData('/api/v1/rawMaterial');
  }, []);
  useEffect(() => {
    if (state.searchString === '') {
      {
        dispatch({
          type: CLEAR_SEARCHRESULTS,
          payload: []
        });
      }
    }
  }, [state.searchString]);

  const getData = async url => {
    try {
      let res = await sendRequest(url);

      dispatch({
        type: SET_RAWMATERIALS,
        payload: res
      });
    } catch (err) {}
  };

  const handleChangeFor = input => e => {
    console.log('In a handle change');
    {
      dispatch({
        type: UPDATE_FIELD,
        payload: { input, value: e.target.value }
      });
    }
  };

  const handleSearchText = e => {
    let string = e.currentTarget.value;
    console.log(searchText);
    {
      dispatch({
        type: UPDATE_SEARCHSTRING,
        payload: string
      });
    }

    let filterOptions = state.rawMaterials
      .filter(
        material =>
          material.rawMaterial.toLowerCase().indexOf(string.toLowerCase()) > -1
      )
      .slice(0, 4);

    {
      dispatch({
        type: UPDATE_SEARCHRESULTS,
        payload: filterOptions
      });
    }
  };

  const handleSearchItemClick = item => {
    dispatch({
      type: UPDATE_RAWMATERIALS,
      payload: item
    });
  };

  const handleRemoveRawMaterial = id => {
    console.log(id);
    dispatch({
      type: REMOVE_RAWMATERIAL,
      payload: id
    });
  };

  const handleQuantityChange = id => e => {
    console.log(id);

    let tempArray = [...state.recipeRawMaterials];

    console.log(tempArray);

    tempArray
      .filter(rec => rec._id === id)
      .forEach(item => (item.quantityInRecipe = e.target.value));

    dispatch({
      type: UPDATE_RAWMATERIAL_PRICE,
      payload: tempArray
    });

    tempArray
      .filter(rec => rec._id === id)
      .forEach(
        item =>
          (item.costOfRawMaterial =
            (item.quantityInRecipe * item.rate) / item.baseQuantity)
      );

    dispatch({
      type: UPDATE_RAWMATERIAL_COST,
      payload: tempArray
    });
  };

  const handleRateChange = id => e => {
    console.log(id);

    let tempArray = [...state.recipeRawMaterials];
    console.log(tempArray);

    tempArray
      .filter(rec => rec._id === id)
      .forEach(item => (item.rate = e.target.value));

    dispatch({
      type: UPDATE_RAWMATERIAL_RATE,
      payload: tempArray
    });
    tempArray
      .filter(rec => rec._id === id)
      .forEach(
        item =>
          (item.costOfRawMaterial =
            (item.quantityInRecipe * item.rate) / item.baseQuantity)
      );

    dispatch({
      type: UPDATE_RAWMATERIAL_COST,
      payload: tempArray
    });
  };

  return (
    <recipeManagementContext.Provider
      value={{
        loading: state.loading,
        rawMaterials: state.rawMaterials,
        recipe: state.recipe,
        recipeName: state.recipeName,
        searchFilter: state.searchFilter,
        searchString: state.searchString,
        recipeRawMaterials: state.recipeRawMaterials,
        searchResults: state.searchResults,
        currentArray: state.currentArray,
        searchFilterDisplay: state.searchFilterDisplay,
        getData,
        handleChangeFor,
        handleSearchText,
        handleSearchItemClick,
        handleRemoveRawMaterial,
        handleQuantityChange,
        handleRateChange
      }}
    >
      {props.children}
    </recipeManagementContext.Provider>
  );
};

export default RecipeManagementState;
