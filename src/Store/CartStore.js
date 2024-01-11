import { createSlice } from "@reduxjs/toolkit";

const CartStore = createSlice({
  name: "CartSlice",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart(state, action) {
      state.value.push(action.payload);
      console.log(state.value);
    },
    deleteItem(state, action) {
      let newValue = state.value.filter((e) => action.payload !== e.id);
      state.value = newValue;
    },
  },
});

export const { addToCart, deleteItem } = CartStore.actions;
export default CartStore.reducer;
