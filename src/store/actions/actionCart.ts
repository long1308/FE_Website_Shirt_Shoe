import { Dispatch } from "redux";
import { Icart, CartActionTypes } from "../../interface/cart";
import cartService from "../../api/cart/cart";

export const getCarts = () => {
  return async (dispatch: Dispatch<CartActionTypes>) => {
    try {
      dispatch({ type: "CART_LIST_REQUEST" });

      const carts = await cartService.getAllCarts();

      dispatch({
        type: "CART_LIST_SUCCESS",
        payload: carts,
      });
    } catch (error: any) {
      dispatch({
        type: "CART_LIST_FAIL",
        payload: error.message,
      });
    }
  };
};
export const getOneCart = (id: string) => {
  return async (dispatch: Dispatch<CartActionTypes>) => {
    try {
      dispatch({ type: "CART_ONE_REQUEST" });
      const cart = await cartService.getOneCarts(id);
      dispatch({
        type: "CART_ONE_SUCCESS",
        payload: cart,
      });
    } catch (error: any) {
      dispatch({
        type: "CART_ONE_FAIL",
        payload: error.message,
      });
    }
  };
};
export const addCategory = (cart: Icart) => {
  return async (dispatch: Dispatch<CartActionTypes>) => {
    await cartService.addCart(cart);
    try {
      dispatch({
        type: "ADD_CART",
        payload: cart,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const updateCategory = (cart: Icart) => {
  return (dispatch: Dispatch<CartActionTypes>) => {
    dispatch({
      type: "UPDATE_CART",
      payload: cart,
    });
  };
};

export const deleteCategory = (cart: string) => {
  return (dispatch: Dispatch<CartActionTypes>) => {
    dispatch({
      type: "DELETE_CART",
      payload: cart,
    });
  };
};
