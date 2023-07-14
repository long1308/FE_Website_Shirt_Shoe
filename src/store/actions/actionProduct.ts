import { Dispatch } from "redux";
import { ProductActionTypes, Iproduct } from "../../interface/product";
import productService from "../../api/product/productService";

export const getProducts = () => {
  return async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
      dispatch({ type: "PRODUCT_LIST_REQUEST" });

      const products = await productService.getAllProducts();

      dispatch({
        type: "PRODUCT_LIST_SUCCESS",
        payload: products,
      });
    } catch (error: any) {
      dispatch({
        type: "PRODUCT_LIST_FAIL",
        payload: error.message,
      });
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
