const express = require('express');
const router = express.Router();

const UserRoutes = require('./UserRoutes');
const StartupRoutes = require('./StartupRoutes');
const TaskRoutes = require('./TaskRoutes');
const AnnexRoutes = require('./AnnexRoutes');
const AuthRoutes = require('./AuthRoutes');
const StepRoutes = require('./StepRoutes');

router.use('/user', UserRoutes);
router.use('/startup', StartupRoutes);
router.use('/annex', AnnexRoutes);
router.use('/task', TaskRoutes);
router.use('/auth', AuthRoutes);
router.use('/step', StepRoutes);

module.exports = router;