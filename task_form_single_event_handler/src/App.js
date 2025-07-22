import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    city: "",
  });

  const [printData, setPrintData] = useState("");
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name] : e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrintData(data.firstName + " " + data.lastName + ", " + data.mobile + ", " + data.city)
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your first name"
          onChange={handleInputChange}
          name = "firstName"
        />
        <br />
        <input
          type="text"
          placeholder="Type your last name"
          onChange={handleInputChange}
          name = "lastName"
        />
        <br />
        <input
          type="number"
          placeholder="Type your mobil no"
          onChange={handleInputChange}
          name = "mobile"
        />
        <br />
        <input
          type="text"
          placeholder="Type your city"
          onChange={handleInputChange}
          name = "city"
        />
        <br />
        <button type="submit">Submit</button>
        <br />
        <h2>{printData}</h2>
      </form>
    </>
  );
}

export default App;
