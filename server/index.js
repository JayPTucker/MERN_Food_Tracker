const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Import the food model from the food.js file in the models folder
const FoodModel = require('./models/Food');

// Middleware to parse the body of the request as JSON
app.use(express.json())
app.use(cors())

// Connect to the database
mongoose.connect('mongodb+srv://newuser:pass1234@crud.0pme8m8.mongodb.net/food', 
{
    useNewUrlParser: true,
});

// Create a new food document in the database with the foodName and daysSinceIAte fields
app.post('/insert', async (req, res) => {
    // Find all the food in the database
    const foodName = req.body.foodName;
    const days = req.body.days;

    const food = new FoodModel({foodName: foodName, daysSinceIAte: days});

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

app.get('/read', async (req, res) => {
    FoodModel.find({})
        // Below we are using the .then() method to get the result of the query and send it to the client
        .then(result => {
        res.send(result);
        })
        // Below we are using the .catch() method to get the error and send it to the client
        .catch(err => {
        res.send(err);
        })
    });

    // Below is what you would do if you wanted to find all names under "Apple"
    // FoodModel.find({ $where: {foodName: "Apple"}} );

// App listens on port 3001 for requests from the client
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// Start the server app by typing in the terminal: node index.js
// For the server to refresh everytime you save, run in the terminal: npm run devStart