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
  UPDATE_RAWMATERIAL_COST,
  COMPLETE_FORM,
  SHOW_LOADER,
  COMPLETE_RAWMATERIAL
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/types.js';

import { useHttpClient } from 'Hooks/httpsHooks';

import axios from 'axios';
import ResponsiveStyleContext from 'Context/responsiveStyle/ResponsiveStyleContext';

const RecipeManagementState = props => {
  const saveOptions = [
    { option: 'Basic Recipe', optionValue: 'basicRecipe' },
    { option: 'Trial', optionValue: 'trial' },
    { option: 'Product', optionValue: 'product' }
  ];

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
    ],
    saveOptionDisplay: [...saveOptions],
    saveOption: 'basicRecipe',
    isDataUploaded: false,
    showLoader: false,
    isRawmUploaded: false
  };
  const [state, dispatch] = useReducer(recipeManagementReducer, initialState);
  useEffect(() => {
    if (state.isRawmUploaded) {
      addDataToDB(state.recipeName, state.recipeRawMaterials);
    }
  }, [state.isRawmUploaded]);

  const addDataToDB = async (recipeName, recipeRawMaterials) => {
    let name = recipeName;
    let details = [...recipeRawMaterials];
    let baseQuantity = Math.round(
      recipeRawMaterials.reduce(
        (total, obj) => Number(obj.quantityInRecipe) + total,
        0
      )
    );
    let baseUnit = 'gm';
    let totalCost = Math.round(
      recipeRawMaterials.reduce(
        (total, obj) => obj.costOfRawMaterial + total,
        0
      )
    );

    const body = JSON.stringify({
      name,
      details,
      baseQuantity,
      baseUnit,
      totalCost
    });
    console.log(body);

    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

    const res = await axios.post('/api/v1/basicRecipe', body, config);
    setLoading();
    console.log(res);

    if (res.data.status === 'success') {
      dispatch({
        type: COMPLETE_FORM
      });
    }
  };

  const updateRawMaterialsDB = async (id, rate, index) => {
    console.log(state.recipeRawMaterials);
    const body = JSON.stringify({
      rate
    });

    console.log(body);

    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

    const res = await axios.put(`/api/v1/rawMaterial/${id}`, body, config);

    setLoading();
    console.log(res);

    if (state.recipeRawMaterials.length - 1 === index) {
      dispatch({
        type: COMPLETE_RAWMATERIAL
      });
    }
  };

  const updateawMateris = recipeRawMaterials => {
    recipeRawMaterials.map((item, index) => {
      updateRawMaterialsDB(item._id, item.rate, index);
    });
  };

  const [searchText, setSearchText] = useState('');

  let [updatedRMArray, setUpdatedRMArray] = useState([]);

  const { sendRequest, error } = useHttpClient();

  const setLoading = () => dispatch({ type: SET_LOADING });
  const setShowLoader = () => dispatch({ type: SHOW_LOADER });

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
    {
      dispatch({
        type: UPDATE_FIELD,
        payload: { input, value: e.target.value }
      });
    }
  };

  const handleSearchText = e => {
    let string = e.currentTarget.value;

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
    dispatch({
      type: REMOVE_RAWMATERIAL,
      payload: id
    });
  };

  const handleQuantityChange = id => e => {
    let tempArray = [...state.recipeRawMaterials];

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
    let tempArray = [...state.recipeRawMaterials];

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

  const onSubmit = e => {
    e.preventDefault();
    setShowLoader();
    updateawMateris(state.recipeRawMaterials);
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
        saveOptionDisplay: state.saveOptionDisplay,
        saveOption: state.saveOption,
        showLoader: state.showLoader,
        isDataUploaded: state.isDataUploaded,
        getData,
        handleChangeFor,
        handleSearchText,
        handleSearchItemClick,
        handleRemoveRawMaterial,
        handleQuantityChange,
        handleRateChange,
        onSubmit
      }}
    >
      {props.children}
    </recipeManagementContext.Provider>
  );
};

export default RecipeManagementState;
