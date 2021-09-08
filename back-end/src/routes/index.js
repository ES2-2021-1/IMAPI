const express = require('express');
const router = express.Router();
const UserRoutes = require('./UserRoutes');
const StartupRoutes = require('./StartupRoutes');

router.use('/user', UserRoutes);
router.use('/startup', StartupRoutes);

module.exports = router;
