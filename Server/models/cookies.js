const mongoose = require("mongoose");

const cookieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    img : {
        type: String,
        required: true,
    },
},
    { timestamps: true },
);

const Cookies = mongoose.model("cookies", cookieSchema);

module.exports = Cookies;