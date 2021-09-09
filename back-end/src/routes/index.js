const express = require('express');
const router = express.Router();

const UserRoutes = require('./UserRoutes');
const StartupRoutes = require('./StartupRoutes');
const AnnexRoutes = require('./AnnexRoutes');

router.use('/user', UserRoutes);
router.use('/startup', StartupRoutes);
router.use('/annex', AnnexRoutes);

module.exports = router;
