import { configureStore } from "@reduxjs/toolkit";
import CartStore from "./CartStore";

const Store = configureStore({
  reducer: {
    CartStore: CartStore,
  },
});

export default Store;
