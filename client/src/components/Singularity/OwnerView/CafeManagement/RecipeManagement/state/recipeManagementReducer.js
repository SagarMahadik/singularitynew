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

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SHOW_LOADER:
      return {
        ...state,
        showLoader: true
      };
    case SET_RAWMATERIALS:
      return {
        ...state,
        rawMaterials: action.payload
      };
    case SET_BASICRECIPES:
      return {
        ...state,
        basicRecipe: action.payload
      };
    case UPDATE_FIELD:
      const { input, value } = action.payload;
      return {
        ...state,
        [input]: value
      };
    case SET_SEARCHFILTER: {
      return {
        ...state,
        searchFilter: action.payload,
        searchArray: action.temparray
      };
    }
    case UPDATE_SEARCHSTRING: {
      return {
        ...state,
        searchString: action.payload
      };
    }
    case UPDATE_SEARCHRESULTS: {
      return {
        ...state,
        searchResults: action.payload
      };
    }
    case CLEAR_SEARCHRESULTS: {
      return {
        ...state,
        searchResults: action.payload
      };
    }
    case UPDATE_RAWMATERIALS: {
      return {
        ...state,
        recipeRawMaterials: [...state.recipeRawMaterials, action.payload],
        searchString: ''
      };
    }
    case UPDATE_BASICRECIPE: {
      return {
        ...state,
        recipeBasicRecipes: [...state.recipeBasicRecipes, action.payload],
        searchString: ''
      };
    }

    case REMOVE_RAWMATERIAL: {
      return {
        ...state,
        recipeRawMaterials: state.recipeRawMaterials.filter(
          item => item._id !== action.payload
        )
      };
    }
    case UPDATE_BASICRECIPEQUANTITY: {
      return {
        ...state,
        recipeBasicRecipes: action.payload
      };
    }
    case UPDATE_BASICRECIPERAWMCOST: {
      return {
        ...state,
        recipeBasicRecipes: action.payload
      };
    }
    case UPDATE_BASICRECIPERATE: {
      return {
        ...state,
        recipeBasicRecipes: action.payload,
        searchString: ''
      };
    }
    case UPDATE_RAWMATERIAL_PRICE: {
      return {
        ...state,
        recipeRawMaterials: action.payload
      };
    }
    case UPDATE_RAWMATERIAL_RATE: {
      return {
        ...state,
        recipeRawMaterials: action.payload
      };
    }
    case UPDATE_RAWMATERIAL_COST: {
      return {
        ...state,
        recipeRawMaterials: action.payload
      };
    }
    case COMPLETE_FORM:
      return {
        ...state,
        loading: false,
        isDataUploaded: true
      };
    case COMPLETE_RAWMATERIAL:
      return {
        ...state,
        loading: false,
        isRawmUploaded: true
      };
  }
};
