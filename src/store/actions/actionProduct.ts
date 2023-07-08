import { Dispatch } from "redux";
import { ProductActionTypes, Iproduct } from "../../interface/product";
import productService from "../../api/product/productService";

export const getProducts = () => {
    return async (dispatch: Dispatch<ProductActionTypes>) => {
      try {
        const products = await productService.getAllProducts();
        dispatch({
          type: "GET_PRODUCTS",
          payload: products,
        });
      } catch (error) {
        // Handle error if needed
      }
    };
  };
export const addProduct = (product: Iproduct) => {
  return (dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
  };
};

export const updateProduct = (product: Iproduct) => {
  return (dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({
      type: "UPDATE_PRODUCT",
      payload: product,
    });
  };
};

export const deleteProduct = (productId: string) => {
  return (dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: productId,
    });
  };
};
