const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const bookRoutes = require('./routes/book');


require('dotenv').config();


// CONNECTION DETAILS
const url = process.env.DATABASE_URL;
mongoose.connect(url);

const connection = mongoose.connection;


connection.once('open', () =>{
  console.log('Application is connected to the database successfully!');
});

// declare an express application

const app = express();

// use middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/book', bookRoutes);

// port
const PORT = process.env.PORT || 5000;

// listen to the port
app.listen(PORT, () =>{
  console.log(`Application is listening on port ${PORT}`);
});
