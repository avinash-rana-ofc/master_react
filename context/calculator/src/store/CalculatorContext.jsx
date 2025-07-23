import { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorContextProvider = ({children}) => {
    const [inputData, setInputData] = useState({
        num1 : "",
        num2 : "",
    })

    const handleInputChange = (e) => {
        setInputData((prev) => ({...prev, [e.target.name] : parseFloat(e.target.value)}));
        //console.log(inputData)
    }

    console.log(inputData, handleInputChange)
    return(
        <CalculatorContext.Provider value={{inputData, handleInputChange}}>
            {children}
        </CalculatorContext.Provider>
    )
};

//export default CalculatorContextProvider;