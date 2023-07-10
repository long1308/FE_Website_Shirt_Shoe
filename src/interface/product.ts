export interface Iproduct {
  _id?: number | string;
  name: string;
  price: number;
  priceSale?: number;
  featured: boolean;
  image: string;
  description: string;
  description_short?: string;
  hot_sale?: number;
  size: Array<string>;
  color: Array<string>;
  quantity: number;
  category: string;
  inventoryStatus: string;
  rating: number;
}
export interface ProductState {
  products: Iproduct[];
}
export interface IproductAction {
  type: "GET_PRODUCTS";
  payload: Iproduct[];
}
export interface AddProductAction {
  type: "ADD_PRODUCT";
  payload: Iproduct;
}

export interface UpdateProductAction {
  type: "UPDATE_PRODUCT";
  payload: Iproduct;
}

export interface DeleteProductAction {
  type: "DELETE_PRODUCT";
  payload: string;
}

export type ProductActionTypes =
  | IproductAction
  | AddProductAction
  | UpdateProductAction
  | DeleteProductAction;
