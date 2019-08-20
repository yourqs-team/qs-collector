const express = require('express');
const router = express.Router();


// Define your CONTROLLERS here
const sampleController = require('../controllers/sampleController');

// see handlers/errorHandlers.js - this function catch all errors - EXPERIMENTAL
const { catchErrors } = require('../handlers/errorHandlers');

/* Define your RESTful routes here */
router.get('/', sampleController.homePage);
router.get('/users', sampleController.getUsers);
router.get('/role', sampleController.getUserRole);


// login
router.get('/login', sampleController.loginForm);
router.post('/login', sampleController.login);
router.get('/logout', sampleController.logout);


module.exports = router;
