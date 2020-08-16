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

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_RAWMATERIALS:
      return {
        ...state,
        rawMaterials: action.payload
      };
    case UPDATE_FIELD:
      const { input, value } = action.payload;
      return {
        ...state,
        [input]: value
      };
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
    case REMOVE_RAWMATERIAL: {
      return {
        ...state,
        recipeRawMaterials: state.recipeRawMaterials.filter(
          item => item._id !== action.payload
        )
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
  }
};
