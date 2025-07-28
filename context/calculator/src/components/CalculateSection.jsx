import { useDispatch } from "react-redux";
import {calculateAddition, calculateSubtraction, calculateMultiplication, calculateDivision} from "../store/calculatorSlice"

const CalculateSection = () => {
    const dispatch = useDispatch();

    return(
        <div className="gap-3 grid p-5 border rounded-md w-[300px] h-[250px]">
            <button type="button" className="bg-blue-500 px-3 py-1 rounded-md text-white" onClick={() => dispatch(calculateAddition())}>Add</button>
            <button type="button" className="bg-blue-500 px-3 py-1 rounded-md text-white" onClick={() => dispatch(calculateSubtraction())}>Subtraction</button>
            <button type="button" className="bg-blue-500 px-3 py-1 rounded-md text-white" onClick={() => dispatch(calculateMultiplication())}>Multiplication</button>
            <button type="button" className="bg-blue-500 px-3 py-1 rounded-md text-white" onClick={() => dispatch(calculateDivision())}>Divide</button>
        </div>
    );
}

export default CalculateSection;