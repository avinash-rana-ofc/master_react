import { useContext } from "react";
import { CalculatorContext } from "../store/CalculatorContext";

const CalculateSection = () => {
    const {calculateAddition, calculateDeletion, calculateMultiplication, calculateDivision} = useContext(CalculatorContext);
    return(
        <div className="gap-3 grid p-5 border rounded-md w-[300px] h-[250px]">
            <button type="button" className="bg-blue-500 px-3 py-1 rounded-md text-white" onClick={calculateAddition}>Add</button>
            <button type="button" className="bg-blue-500 px-3 py-1 rounded-md text-white" onClick={calculateDeletion}>Subtraction</button>
            <button type="button" className="bg-blue-500 px-3 py-1 rounded-md text-white" onClick={calculateMultiplication}>Multiplication</button>
            <button type="button" className="bg-blue-500 px-3 py-1 rounded-md text-white" onClick={calculateDivision}>Divide</button>
        </div>
    );
}

export default CalculateSection;