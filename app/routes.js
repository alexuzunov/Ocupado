const express = require("express");

const authController = require('./controllers/auth_controller');
const userController = require('./controllers/user_controller');

const router = express.Router();

// Authentication Routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// User Routes
router.get('/users', userController.get_all);
router.get('/users/:id', userController.get_one);
router.put('/users/:id', userController.put_one);
router.delete('/users/:id', userController.delete_one);

exports.router = router;