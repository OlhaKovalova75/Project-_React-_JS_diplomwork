import { ADD_PRODUCTS } from "../actionType";

const initialState = {
  product: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS: {
      console.log(action.payload);

      return {
        ...state,
        product: action.payload,
      };
    }

    default:
      return state;
  }
};

export default productReducer;
