// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routerAPI = require('./routes');
const connectDB = require('./config/db');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Create Express application
const app = express();

// Middleware setup
app.use(cors('localhost:3000'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
connectDB();

// Routes setup
routerAPI(app);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke: '+ err.stack);
});

module.exports = app;