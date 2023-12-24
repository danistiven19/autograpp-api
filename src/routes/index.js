const express = require('express');
const famousRoutes = require('./famousRoutes');

function routerAPI (app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/famous', famousRoutes);
}

module.exports = routerAPI;