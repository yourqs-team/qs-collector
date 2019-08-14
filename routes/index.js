const express = require('express');
const router = express.Router();


// Define your CONTROLLERS here
const sampleController = require('../controllers/sampleController');

// see handlers/errorHandlers.js - this function catch all errors - EXPERIMENTAL
const { catchErrors } = require('../handlers/errorHandlers');

/* Define your RESTful routes here */
router.get('/', sampleController.homePage);
router.get('/users', sampleController.getUsers);


module.exports = router;
