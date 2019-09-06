const express = require("express");
const router = express.Router();

// Define your CONTROLLERS here
const sampleController = require('../controllers/sampleController');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const dashboardController = require('../controllers/dashboardController');

// see handlers/errorHandlers.js - this function catch all errors - EXPERIMENTAL
const { catchErrors } = require("../handlers/errorHandlers");

/* Define your RESTful routes here */
router.get('/', sampleController.homePage);
router.get('/e', sampleController.emailSample);
router.get('/users', sampleController.getUsers);
router.get('/role', sampleController.getUserRole);

// login
router.get("/login", loginController.loginForm);
router.post("/login", loginController.login);
router.get("/logout", loginController.logout);

// Register
router.get("/register", registerController.registerForm);
router.post("/register", catchErrors(registerController.validateRegisterForm), registerController.createUser);

// Project Dashboard
router.get('/projects', loginController.isLoggedIn, dashboardController.projects);
router.post('/project/create', loginController.isLoggedIn, catchErrors(dashboardController.createProject), catchErrors(dashboardController.editProject));
router.get('/project/:id/edit', loginController.isLoggedIn, catchErrors(dashboardController.editProject));
router.post('/project/:id/update', loginController.isLoggedIn, catchErrors(dashboardController.updateProject));
router.get('/project/:id/delete', loginController.isLoggedIn, catchErrors(dashboardController.deleteProject));

// PDF
router.get('/pdf/:id/view', sampleController.pdfView);

module.exports = router;
