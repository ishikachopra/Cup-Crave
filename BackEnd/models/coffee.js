const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
},
    { timestamps: true },
);

const Coffee = mongoose.model("coffee", coffeeSchema);

module.exports = Coffee;