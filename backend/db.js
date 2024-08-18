//importing mongoose
const mongoose = require('mongoose');
require('dotenv').config();

//mongoose create default object that represents mongoDB connection
//mongodbURL = 'mongodb://0.0.0.0:27017/luminaVista' //for local database
//const mongodbURL = process.env.mongodbURL;
const mongodbURL = process.env.mongodbURL_Local;
const db = mongoose.connect(mongodbURL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

//export the database connecion
module.exports = db;