const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.json())

mongoose.connect('mongodb+srv://newuser:test1234@crud.0pme8m8.mongodb.net/?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});