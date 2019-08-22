const express = require('express');
const router = express.Router();


// Define your CONTROLLERS here
const sampleController = require('../controllers/sampleController');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');

// see handlers/errorHandlers.js - this function catch all errors - EXPERIMENTAL
const { catchErrors } = require('../handlers/errorHandlers');

/* Define your RESTful routes here */
router.get('/', sampleController.homePage);
router.get('/users', sampleController.getUsers);
router.get('/role', sampleController.getUserRole);


// login
router.get('/login', loginController.loginForm);
router.post('/login', loginController.login);
router.get('/logout', loginController.logout);

// Register
router.get('/register', registerController.registerForm);

module.exports = router;
