import { useState } from "react";
import "./App.css";

function App() {
  const [mouseEnter, setMouseEnter] = useState(false);

  const handleMouseEnter = (e) => {
    setMouseEnter(true);
  };

  const handleMouseLeave = (e) => {
    setMouseEnter(false);
  };

  return (
    <div>
      <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Hello World!
      </h1>
      {mouseEnter && (
        <div className="tooltip">
          <h3>Tooltip Rendered</h3>
        </div>
      )}
    </div>
  );
}

export default App;
