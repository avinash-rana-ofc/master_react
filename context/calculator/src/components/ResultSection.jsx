import React, { useContext } from "react";
import { CalculatorContext } from "../store/CalculatorContext";

const ResultSection = () => {
  const {result} = useContext(CalculatorContext);
  return (
    <div className="p-5 border rounded-md w-[300px] h-[250px]">
      <h1 className="font-semibold text-3xl">Answer: {result}</h1>
    </div>
  );
};

export default ResultSection;
