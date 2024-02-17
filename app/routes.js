const express = require("express");

const authenticationMiddleware = require("./middleware/auth");

const authController = require('./controllers/auth_controller');
const userController = require('./controllers/user_controller');
const facilityController = require('./controllers/facility_controller');

const router = express.Router();

// Authentication Routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// User Routes
router.get('/users', authenticationMiddleware.auth, userController.get_all);
router.get('/users/:id', authenticationMiddleware.auth, userController.get_one);
router.put('/users/:id', authenticationMiddleware.auth, userController.put_one);
router.delete('/users/:id', authenticationMiddleware.auth, userController.delete_one);

// Facility Routes
router.get('/facilities', authenticationMiddleware.auth, facilityController.get_all);
router.post('/facilities', authenticationMiddleware.auth, facilityController.create_one);
router.get('/users/:id/facilities', authenticationMiddleware.auth, facilityController.get_facilities_for_user);

exports.router = router;