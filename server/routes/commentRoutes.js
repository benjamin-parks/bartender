const express = require('express');
const router = express.Router();

const { getAllComments, getSingleComment } = require('../controllers/commentController');

router.get('/comments', getAllComments);
router.get('/comments/:id', getSingleComment);

module.exports = router;