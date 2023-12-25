const mongoose = require('mongoose');

const connectDB = async () => {
  const databaseURI = process.env.DATABASE_URI;
  try {
    await mongoose.connect(databaseURI);
    console.log('connected to the database');
  } catch (err) { 
    console.error('connection failed', err.stack);
  }

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB');
  });

  mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });
};

module.exports = connectDB;
