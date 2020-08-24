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
  COMPLETE_FORM,
  SHOW_LOADER,
  COMPLETE_RAWMATERIAL,
  SET_BASICRECIPES,
  SET_SEARCHFILTER,
  UPDATE_BASICRECIPE,
  UPDATE_BASICRECIPEQUANTITY,
  UPDATE_BASICRECIPERATE,
  REMOVE_BASICRECIPERM,
  REMOVE_BASICRECIPE,
  SET_BASICRECIPERMSEARCHFILTER,
  HANDLE_BASICRECIPESEARCHDISPLAY,
  ADD_BASICRECCIPESEARCHRM,
  SET_SAVEOPTION
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/types.js';

import { useHttpClient } from 'Hooks/httpsHooks';

import axios from 'axios';
import produce from 'immer';

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
    saveOption: '',
    isDataUploaded: false,
    showLoader: false,
    isRawmUploaded: false,
    showBasicRecipeSearch: false
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

  const handleBasicRecipeMSearchFilter = id => {
    console.log(id);

    let filter = 'basicRecipeRawMaterial';
    let currentArray = [];
    currentArray = [...state.rawMaterials];
    dispatch({
      type: SET_BASICRECIPERMSEARCHFILTER,
      payload: filter,
      temparray: currentArray
    });
    dispatch({
      type: HANDLE_BASICRECIPESEARCHDISPLAY,
      id1: id
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

  const handleSearchItemClick = (item, index, basicRecipeId) => {
    console.log(index);
    console.log(item);
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
    if (state.searchFilter === 'basicRecipeRawMaterial') {
      dispatch({
        type: ADD_BASICRECCIPESEARCHRM,
        index1: index,
        item1: item,
        id1: basicRecipeId
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
    let quantity = e.target.value;
    dispatch({
      type: UPDATE_BASICRECIPEQUANTITY,
      id1: id,
      index1: index,
      value: quantity
    });
  };

  const handleBasicRecipeRMRateChange = (id, name, index) => e => {
    let rate = e.target.value;
    dispatch({
      type: UPDATE_BASICRECIPERATE,
      id1: id,
      index1: index,
      value: rate
    });
  };

  const handleBasicRecipeRMDelete = (index, id, basicRecipeID) => {
    console.log(basicRecipeID);

    if (state.recipeBasicRecipes[index].details.length === 1) {
      dispatch({
        type: REMOVE_BASICRECIPE,
        id1: basicRecipeID
      });
    } else {
      dispatch({
        type: REMOVE_BASICRECIPERM,
        id1: id,
        index1: index
      });
    }
  };

  const handleRemoveBasicRecipe = id => {
    dispatch({
      type: REMOVE_BASICRECIPE,
      id1: id
    });
  };

  const handleQuantityChange = id => e => {
    let quantity = e.target.value;

    dispatch({
      type: UPDATE_RAWMATERIAL_PRICE,
      id1: id,
      value: quantity
    });
  };

  const handleRateChange = id => e => {
    let rate = e.target.value;

    dispatch({
      type: UPDATE_RAWMATERIAL_RATE,
      id1: id,
      value: rate
    });
  };

  const handleSaveOption = e => {
    let option = e.currentTarget.value;

    dispatch({
      type: SET_SAVEOPTION,
      selectedOption: option
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    /**
    * 
    setShowLoader();
    updateawMateris(state.recipeRawMaterials);
        let r = [...state.basicRecipe];

    let Array2 = [...state.recipeBasicRecipes];

    r = r.map(item => {
      let element = Array2.find(e => e._id === item._id);
      console.log(element);
      if (element) {
        return {
          ...item,
          details: item.details.map(e => {
            let detail = element.details.find(d => d._id === e._id);
            if (detail) {
              return {
                ...e,
                rate: detail.rate
              };
            }
            return e;
          })
        };
      }
      return item;
    });
    *  */

    let updatedState = produce(state, draft => {
      draft.basicRecipe = draft.basicRecipe.map(item => {
        let element = draft.recipeBasicRecipes.find(e => e._id === item._id);

        if (element) {
          item.details = item.details.map(e => {
            let detail = element.details.find(d => d._id === e._id);
            if (detail) {
              e.rate = detail.rate;
            }
            return e;
          });
        }
        return item;
      });

      return draft;
    });

    const operation = (list1, list2, isUnion = false) =>
      list1.filter(a => isUnion === list2.some(b => a._id === b._id));

    const inBoth = (list1, list2) => operation(list1, list2, true),
      inFirstOnly = operation,
      inSecondOnly = (list1, list2) => inFirstOnly(list2, list1);

    let finalRecipeBasicRecipes = [
      ...inBoth(updatedState.basicRecipe, state.recipeBasicRecipes)
    ];

    let basicRecipeRM = produce(state, draft => {
      let newBasiccRRecipeRMArray = [];
      draft.recipeBasicRecipes.forEach(item =>
        newBasiccRRecipeRMArray.push(item.details)
      );
      return newBasiccRRecipeRMArray;
    });
    console.log(basicRecipeRM);

    let finalBasicRecipeRM = basicRecipeRM.flat();
    console.log(finalBasicRecipeRM);

    let finalRecipeRawMaterial = [
      ...state.recipeRawMaterials,
      ...finalBasicRecipeRM
    ];

    const uniqueRawMaterial = finalRecipeRawMaterial.reduce((acc, current) => {
      const x = acc.find(item => item._id === current._id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    console.table(finalRecipeBasicRecipes);
    console.table(finalRecipeRawMaterial);
    console.table(uniqueRawMaterial);
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
        showBasicRecipeSearch: state.showBasicRecipeSearch,
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
        handleBasicRecipeRMRateChange,
        handleBasicRecipeRMDelete,
        handleRemoveBasicRecipe,
        handleBasicRecipeMSearchFilter,
        handleSaveOption
      }}
    >
      {props.children}
    </recipeManagementContext.Provider>
  );
};

export default RecipeManagementState;
