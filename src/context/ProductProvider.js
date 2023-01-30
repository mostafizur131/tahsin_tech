import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  initialState,
  productReducer,
} from "../state/ProductState/productReducer";
import { productTypes } from "../state/ProductState/ProductTypes";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: productTypes.FETCH_LOADING });
    fetch("https://tahsin-tech-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: productTypes.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: productTypes.FETCH_ERROR });
      });
  }, []);
  const value = { state, dispatch };

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export default ProductProvider;

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};
