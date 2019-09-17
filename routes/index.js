const express = require("express");
const router = express.Router();

// Define your CONTROLLERS here
const sampleController = require('../controllers/sampleController');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const dashboardController = require('../controllers/dashboardController');
const pdfGenController = require('../controllers/pdfGenController');
const changeProfileController = require('../controllers/changeProfileController');
const changePasswordController = require('../controllers/changePasswordController');
const userController = require('../controllers/userController');


// see handlers/errorHandlers.js - this function catch all errors - EXPERIMENTAL
const { catchErrors } = require("../handlers/errorHandlers");

/* Define your RESTful routes here */
router.get('/', sampleController.homePage);
// router.get('/e', sampleController.emailSample);
// router.get('/users', sampleController.getUsers);
// router.get('/role', sampleController.getUserRole);

// login
router.get("/login", loginController.loginForm);
router.post("/login", loginController.login);
router.get("/logout", loginController.logout);

// Register
router.get("/register", registerController.registerForm);
router.post("/register", catchErrors(registerController.validateRegisterForm), registerController.createUser);

// Project Dashboard
router.get('/projects', loginController.isLoggedIn, dashboardController.projects);
router.get('/projects/submitted', loginController.isLoggedIn, dashboardController.submittedProjects); // fitlered submitted
router.get('/projects/in-progress', loginController.isLoggedIn, dashboardController.inProgressProjects); // fitlered in-progress
router.get('/projects/search', loginController.isLoggedIn, catchErrors(dashboardController.search));
router.post('/project/create', loginController.isLoggedIn, catchErrors(dashboardController.createProject), catchErrors(dashboardController.editProject));
router.get('/project/:id/edit', loginController.isLoggedIn, catchErrors(dashboardController.editProject));
router.post('/project/:id/update', loginController.isLoggedIn, catchErrors(dashboardController.updateProject));
router.get('/project/:id/delete', loginController.isLoggedIn, catchErrors(dashboardController.deleteProject));
router.get('/project/:id/submit', loginController.isLoggedIn, catchErrors(dashboardController.submitProject));
router.post('/project/:id/clone', loginController.isLoggedIn, catchErrors(dashboardController.cloneProject));

// PDF
router.get('/pdf/:id/download', catchErrors(pdfGenController.pdfDownload));

// Upload Picture
router.post('/profile-pic/upload/', changeProfileController.upload, catchErrors(changeProfileController.resize),  catchErrors(changeProfileController.changeProfile));

// Forgot / Change Passwprd
router.get('/forgot-password', changePasswordController.forgotPasswordForm);
router.post('/forgot-password', changePasswordController.forgotPassword);
router.post('/change-password', changePasswordController.changePassword);

// Edit Profile
router.get('/user', userController.editUserForm);
router.post('/user/update', userController.updateUser);

module.exports = router;
