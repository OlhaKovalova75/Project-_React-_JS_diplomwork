import { ADD_PRODUCTS } from "./actionType";

export const addProductData = (product) => ({
  type: ADD_PRODUCTS,
  payload: {
    product,
  },
});
