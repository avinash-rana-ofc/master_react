import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(createInitialState);

  function createInitialState() {
    let i = 1,
      arr = [];

    for (; i <= 5; i++) {
      arr.push("item " + i);
    }
    return arr;
  }

  const addElement = () => {
    setState([...state, `item ${state.length + 1}`]);
  };

  const removeElement = () => {
    setState(state.slice(0, -1));
  };

  return (
    <>
      <button type="button" onClick={addElement}>
        Add
      </button>
      <button type="button" onClick={removeElement}>
        Remove
      </button>
      {state.map((arr, index) => (
        <h1 key={index}>{arr}</h1>
      ))}
    </>
  );
}

export default App;
