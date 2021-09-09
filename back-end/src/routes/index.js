const express = require('express');
const router = express.Router();

const UserRoutes = require('./UserRoutes');
const TaskRoutes = require('./TaskRoutes');

router.use('/user', UserRoutes);
router.use('/task', TaskRoutes);


module.exports = router;
