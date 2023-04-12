const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Import the food model from the food.js file in the models folder
const FoodModel = require('./models/food');

// Middleware to parse the body of the request as JSON
app.use(express.json())

// Connect to the database
mongoose.connect('mongodb+srv://newuser:pass1234@crud.0pme8m8.mongodb.net/food', 
{
    useNewUrlParser: true,
});

// Create a new food document in the database with the foodName and daysSinceIAte fields
app.get('/', async (req, res) => {
    // Find all the food in the database
    const food = new FoodModel({foodName: "Apple", daysSinceIAte: 3});

    try {
        // Save the food to the database
        await food.save();
        // Send a response to the client (prints on the screen)
        res.send("inserted data")
    } catch (err) {
        // If there is an error, log it to the console
        console.log(err);
    }
});

// App listens on port 3001 for requests from the client
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// Start the server app by typing in the terminal: node index.js