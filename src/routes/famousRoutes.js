const express = require('express');
const router = express.Router();

const famousController = require('../controllers/famousController');

router.get('/', famousController.getAll);

module.exports = router;
