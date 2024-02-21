const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDb = require('./config/db');
const userRoute = require('./routes/userRoute');
const errorHandler = require('./middleware/errorMiddleware');

//initialize express
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

//routes middleware
app.use('/api/users', userRoute);

//routes
app.get('/', (req, res) => res.send('API running'));

//error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// connect to mongodb
connectToDb();

// start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
