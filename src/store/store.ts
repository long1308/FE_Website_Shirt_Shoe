import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import productReducer from "./reducers/reducerProduct";
import categoryReducer from "./reducers/reducerCategory";

const rootReducer = combineReducers({
  products: productReducer,
  categorys: categoryReducer,
  // Các reducers khác
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
