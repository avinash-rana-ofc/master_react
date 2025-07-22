import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    firstName : "",
    lastName : "",
    mobile : "",
    city : ""
  });
  const [printData, setPrintData] = useState("");

  const handleFirstNameChange = (e) => {
    setData((prev) => ({...prev, firstName : e.target.value}));
  }

  const handleLastNameChange = (e) => {
    setData({...data, lastName : e.target.value });
  }

  const handleMobileChange = (e) => {
    setData({...data, mobile : e.target.value});
  }

  const handleCityChange = (e) => {
    setData({...data, city : e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setPrintData(data.firstName + " "+ data.lastName + ", " + data.mobile + ", "+ data.city)
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
        <h2>{printData}</h2>
      </form>
    </>
  );
}

export default App;
