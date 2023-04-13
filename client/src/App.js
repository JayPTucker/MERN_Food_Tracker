import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  // State variables to store the food name and days since I ate
  const [foodName, setfoodName] = useState("");
  const [days, setDays] = useState(0);
  const [newFoodName, setNewFoodName] = useState("");

  const [foodList, setFoodList] = useState([])

  // Use the useEffect hook to get the data from the server when the page loads and store it in the foodList state variable
  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) => {
      console.log(response)
      setFoodList(response.data)
    })
  }, [])

  // Function to add the food name and days since I ate to the list when the button is clicked
  const addToList = () => {
    // console.log(foodName + days)
    // Send a POST request to the server with the food name and days since I ate
    Axios.post('http://localhost:3001/insert', {
      foodName: foodName, 
      days: days
    })
  }

  const updateFood = (id) => {
    Axios.put('http://localhost:3001/update', {
      id: id,
      newFoodName: newFoodName
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
      <hr></hr>
      <h1>Food List</h1>

      {/* Below we are adding our data to the screen. */}
      {foodList.map((val, key) => {
        return <div class="item-div" key={key}>
          <h1> {val.foodName} </h1>
          <h1> {val.daysSinceIAte}</h1>

          <input type="text" placeholder="new food name"
          onChange={(event) => {setNewFoodName(event.target.value)
            }}></input>
          <button onClick={()=> updateFood(val._id)}>Update</button>

          <button>Delete</button>
          </div>
      })}

    </div>
  )
}

export default App;
