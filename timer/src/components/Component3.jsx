import React, { useState } from "react";

const Component3 = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }
  return (
    <div className="flex justify-center items-center m-4 p-12 border rounded-md w-full h-[300px] text-center">
      <div className="flex flex-col gap-y-6">
        <h1 className="font-bold text-xl">Component3</h1>
        <h2 className="font-semibold text-lg">{counter}</h2>
        <div className="mt-8 pt-8">
          <button className="bg-white-500 shadow-md px-3 py-1 border rounded-md" onClick={handleIncrement}>
            Increment Counter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component3;
