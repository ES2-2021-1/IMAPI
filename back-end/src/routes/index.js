const express = require('express');
const router = express.Router();

const AuthMiddleware = require('../middlewares/AuthMiddleware');
const UserRoutes = require('./UserRoutes');
const StartupRoutes = require('./StartupRoutes');
const SubmissionRoutes = require('./SubmissionRoutes');
const TaskRoutes = require('./TaskRoutes');
const AnnexRoutes = require('./AnnexRoutes');
const AuthRoutes = require('./AuthRoutes');
const StepRoutes = require('./StepRoutes');
const ModuleRoutes = require('./ModuleRoutes');
const UploadRoutes = require('./UploadRoutes');

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);
router.use('/startup', AuthMiddleware.auth, StartupRoutes);
router.use('/annex', AuthMiddleware.auth, AnnexRoutes);
router.use('/task', AuthMiddleware.auth, TaskRoutes);
router.use('/submission', AuthMiddleware.auth, SubmissionRoutes);
router.use('/step', AuthMiddleware.auth, StepRoutes);
router.use('/module', AuthMiddleware.auth, ModuleRoutes);
router.use('/upload', AuthMiddleware.auth, UploadRoutes);

module.exports = router;
