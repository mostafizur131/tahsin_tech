import { productTypes } from "./ProductTypes";

export const initialState = {
  loading: false,
  products: [],
  error: false,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case productTypes.FETCH_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case productTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case productTypes.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
