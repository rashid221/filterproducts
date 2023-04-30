import { actionTypes } from "../types/types";

const initialState = {
  products: [],
  filteredProducts: [],
};

export const productReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case actionTypes.SEND_DATA:
      let productId = action.payload;
      let x = state.products.filter((item) => item.category === productId);
      return {
        ...state,
        filteredProducts: [x],
      };
    default:
      return state;
  }
};
