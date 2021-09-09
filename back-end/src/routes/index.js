const express = require('express');
const router = express.Router();
const UserRoutes = require('./UserRoutes');
const StartupRoutes = require('./StartupRoutes');
const SubmissionRoutes = require('./SubmissionRoutes');

router.use('/user', UserRoutes);
router.use('/startup', StartupRoutes);
router.use('/submission', SubmissionRoutes);

module.exports = router;
