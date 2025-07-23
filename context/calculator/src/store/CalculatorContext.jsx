import { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorContextProvider = ({ children }) => {
  const [inputData, setInputData] = useState({
    num1: "",
    num2: "",
  });

  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: parseFloat(e.target.value),
    }));
    //console.log(inputData)
  };

  const calculateAddition = () => {
    setResult(inputData.num1 + inputData.num2);
  };

  const calculateDeletion = () => {
    setResult(inputData.num1 - inputData.num2);
  };

  const calculateMultiplication = () => {
    setResult(inputData.num1 * inputData.num2);
  };

  const calculateDivision = () => {
    setResult(inputData.num1 / inputData.num2);
  };

  //console.log(inputData, handleInputChange)
  return (
    <CalculatorContext.Provider
      value={{
        inputData,
        result,
        handleInputChange,
        calculateAddition,
        calculateDeletion,
        calculateDivision,
        calculateMultiplication,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

//export default CalculatorContextProvider;
