const express = require('express');
const router = express.Router();

// Add other controllers here
const { getAllUsers, getSingleUser } = require('../controllers/userController');

router.get('/users', getAllUsers);
router.get('/users/:username', getSingleUser);

module.exports = router;
