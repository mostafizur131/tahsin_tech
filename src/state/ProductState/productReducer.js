import { productTypes } from "./ProductTypes";

export const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
  wishlist: [],
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
    case productTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
