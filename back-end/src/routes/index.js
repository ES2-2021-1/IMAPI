const express = require('express');
const router = express.Router();

const UserRoutes = require('./UserRoutes');
const StartupRoutes = require('./StartupRoutes');
const SubmissionRoutes = require('./SubmissionRoutes');
const TaskRoutes = require('./TaskRoutes');
const AnnexRoutes = require('./AnnexRoutes');
const AuthRoutes = require('./AuthRoutes');
const StepRoutes = require('./StepRoutes');
const ModuleRoutes = require('./ModuleRoutes');

router.use('/user', UserRoutes);
router.use('/startup', StartupRoutes);
router.use('/annex', AnnexRoutes);
router.use('/task', TaskRoutes);
router.use('/auth', AuthRoutes);
router.use('/submission', SubmissionRoutes);
router.use('/step', StepRoutes);
router.use('/module', StepRoutes);

module.exports = router;