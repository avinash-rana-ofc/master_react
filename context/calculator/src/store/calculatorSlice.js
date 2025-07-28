import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculate",
  initialState: {
    inputData: {
      num1: "",
      num2: "",
    },
    result: 0,
  },
  reducers: {
    handleInputChange: (state, action) => {
      state.inputData[action.payload.name]  = parseFloat(action.payload.value)
      return state;
    },
  },
});

export const {handleInputChange} = calculatorSlice.actions;
export default calculatorSlice.reducer;
