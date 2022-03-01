const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


require('dotenv').config();


// declare an express application

const app = express();

// use middleware
app.use(cors());
app.use(bodyParser.json());

// routes

// port
const PORT = process.env.PORT || 5000;

// listen to the port
app.listen(PORT, () =>{
  console.log(`Application is listening on port ${PORT}`);
});
