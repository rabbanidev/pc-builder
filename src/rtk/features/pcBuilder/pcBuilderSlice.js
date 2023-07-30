import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pcComponents: {},
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      state.pcComponents = {
        ...state.pcComponents,
        [action.payload?.category]: action.payload,
      };
    },
    deleteComponent: (state, action) => {
      const { [action.payload]: _, ...newComponents } = state.pcComponents;
      state.pcComponents = newComponents;
    },
    emptyComponents: (state) => {
      state.pcComponents = {};
    },
  },
});

export const { addComponent, deleteComponent, emptyComponents } =
  pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
