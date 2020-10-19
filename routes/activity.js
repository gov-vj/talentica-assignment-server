const express = require('express');
const { login, logout, register, isAuthenticated } = require('../controllers/activity');

const router = express.Router();

router.post('/login', login);
router.get('/logout', logout);
router.post('/register', register);
router.get('/isAuthenticated', isAuthenticated);

module.exports = router;
