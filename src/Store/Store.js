import { configureStore } from "@reduxjs/toolkit";
import CartStore from "./CartStore";
import FoodDataStore from "./FoodDataStore";

const Store = configureStore({
  reducer: {
    CartStore: CartStore,
    FoodDataStore: FoodDataStore,
  },
});

export default Store;
