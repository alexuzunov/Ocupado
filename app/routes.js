const express = require("express");

const authController = require('./controllers/auth_controller');

const router = express.Router();

// Authentication Routes
router.post('/register', authController.register);
router.post('/login', authController.login);

exports.router = router;