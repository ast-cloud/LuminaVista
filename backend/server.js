const express = require('express');
const app = express()
const db = require('./db');
const bodyParser = require('body-parser');
require('dotenv').config();
const contactRoutes = require('./routes/contactRoute');
const mentorRoutes = require('./routes/mentorRoute');
const internRoutes = require('./routes/internRoute');
const userDetailsRoutes = require('./routes/userDetailsRoute');
const eventDetailsRoutes = require('./routes/eventDetailsRoute');
let cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Welcome to our lumina vista app!');
})

app.use('/', contactRoutes);
app.use('/', mentorRoutes);
app.use('/', internRoutes);
app.use('/', userDetailsRoutes);
app.use('/', eventDetailsRoutes);

app.listen(3000, () => {
    console.log("listening on port 3000");
})