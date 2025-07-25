import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "Theme",
  initialState: "light",
  reducers: {
    toggleTheme: (state, action) => {
      state = state === "light" ? "dark" : "light";
      return state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
