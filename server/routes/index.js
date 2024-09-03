const userRoutes = require('./userRoutes');
const router = require('express').Router();

router.use('/api', userRoutes);

module.exports = router;