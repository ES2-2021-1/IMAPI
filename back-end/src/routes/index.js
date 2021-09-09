const express = require('express');
const router = express.Router();

const UserRoutes = require('./UserRoutes');
const StartupRoutes = require('./StartupRoutes');
const TaskRoutes = require('./TaskRoutes');
const AnnexRoutes = require('./AnnexRoutes');
const AuthRoutes = require('./AuthRoutes');

router.use('/user', UserRoutes);
router.use('/startup', StartupRoutes);
router.use('/annex', AnnexRoutes);
router.use('/task', TaskRoutes);
router.use('/auth', AuthRoutes);

module.exports = router;
