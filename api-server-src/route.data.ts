// Packages
const express = require('express');
const router = express.Router();

const data = require('./controllers/controller.data');

// Routers
router.get('/data', data.get);

module.exports = router;
