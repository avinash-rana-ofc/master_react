import { useContext } from "react";
import { CalculatorContext } from "../store/CalculatorContext";
import { ThemeContext } from "../store/ThemeContext";

const InputSection = () => {
  const { inputData, handleInputChange } = useContext(CalculatorContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className="space-y-3 p-5 border rounded-md w-[300px] h-[250px]">
      <div className="gap-1 grid">
        <label
          className={`font-medium text-gray-700 ${
            theme !== "light" ? "text-white" : "text-gray-700"
          }`}
        >
          First Number:
        </label>
        <input
          type="number"
          placeholder="Enter first number"
          className="p-1 border border-gray-200 rounded-md"
          name="num1"
          onChange={handleInputChange}
          value={inputData.num1}
        />
      </div>
      <div className="gap-1 grid">
        <label
          className={`font-medium text-gray-700 ${
            theme !== "light" ? "text-white" : "text-gray-700"
          }`}
        >
          Second Number:
        </label>
        <input
          type="number"
          placeholder="Enter first number"
          className="p-1 border border-gray-200 rounded-md"
          name="num2"
          onChange={handleInputChange}
          value={inputData.num2}
        />
      </div>
    </div>
  );
};
export default InputSection;
