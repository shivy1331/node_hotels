const mongoose = require("mongoose");
require('dotenv').config();

//Define the MongoDB connection URL
// const mongoURL = "mongodb://localhost:27017/hotels";
// const mongoURL = 'mongodb+srv://shivendrasingh1331:shivi123@cluster0.ax5zb.mongodb.net/'
// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

//Set up MongoDB connection
mongoose.connect(mongoURL);

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

//Define event listeners for database connection
db.on('connected', () => {
  console.log("Connected to MongoDB server:");
});

db.on('error', () => {
  console.log("MongoDB connection error:", err);
});

db.on('disconnected', () => {
  console.log("MongoDB disconnected:");
});

//Export the database connection
module.exports = db; 
