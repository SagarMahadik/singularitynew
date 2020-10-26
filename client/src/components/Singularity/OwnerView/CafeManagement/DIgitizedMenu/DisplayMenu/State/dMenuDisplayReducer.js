import {
  SET_SLECTEDCATEGORY,
  SET_CATEGORYDATA,
  SET_LOADING,
  SET_DMENUPRODUCTDATA
} from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/State/types.js';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case SET_CATEGORYDATA:
      return {
        ...state,
        categoryData: action.payload,
        isCategory: true,
        loading: false
      };

    case SET_DMENUPRODUCTDATA:
      return {
        ...state,
        dMenuProductData: action.payload,
        loading: false
      };
    case SET_SLECTEDCATEGORY:
      const { value2, data, condition } = action.payload;
      return {
        ...state,
        selectedCategory: data,
        category: value2,
        isSubCategory: condition
      };
  }
};
