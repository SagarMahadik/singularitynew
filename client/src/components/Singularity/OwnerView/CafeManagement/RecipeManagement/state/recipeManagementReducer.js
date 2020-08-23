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
  UPDATE_BASICRECIPERATE,
  REMOVE_BASICRECIPERM,
  REMOVE_BASICRECIPE,
  SET_BASICRECIPERMSEARCHFILTER,
  HANDLE_BASICRECIPESEARCHDISPLAY,
  ADD_BASICRECCIPESEARCHRM
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/types.js';

import { produce } from 'immer';

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
      return produce(state, draftState => {
        draftState.basicRecipe = action.payload;
        draftState.basicRecipe.forEach(item => (item.showSearchBox = false));
      });
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
    case SET_BASICRECIPERMSEARCHFILTER: {
      return {
        ...state,
        searchFilter: action.payload,
        searchArray: action.temparray,
        showBasicRecipeSearch: true
      };
    }
    case HANDLE_BASICRECIPESEARCHDISPLAY: {
      return produce(state, draftState => {
        draftState.recipeBasicRecipes.forEach(item => {
          if (item._id === action.id1) {
            item.showSearchBox = !item.showSearchBox;
          }
        });
        if (
          draftState.recipeBasicRecipes.every(
            item => item.showSearchBox === false
          )
        ) {
          draftState.showBasicRecipeSearch = false;
        }
      });
    }

    case ADD_BASICRECCIPESEARCHRM: {
      return produce(state, draftState => {
        draftState.recipeBasicRecipes[action.index1].details.push(action.item1);
        draftState.searchString = '';
        draftState.recipeBasicRecipes.forEach(item => {
          if (item._id === action.id1) {
            item.showSearchBox = !item.showSearchBox;
          }
          if (
            draftState.recipeBasicRecipes.every(
              item => item.showSearchBox === false
            )
          ) {
            draftState.showBasicRecipeSearch = false;
          }
        });

        return draftState;
      });
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
    case REMOVE_BASICRECIPE: {
      return {
        ...state,
        recipeBasicRecipes: state.recipeBasicRecipes.filter(
          item => item._id !== action.id1
        )
      };
    }
    case UPDATE_BASICRECIPEQUANTITY: {
      return produce(state, draftState => {
        draftState.recipeBasicRecipes[action.index1].details.forEach(detail => {
          if (detail._id === action.id1) {
            detail.quantityInRecipe = action.value;
            detail.costOfRawMaterial =
              (detail.rate * action.value) / detail.baseQuantity;
          }
        });
      });
    }
    case UPDATE_BASICRECIPERATE: {
      return produce(state, draftState => {
        draftState.recipeBasicRecipes.map(item =>
          item.details.forEach(detail => {
            if (detail._id === action.id1) {
              detail.rate = action.value;
              detail.costOfRawMaterial =
                (detail.quantityInRecipe * action.value) / detail.baseQuantity;
            }
          })
        );
      });
    }

    case REMOVE_BASICRECIPERM: {
      return produce(state, draftState => {
        draftState.recipeBasicRecipes[action.index1].details.splice(
          draftState.recipeBasicRecipes[action.index1].details.findIndex(
            item => item._id === action.id1
          ),
          1
        );
      });
    }
    case UPDATE_BASICRECIPERAWMCOST: {
      return {
        ...state,
        recipeBasicRecipes: action.payload
      };
    }
    case UPDATE_RAWMATERIAL_PRICE: {
      return produce(state, draftState => {
        draftState.recipeRawMaterials
          .filter(rec => rec._id === action.id1)
          .forEach(item => {
            item.quantityInRecipe = action.value;
            item.costOfRawMaterial =
              (item.quantityInRecipe * item.rate) / item.baseQuantity;
          });
      });
    }
    case UPDATE_RAWMATERIAL_RATE: {
      return produce(state, draftState => {
        draftState.recipeRawMaterials
          .filter(rec => rec._id === action.id1)
          .forEach(item => {
            item.rate = action.value;
            item.costOfRawMaterial =
              (item.quantityInRecipe * item.rate) / item.baseQuantity;
          });
      });
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
