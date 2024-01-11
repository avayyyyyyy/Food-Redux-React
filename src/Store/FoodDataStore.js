import { createSlice } from "@reduxjs/toolkit";
import FoodData from "../FoodData";

const Food = createSlice({
  name: "FoodData",
  initialState: {
    data: FoodData,
    filteredData: FoodData,
  },
  reducers: {
    filterData(state, action) {
      if (action.payload === "All") {
        state.filteredData = state.data;
      } else {
        let filter = state.data.filter((e) => e.category === action.payload);
        state.filteredData = filter;
      }
    },
    filterThroughSearch(state, action) {
      let filter = state.data.filter((e) => e.name.includes(action.payload));
      state.filteredData = filter;
    },
  },
});

export const { filterData, filterThroughSearch } = Food.actions;
export default Food.reducer;
