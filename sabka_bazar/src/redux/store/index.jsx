import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/cartReducer";
import categoryReducer from "../reducer/categoryReducer";
import userSliceReducer from "../reducer/userReducer";
import productSliceReducer from "../reducer/productReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: userSliceReducer,
    categories: categoryReducer,
    products: productSliceReducer,
  },
});

export default store;
