import { useState } from "react";
import "./App.css";

function App() {
  const [field, setField] = useState({
    name: "",
    gender: "",
    isAgree: false,
  });
  const [print, setPrint] = useState("");

  const handleChange = (e) => {
    setField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChecked = (e) => {
    setField((prev) => ({ ...prev, isAgree: e.target.checked }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setField((prev) => ({...prev, e.target.name : e.target.value}));
    let toPrint = field.gender === "male" ? "Hello, Mr. " : "Hello, Ms. ";
    setPrint(toPrint + field.name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        Female
        <br />
        <input type="checkbox" name="isAgree" onChange={handleChecked} />I
        Agree.
        <br />
        <button type="submit" disabled={!field.isAgree}>Submit</button>
      </form>
      <p>{print}</p>
    </div>
  );
}

export default App;
