import "./App.css";
import InputSection from "./components/InputSection";
import CalculateSection from "./components/CalculateSection";
import ResultSection from "./components/ResultSection";
import { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";

function App() {
  const { theme, handleClick } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-screen ${
        theme !== "light" ? "bg-gray-800 text-white" : ""
      }`}
    >
      <button
        type="button"
        className="bg-blue-500 rounded-md px-4 py-2 m-2 text-white"
        onClick={handleClick}
      >
        Theme {theme}
      </button>
      <div className={`grid grid-cols-3 gap-6 p-5`}>
        <InputSection />
        <CalculateSection />
        <ResultSection />
      </div>
    </div>
  );
}

export default App;
