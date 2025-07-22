import { createContext } from "react";

export const CalculatorContext = createContext();

export const CalculatorContextProvider = ({children}) => {
    let str = "Hello World!";
    return(
        <CalculatorContext.Provider value={str}>
            {children}
        </CalculatorContext.Provider>
    )
};

//export default CalculatorContextProvider;