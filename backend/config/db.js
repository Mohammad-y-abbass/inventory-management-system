const mongoose = require('mongoose');

const connectToDb = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));
};

module.exports = connectToDb;
