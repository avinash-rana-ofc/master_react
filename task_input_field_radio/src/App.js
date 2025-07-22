import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const handleChangeColor = (e) => {
    setColor(e.target.value);
  }
  return (
    <div style={{backgroundColor : color}}>
      <input
        type="radio"
        value="blue"
        name="color"
        onChange={handleChangeColor}
      />
      <label>Blue</label>
      <input
        type="radio"
        value="green"
        name="color"
        onChange={handleChangeColor}
      />
      <label>Green</label>
      <input
        type="radio"
        value="yellow"
        name="color"
        onChange={handleChangeColor}
      />
      <label>Yellow</label>
      <input
        type="radio"
        value="red"
        name="color"
        onChange={handleChangeColor}
      />
      <label>Red</label>
    </div>
  );
}

export default App;
