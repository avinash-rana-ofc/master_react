import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [city, setCity] = useState("");
  const [data, setData] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const handleMobileChange = (e) => {
    setMobileNo(e.target.value);
  }

  const handleCityChange = (e) => {
    setCity(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(`${firstName} ${lastName}, ${mobileNo}, ${city}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Type your first name' onChange={handleFirstNameChange}/>
        <br />
        <input type='text' placeholder='Type your last name' onChange={handleLastNameChange}/>
        <br />
        <input type='number' placeholder='Type your mobil no' onChange={handleMobileChange} />
        <br />
        <input type='text' placeholder='Type your city' onChange={handleCityChange} />
        <br />
        <button type='submit'>Submit</button>
        <br />
        <h2>{data}</h2>
      </form>
    </>
  );
}

export default App;
