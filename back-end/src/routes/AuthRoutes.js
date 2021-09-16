const { Router } = require('express');
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.post('/', AuthController.store);

module.exports = router;