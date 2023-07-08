// productReducer.ts
import { Reducer } from "redux";
import { ProductActionTypes, ProductState } from "../../interface/product";
import productService from "../../api/product/productService"; 
const initialState: ProductState = {
  products: [],
};

const productReducer: Reducer<ProductState, ProductActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
