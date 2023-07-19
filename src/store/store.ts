import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import productReducer from "./reducers/reducerProduct";
import categoryReducer from "./reducers/reducerCategory";
import colorReducer from "./reducers/reducerColor";
import sizeReducer from "./reducers/reducerSize";
import cartReducer from "./reducers/reducerCart";

const rootReducer = combineReducers({
  products: productReducer,
  categorys: categoryReducer,
  colors: colorReducer,
  sizes:sizeReducer,
  carts: cartReducer,
  // Các reducers khác
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
