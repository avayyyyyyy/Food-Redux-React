import { createSlice } from "@reduxjs/toolkit";

const CartStore = createSlice({
  name: "CartSlice",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart(state, action) {
      let already = state.value.find((e) => e.id === action.payload.id);

      if (already) {
        state.value = state.value.map((e) =>
          e.id === action.payload.id ? { ...e, qty: e.qty + 1 } : e
        );
      } else {
        state.value.push(action.payload);
      }
    },

    deleteItem(state, action) {
      let newValue = state.value.filter((e) => action.payload !== e.id);
      state.value = newValue;
    },
    incrementQty(state, action) {
      state.value = state.value.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decreamentQty(state, action) {
      state.value = state.value.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );

      state.value = state.value.filter((e) => e.qty > 0);
    },
  },
});

export const {
  addToCart,
  deleteItem,
  filterItems,
  incrementQty,
  decreamentQty,
} = CartStore.actions;
export default CartStore.reducer;
