import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/reducerProduct';
// Import các reducers khác

const rootReducer = combineReducers({
  products: productReducer,
  // Các reducers khác
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
