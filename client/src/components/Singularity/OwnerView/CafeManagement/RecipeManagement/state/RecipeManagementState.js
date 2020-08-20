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
  COMPLETE_RAWMATERIAL,
  SET_BASICRECIPES,
  SET_SEARCHFILTER,
  UPDATE_BASICRECIPE,
  UPDATE_BASICRECIPEQUANTITY,
  UPDATE_BASICRECIPERAWMCOST,
  UPDATE_BASICRECIPERATE
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
    basicRecipe: [],
    recipe: [],
    recipeName: '',
    searchFilter: '',
    searchString: '',
    recipeRawMaterials: [],
    recipeBasicRecipes: [],
    recipeBasicRecipeRMDetails: [],
    searchResults: [],
    searchArray: [],
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

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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

    const res = await axios.patch(`/api/v1/rawMaterial/${id}`, body, config);

    setLoading();
    console.log(res);

    if (state.recipeRawMaterials.length - 1 === index) {
      dispatch({
        type: COMPLETE_RAWMATERIAL
      });
    }
  };

  const updateawMateris = async recipeRawMaterials => {
    const arrayofPromises = recipeRawMaterials.map((item, index) => {
      updateRawMaterialsDB(item._id, item.rate, index);
    });

    /**
     *     for await (const item of arrayofPromises) {
      console.log('item done');
    }
     */
    Promise.all(arrayofPromises).then(() => {
      // addDataToDB
      addDataToDB(state.recipeName, state.recipeRawMaterials);
    });
  };

  const [searchText, setSearchText] = useState('');

  let [updatedRMArray, setUpdatedRMArray] = useState([]);

  const { sendRequest, error } = useHttpClient();

  const setLoading = () => dispatch({ type: SET_LOADING });
  const setShowLoader = () => dispatch({ type: SHOW_LOADER });

  useEffect(() => {
    getData('/api/v1/rawMaterial');
    getBasicRecipe('/api/v1/basicRecipe');
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
  }, [state.searchString, state.searchFilter]);

  const getData = async url => {
    try {
      let res = await sendRequest(url);

      dispatch({
        type: SET_RAWMATERIALS,
        payload: res
      });
    } catch (err) {}
  };

  const getBasicRecipe = async url => {
    try {
      let res = await sendRequest(url);

      dispatch({
        type: SET_BASICRECIPES,
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

  const handleSearchFilter = e => {
    console.log(e.currentTarget.value);
    let filter = e.currentTarget.value;
    let currentArray = [];

    if (filter === 'rawMaterial') {
      currentArray = [...state.rawMaterials];
    }
    if (filter === 'basicRecipe') {
      currentArray = [...state.basicRecipe];
    }
    {
      dispatch({
        type: CLEAR_SEARCHRESULTS,
        payload: []
      });
    }

    dispatch({
      type: SET_SEARCHFILTER,
      payload: filter,
      temparray: currentArray
    });
  };

  const handleSearchText = e => {
    let string = e.currentTarget.value;

    {
      dispatch({
        type: UPDATE_SEARCHSTRING,
        payload: string
      });
    }

    let filterOptions = state.searchArray
      .filter(
        material =>
          material.name.toLowerCase().indexOf(string.toLowerCase()) > -1
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
    console.log(item.details);
    if (state.searchFilter === 'rawMaterial') {
      dispatch({
        type: UPDATE_RAWMATERIALS,
        payload: item
      });
    }
    if (state.searchFilter === 'basicRecipe') {
      dispatch({
        type: UPDATE_BASICRECIPE,
        payload: item,
        rmdetails: item.details
      });
    }
  };

  const handleRemoveRawMaterial = id => {
    dispatch({
      type: REMOVE_RAWMATERIAL,
      payload: id
    });
  };

  const handleBasicRecipeRMQuantityChange = (id, name, index) => e => {
    /**
     *     console.log(e.target.value);

    console.log(state.recipeBasicRecipes);

    let tempArray = state.recipeBasicRecipes[index].details;

    let objIndex = tempArray.findIndex(rec => rec._id === id);
    const updatedObj = {
      ...tempArray[objIndex],
      quantityInRecipe: e.target.value
    };

    console.log(objIndex);

    const updatedArray = [
      ...tempArray.slice(0, objIndex),
      updatedObj,
      ...tempArray.slice(objIndex + 1)
    ];

    state.recipeBasicRecipes[index].details = updatedArray;

    console.log(state.recipeBasicRecipes);

    let newArray = [...state.recipeBasicRecipes];

    dispatch({
      type: UPDATE_BASICRECIPEQUANTITY,
      payload: newArray
    });
     */

    const tempRawMaterials = state.recipeBasicRecipes[index];

    const updatedDetails = tempRawMaterials.details.map(detail => {
      if (detail._id === id) {
        return {
          ...detail,
          quantityInRecipe: e.target.value
        };
      } else {
        return detail;
      }
    });

    const updatedBasicRecipeRM = {
      ...tempRawMaterials,
      details: updatedDetails
    };

    console.log(updatedBasicRecipeRM);

    state.recipeBasicRecipes[index] = updatedBasicRecipeRM;

    const newArray = [...state.recipeBasicRecipes];

    dispatch({
      type: UPDATE_BASICRECIPEQUANTITY,
      payload: newArray
    });

    const tempRawMaterials1 = state.recipeBasicRecipes[index];

    const updatedDetails1 = tempRawMaterials1.details.map(detail => {
      if (detail._id === id) {
        return {
          ...detail,
          costOfRawMaterial: (detail.costOfRawMaterial =
            (detail.quantityInRecipe * detail.rate) / detail.baseQuantity)
        };
      } else {
        return detail;
      }
    });

    const updatedBasicRecipeRM1 = {
      ...tempRawMaterials1,
      details: updatedDetails1
    };

    console.log(updatedBasicRecipeRM1);

    state.recipeBasicRecipes[index] = updatedBasicRecipeRM1;

    const newArray1 = [...state.recipeBasicRecipes];

    dispatch({
      type: UPDATE_BASICRECIPERAWMCOST,
      payload: newArray1
    });
  };

  const handleBasicRecipeRMRateChange = (id, name, index) => e => {
    console.log(index);
    const tempRawMaterials2 = state.recipeBasicRecipes[index];
    console.log(tempRawMaterials2);
    const updatedDetails2 = tempRawMaterials2.details.map(detail => {
      if (detail._id === id) {
        return {
          ...detail,
          rate: e.target.value
        };
      } else {
        return detail;
      }
    });

    const updatedBasicRecipeRM2 = {
      ...tempRawMaterials2,
      details: updatedDetails2
    };

    console.log(updatedBasicRecipeRM2);

    state.recipeBasicRecipes[index] = updatedBasicRecipeRM2;

    const newArray2 = [...state.recipeBasicRecipes];

    console.log(newArray2);

    dispatch({
      type: UPDATE_BASICRECIPERATE,
      payload: newArray2
    });

    const tempRawMaterials1 = state.recipeBasicRecipes[index];

    const updatedDetails1 = tempRawMaterials1.details.map(detail => {
      if (detail._id === id) {
        return {
          ...detail,
          costOfRawMaterial: (detail.costOfRawMaterial =
            (detail.quantityInRecipe * detail.rate) / detail.baseQuantity)
        };
      } else {
        return detail;
      }
    });

    const updatedBasicRecipeRM1 = {
      ...tempRawMaterials1,
      details: updatedDetails1
    };

    console.log(updatedBasicRecipeRM1);

    state.recipeBasicRecipes[index] = updatedBasicRecipeRM1;

    const newArray1 = [...state.recipeBasicRecipes];

    dispatch({
      type: UPDATE_BASICRECIPERAWMCOST,
      payload: newArray1
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
        searchArray: state.searchArray,
        searchFilterDisplay: state.searchFilterDisplay,
        saveOptionDisplay: state.saveOptionDisplay,
        saveOption: state.saveOption,
        showLoader: state.showLoader,
        isDataUploaded: state.isDataUploaded,
        basicRecipe: state.basicRecipe,
        recipeBasicRecipes: state.recipeBasicRecipes,
        recipeBasicRecipeRMDetails: state.recipeBasicRecipeRMDetails,
        getData,
        handleChangeFor,
        handleSearchText,
        handleSearchItemClick,
        handleRemoveRawMaterial,
        handleQuantityChange,
        handleRateChange,
        onSubmit,
        handleSearchFilter,
        handleBasicRecipeRMQuantityChange,
        handleBasicRecipeRMRateChange
      }}
    >
      {props.children}
    </recipeManagementContext.Provider>
  );
};

export default RecipeManagementState;
