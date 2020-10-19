const express = require('express');
const { info } = require('../controllers/user');
const { authenticateUser } = require('../middleware/authenticateUser');

const router = express.Router();

router.get('/info', authenticateUser, info);

module.exports = router;
