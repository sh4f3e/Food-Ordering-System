import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restaurantListReducer from "./restaurantListSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    restaurantList: restaurantListReducer,
  },
});
export default appStore;
