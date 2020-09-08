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
  UPDATE_RAWMATERIALNAME,
  UPDATE_RAWMATERIAL_PRICE,
  UPDATE_RAWMATERIAL_RATE,
  COMPLETE_FORM,
  SHOW_LOADER,
  COMPLETE_RAWMATERIAL,
  SET_BASICRECIPES,
  SET_SEARCHFILTER,
  UPDATE_BASICRECIPE,
  UPDATE_BASICRECIPEUNITS,
  UPDATE_BASICRECIPEQUANTITY,
  UPDATE_BASICRECIPERATE,
  REMOVE_BASICRECIPERM,
  REMOVE_BASICRECIPE,
  SET_BASICRECIPERMSEARCHFILTER,
  HANDLE_BASICRECIPESEARCHDISPLAY,
  ADD_BASICRECCIPESEARCHRM,
  SET_SAVEOPTION,
  SET_RECIPES,
  UPDATE_RECIPE,
  HANDLE_BASICRECIPEDISPLAY,
  HIDE_BASICRECIPERMONDELETE,
  CALCULATE_RECIPERMQTYANDCOST,
  CALCULATE_SINGLEBASICRECIPEQTYANDCOST,
  CALCULATE_TOTALBASICRECIPERMQTYANDCOST
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/types.js';

import { useHttpClient } from 'Hooks/httpsHooks';

import axios from 'axios';
import produce from 'immer';

