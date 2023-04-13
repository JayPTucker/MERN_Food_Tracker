import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  // State variables to store the food name and days since I ate
  const [foodName, setfoodName] = useState("");
  const [days, setDays] = useState(0);

  // Function to add the food name and days since I ate to the list when the button is clicked
  const addToList = () => {
    // console.log(foodName + days)
    // Send a POST request to the server with the food name and days since I ate
    Axios.post('http://localhost:3001/insert', {
      foodName: foodName, 
      days: days
    })
  }

  return (
    <div className="App">
      <h1>Crud APP with MERN</h1>
    
      {/* ------------------------------------- */}
      {/* Main Section */}
      <label>Food Name:</label>

      <input
       type="text" onChange={(event) => {
        setfoodName(event.target.value)
        }}>       
      </input>

      <label>Days Since I Ate:</label>
      <input
       type="number" onChange={(event) => {
        setDays(event.target.value)
        }}>
      </input>

      <button onClick={addToList}>Add to List</button>
      {/* ------------------------------------- */}

    </div>
  )
}

export default App;
