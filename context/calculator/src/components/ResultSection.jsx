import React from "react";
import { useSelector } from "react-redux";

const ResultSection = () => {
  const { result } = useSelector((state) => state.calculator);
  return (
    <div className="p-5 border rounded-md w-[300px] h-[250px]">
      <h1 className="font-semibold text-3xl">Answer: {result}</h1>
    </div>
  );
};

export default ResultSection;
