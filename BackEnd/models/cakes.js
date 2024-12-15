const mongoose = require("mongoose");

const cakeSchema = new mongoose.Schema({
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
},
    { timestamps: true },
);

const Cakes = mongoose.model("cakes", cakeSchema);

module.exports = Cakes;