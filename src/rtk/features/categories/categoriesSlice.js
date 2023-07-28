import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesList: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoriesList: (state, action) => {
      state.categoriesList = action.payload;
    },
  },
});

export const { setCategoriesList } = categoriesSlice.actions;

export default categoriesSlice.reducer;
