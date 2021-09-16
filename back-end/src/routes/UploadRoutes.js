const { Router } = require('express');
const express = require('express');
const router = express.Router();
const UploadController = require('../controllers/UploadController');


router.post('/', UploadController.store);

router.delete('/', UploadController.destroy);

module.exports = router;
