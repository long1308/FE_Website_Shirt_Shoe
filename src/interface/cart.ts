export interface Icart {
  _id?: string;
  userId: string;
  items: Array<Item>;
}
interface Item {
  productId: string;
  size: Array<string>;
  color: Array<string>;
  image: Array<string>;
  quantity: number;
}
export interface CartState {
  carts: Icart[];
  cart?: Icart;
  isLoading: boolean;
  error: null | string;
}
// get all
export interface CartListRequestAction {
  type: "CART_LIST_REQUEST";
}
export interface CartListSuccessAction {
  type: "CART_LIST_SUCCESS";
  payload: Icart[];
}
export interface CartListFailAction {
  type: "CART_LIST_FAIL";
  payload: string;
}
//get one
export interface CartOneRequestAction {
  type: "CART_ONE_REQUEST";
}
export interface CartOneSuccessAction {
  type: "CART_ONE_SUCCESS";
  payload: Icart;
}
export interface CartOneFailAction {
  type: "CART_ONE_FAIL";
  payload: string;
}
//add
export interface AddCartAction {
  type: "ADD_CART";
  payload: Icart;
}
//update cart
export interface UpdateCartAction {
  type: "UPDATE_CART";
  payload: Icart;
}
//delete cart
export interface DeleteCartAction {
  type: "DELETE_CART";
  payload: string;
}
export type CartActionTypes =
  | AddCartAction
  | UpdateCartAction
  | DeleteCartAction
  | CartListRequestAction
  | CartListSuccessAction
  | CartListFailAction
  | CartOneRequestAction
  | CartOneSuccessAction
  | CartOneFailAction;