const RecipeManagementState = props => {
  const saveOptions = [
    { option: 'Basic Recipe', optionValue: 'basicRecipe' },
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
    brandName: 'Piatto',
    recipeUrl: '',
    recipeRawMaterials: [],
    totalRawMQuantityInRecipe: 0,
    totalRawMaterialCostInRecipe: 0,
    totalBasicRecipeRAWMQuantity: 0,
    totalBasicRecipeRAWMCost: 0,
    recipeBasicRecipes: [],
    recipeProducts: [],
    recipeBasicRecipeRMDetails: [],
    searchResults: [],
    searchArray: [],
    recipeYield: '',
    finalUnits: '',
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

  useEffect(() => {
    dispatch({
      type: CALCULATE_RECIPERMQTYANDCOST
    });
  }, [state.recipeRawMaterials]);

  useEffect(() => {
    dispatch({
      type: CALCULATE_SINGLEBASICRECIPEQTYANDCOST
    });
    dispatch({
      type: CALCULATE_TOTALBASICRECIPERMQTYANDCOST
    });
  }, [state.recipeBasicRecipes]);

  const addDataToDB = async (
    recipeName,
    recipeRawMaterials,
    brandName,
    recipeUrl,
    recipeYield,
    finalUnits,
    totalRawMQuantityInRecipe,
    totalRawMaterialCostInRecipe
  ) => {
    let name = recipeName;
    let details = [...recipeRawMaterials];
    let baseQuantity = totalRawMQuantityInRecipe;
    let baseUnit = 'gm';
    let rate = totalRawMaterialCostInRecipe;

    let yieldBasicRecipe = recipeYield;

    let unitPerBaseQuantity = finalUnits;

    let costPerUnit = rate / finalUnits;

    let weightPerUnit = baseQuantity / finalUnits;

    const body = JSON.stringify({
      name,
      details,
      baseQuantity,
      baseUnit,
      rate,
      brandName,
      recipeUrl,
      yieldBasicRecipe,
      unitPerBaseQuantity,
      costPerUnit,
      weightPerUnit
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

  const addRecipeToDB = async (
    recipeName,
    recipeRawMaterials,
    recipeBasicRecipes,
    brandName,
    recipeUrl
  ) => {
    let name = recipeName;
    let rawMaterialDetails = [...recipeRawMaterials];
    let basicRecipeDetails = [...recipeBasicRecipes];

    let baseQuantity =
      Math.round(
        recipeRawMaterials.reduce(
          (total, obj) => Number(obj.quantityInRecipe) + total,
          0
        )
      ) +
      Math.round(
        recipeBasicRecipes.reduce(
          (total, obj) =>
            obj.details.reduce(
              (total1, obj1) => obj1.quantityInRecipe + total1,
              0
            ) + total,
          0
        )
      );
    let baseUnit = 'gm';
    let rate =
      Math.round(
        recipeRawMaterials.reduce(
          (total, obj) => obj.costOfRawMaterial + total,
          0
        )
      ) +
      Math.round(
        recipeBasicRecipes.reduce(
          (total, obj) =>
            obj.details.reduce(
              (total1, obj1) => obj1.costOfRawMaterial + total1,
              0
            ) + total,
          0
        )
      );
    const body = JSON.stringify({
      name,
      rawMaterialDetails,
      basicRecipeDetails,
      baseQuantity,
      baseUnit,
      rate,
      brandName,
      recipeUrl
    });
    console.log(body);

    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

    const res = await axios.post('/api/v1/recipe', body, config);
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

  const updateBasicRecipeDB = async (id, details, index) => {
    const body = JSON.stringify({
      details
    });

    console.log(body);

    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

    const res = await axios.patch(`/api/v1/basicRecipe/${id}`, body, config);

    console.log('Done with Basic Recipe');
  };

  const initiateSubmit = async (
    recipeRawMaterials,
    finalRecipeBasicRecipes
  ) => {
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
      if (state.saveOption === 'basicRecipe') {
        addDataToDB(
          state.recipeName,
          state.recipeRawMaterials,
          state.brandName,
          state.recipeUrl,
          state.recipeYield,
          state.finalUnits,
          state.totalRawMQuantityInRecipe,
          state.totalRawMaterialCostInRecipe
        );
      }
      if (state.saveOption === 'product') {
        console.log('I am done upading the raw materials');
        const arrayofBasicRecipePromises = finalRecipeBasicRecipes.map(
          (item, index) => {
            updateBasicRecipeDB(item._id, item.details, index);
          }
        );
        Promise.all(arrayofBasicRecipePromises).then(() =>
          addRecipeToDB(
            state.recipeName,
            state.recipeRawMaterials,
            state.recipeBasicRecipes,
            state.brandName,
            state.recipeUrl
          )
        );
      }
    });
  };

  const { sendRequest, error } = useHttpClient();

  const setLoading = () => dispatch({ type: SET_LOADING });
  const setShowLoader = () => dispatch({ type: SHOW_LOADER });

  useEffect(() => {
    getData('/api/v1/rawMaterial');
    getBasicRecipe('/api/v1/basicRecipe');
    getRecipe('/api/v1/recipe');
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

  const getRecipe = async url => {
    try {
      let res = await sendRequest(url);

      dispatch({
        type: SET_RECIPES,
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
    if (filter === 'product') {
      currentArray = [...state.recipe];
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

    if (state.searchFilter === 'product') {
      console.log(item.rawMaterialDetails);
      console.log(item.basicRecipeDetails);
      /**
       *      state.recipeRawMaterials = item.rawMaterialDetails;
      state.recipeBasicRecipes = item.basicRecipeDetails;
       */

      dispatch({
        type: UPDATE_RECIPE,
        rawMaterial: item.rawMaterialDetails,
        basicRecipes: item.basicRecipeDetails,
        productDetails: item
      });
    }
  };

  const handleRemoveRawMaterial = id => {
    dispatch({
      type: REMOVE_RAWMATERIAL,
      payload: id
    });
  };

  const handleBasicRecipeDisplay = id => {
    dispatch({
      type: HANDLE_BASICRECIPEDISPLAY,
      id1: id
    });
  };

  const handleBasicRecipeUnits = index => e => {
    console.log(index);
    console.log(e.target.value);
    let newUnits = e.target.value;
    dispatch({
      type: UPDATE_BASICRECIPEUNITS,
      index1: index,
      value: newUnits
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

  const hideBasicRecipeRMOnDelete = (index, basicRMIndex) => {
    dispatch({
      type: HIDE_BASICRECIPERMONDELETE,
      index1: index,
      basicRMIndex1: basicRMIndex
    });
  };

  const handleBasicRecipeRMDelete = (
    index,
    basicRMIndex,
    id,
    basicRecipeID
  ) => {
    console.log(basicRecipeID);
    console.log(index);
    console.log(basicRMIndex);
    if (state.recipeBasicRecipes[index].details.length === 1) {
      dispatch({
        type: REMOVE_BASICRECIPE,
        id1: basicRecipeID
      });
    } else {
      dispatch({
        type: REMOVE_BASICRECIPERM,
        id1: id,
        index1: index,
        basicRMIndex1: basicRMIndex
      });
    }
  };

  const handleRemoveBasicRecipe = id => {
    dispatch({
      type: REMOVE_BASICRECIPE,
      id1: id
    });
  };

  const handleRawMaterialNameChange = index => e => {
    console.log(e.target.value);
    let newRawMaterialName = e.target.value;
    let rawMaterialIndex = index;
    console.log(index);
    dispatch({
      type: UPDATE_RAWMATERIALNAME,
      name1: newRawMaterialName,
      index1: rawMaterialIndex
    });
  };

  const handleQuantityChange = (id, index) => e => {
    let quantity = e.target.value;
    console.log(index);

    dispatch({
      type: UPDATE_RAWMATERIAL_PRICE,
      id1: id,
      index1: index,
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
    setShowLoader();
    if (state.saveOption === 'basicRecipe') {
      initiateSubmit(state.recipeRawMaterials);
    }

    if (state.saveOption === 'product') {
      let updatedState = produce(state, draft => {
        const items2ById = {};
        for (const item of draft.recipeBasicRecipes) {
          items2ById[item._id] = item;
        }
        const items2DetailsById = {};

        for (const detail of draft.recipeBasicRecipes.flatMap(
          ({ details }) => details
        )) {
          items2DetailsById[detail._id] = detail;
        }
        for (const item of draft.basicRecipe) {
          if (!items2ById[item._id]) continue;
          for (const detail of item.details) {
            if (items2DetailsById[detail._id]) {
              detail.rate = items2DetailsById[detail._id].rate;
            }
          }
        }

        return draft;
      });

      console.log(updatedState);

      /**
       *     const operation = (list1, list2, isUnion = false) =>
        list1.filter(a => isUnion === list2.some(b => a._id === b._id));
  
       */

      const operation = (list1, list2, isUnion = false) =>
        list1.filter(
          (set => a => isUnion === set.has(a._id))(
            new Set(list2.map(b => b._id))
          )
        );

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

      const uniqueRawMaterial = finalRecipeRawMaterial.reduce(
        (acc, current) => {
          const x = acc.find(item => item._id === current._id);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        },
        []
      );

      console.table(finalRecipeBasicRecipes);
      console.table(finalRecipeRawMaterial);
      console.table(uniqueRawMaterial);

      initiateSubmit(uniqueRawMaterial, finalRecipeBasicRecipes);
    }
    /**
    * 

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
Immer.js
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
    });
    *  */
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
        recipeProducts: state.recipeProducts,
        recipeBasicRecipes: state.recipeBasicRecipes,
        recipeBasicRecipeRMDetails: state.recipeBasicRecipeRMDetails,
        showBasicRecipeSearch: state.showBasicRecipeSearch,
        brandName: state.brandName,
        recipeUrl: state.recipeUrl,
        recipeYield: state.recipeYield,
        finalUnits: state.finalUnits,
        totalRawMQuantityInRecipe: state.totalRawMQuantityInRecipe,
        totalRawMaterialCostInRecipe: state.totalRawMaterialCostInRecipe,
        totalBasicRecipeRAWMQuantity: state.totalBasicRecipeRAWMQuantity,
        totalBasicRecipeRAWMCost: state.totalBasicRecipeRAWMCost,
        getData,
        handleChangeFor,
        handleSearchText,
        handleSearchItemClick,
        handleRemoveRawMaterial,
        handleQuantityChange,
        handleRateChange,
        onSubmit,
        handleSearchFilter,
        handleRawMaterialNameChange,
        handleBasicRecipeUnits,
        handleBasicRecipeRMQuantityChange,
        handleBasicRecipeRMRateChange,
        handleBasicRecipeRMDelete,
        handleRemoveBasicRecipe,
        handleBasicRecipeMSearchFilter,
        handleSaveOption,
        handleBasicRecipeDisplay,
        hideBasicRecipeRMOnDelete
      }}
    >
      {props.children}
    </recipeManagementContext.Provider>
  );
};

export default RecipeManagementState;
