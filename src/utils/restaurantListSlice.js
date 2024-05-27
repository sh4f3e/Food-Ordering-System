import { createSlice } from "@reduxjs/toolkit";

const restaurantListSlice = createSlice({
  name: "restaurantList",
  initialState: {
    list: null,
    searchText: null,
    collapse: false,
    collapseIndex: null,
  },
  reducers: {
    addRestaurantList: (state, action) => {
      state.list = action.payload;
    },
    searchRestaurantList: (state, action) => {
      state.searchText = action.payload;
    },
  },
});
export const { addRestaurantList, searchRestaurantList } =
  restaurantListSlice.actions;
export default restaurantListSlice.reducer;
