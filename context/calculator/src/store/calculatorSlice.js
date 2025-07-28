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
    calculateAddition : (state) => {
      state.result = state.inputData.num1 + state.inputData.num2
    },
    calculateSubtraction : (state) => {
      state.result = state.inputData.num1 - state.inputData.num2;
    },
    calculateMultiplication : (state) => {
      state.result = state.inputData.num1 * state.inputData.num2;
    },
    calculateDivision : (state) => {
      state.result = state.inputData.num1 / state.inputData.num2;
    }
  },
});

export const {handleInputChange, calculateAddition, calculateSubtraction, calculateMultiplication, calculateDivision} = calculatorSlice.actions;
export default calculatorSlice.reducer;
