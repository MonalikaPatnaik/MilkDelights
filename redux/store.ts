import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { getProductsReducer, getProductDetailsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
  user: userReducer, // Make sure this reducer exists
});
const middleware = [thunk];
export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// ✅ TypeScript Support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// const middleware = [thunk];
// export const store = configureStore({
//   reducer: reducer
// });