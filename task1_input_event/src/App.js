import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  }
  return (
    <>
      <div>
        <input type='text' onChange={handleChange} />
      </div>
      <div>
        <h2>{state}</h2>
      </div>
    </>
  );
}

export default App;
