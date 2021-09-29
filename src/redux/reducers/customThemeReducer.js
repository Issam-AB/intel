import { createSlice } from "@reduxjs/toolkit";
import { THEMES } from "../../constants";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: THEMES.DEFAULT,
  },
  reducers: {
    setTheme: (state, { payload }) => {
      state.currentTheme = payload;
    },
  },
});

export default themeSlice.reducer;
export const { setTheme, userAdded, userAddedFailed } = themeSlice.actions;
