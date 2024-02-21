const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDb = require('./config/db');

//initialize express
const app = express();

const PORT = process.env.PORT || 5000;

// connect to mongodb
connectToDb();

// start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
