const mongoose = require('mongoose');

const user1 = "ishika";
const pass1 = "ishikachopra";
const dbName = "Cafe";
const uri = `mongodb+srv://ishika:ishikachopra@cluster0.y0dil.mongodb.net/CupNCrave?retryWrites=true&w=majority&appName=Cluster0`;

async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error;
    }
}

module.exports = connectDB;