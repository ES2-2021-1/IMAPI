const express = require('express');
const router = express.Router();

const TaskRoutes = require('./TaskRoutes');


router.use('/task', TaskRoutes);

module.exports = router;
