const express = require('express');
const router = express.Router();

// Add other controllers here
const { getAllUsers } = require('../controllers/userController');

router.get('/users', getAllUsers);

module.exports = router;
