import { useState } from 'react';
import './App.css';

function App() {
  const [bg, setBg] = useState("")
  const handleOnFocus = (e) => {
    setBg("yellow");
  }

  const handleOnBlur = (e) => {
    setBg("white");
  }
  return (
    <div>
      <input style={{backgroundColor : bg}} type='text' onFocus={handleOnFocus} onBlur={handleOnBlur}/>
    </div>
  );
}

export default App;
