const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true,
    },
    daysSinceIAte: {
        type: Number,
        required: true,
    },
});

// Passes in the name of the model and the schema to use for the model as parameters to mongoose.model()
const Food = mongoose.model('Food', foodSchema);
module.exports = Food;