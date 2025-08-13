import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
  name: "Products",
  initialState: [],
  reducers: {
    setProducts : (state, action) => {
      return action.payload;
    }
  },
});

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;


