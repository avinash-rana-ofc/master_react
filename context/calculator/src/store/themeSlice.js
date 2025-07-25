import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name : "Theme",
    initialState : "light",
    reducers : {},
});

export default themeSlice.reducer;
