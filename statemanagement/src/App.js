import { useState } from "react";
import "./App.css";

function App() {
  const [ctr, setCtr] = useState(0);
  const [fruitName, setFruitName] = useState("Orange");
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState([]);
  const [obj, setObj] = useState({
    productCode : "001",
    productName : "Apple"
  })
  console.log(obj);
  //console.log(arr);
  

  function createInitialState() {
    console.log("created initial state");
    return "initial state";
  }
  const callbackFn = (prev) => {
    console.log(prev);
    return prev + 1;
  };

  const incrementHandler = () => {
    setCtr((prevState) => prevState + 1);
    setCtr(callbackFn);
    setCtr(callbackFn);
    setArr((prev) => ([...prev, ctr]));
  };

  const handleChangeFruitName = (params) => {
    setFruitName(params);
    setObj((prev) => ({
      ...prev,
      productName : params
    }))
  };

  const toggle = () => {
    setShow(!show);
  };

  const removeFromArr = () => {
    setArr((prev) => prev.slice(0, -1));
  }
  return (
    <div>
      <button type="button" onClick={toggle}>
        {show ? "Hide" : "Show"}
      </button>
      {show && (
        <>
          <h1>{ctr}</h1>
          <button type="button" onClick={incrementHandler}>
            Increment
          </button>
          <button type="button" onClick={removeFromArr}>Remove</button>

          <h1>{obj.productCode}</h1>
          <h1>{obj.productName}</h1>
          <button type="button" onClick={() => handleChangeFruitName("Orange")}>
            Orange
          </button>
          <button type="button" onClick={() => handleChangeFruitName("Apple")}>
            Apple
          </button>
          {arr.map((item, index) => (
            <h1 key={index}>{item}</h1>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
