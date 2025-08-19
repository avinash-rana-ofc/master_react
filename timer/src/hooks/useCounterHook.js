import { useState } from "react";

const useCounterHook = (initialValue, incrementBy) => {
    const[counter, setCounter] = useState(initialValue);

    const handleIncrement = () => {
        setCounter(counter + incrementBy);
    }

    return {handleIncrement, counter}
};

export default useCounterHook;