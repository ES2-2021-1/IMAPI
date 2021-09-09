const express = require('express');
const router = express.Router();
const AnnexRoutes = require('./AnnexRoutes');

router.use('/annex', AnnexRoutes);

module.exports = router;
