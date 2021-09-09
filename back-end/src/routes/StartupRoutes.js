const { Router } = require('express');
const express = require('express');
const router = express.Router();
const StartupController = require('../controllers/StartupController');

router.get('/', StartupController.index);

router.post('/', StartupController.store);

router.get('/:id', StartupController.show);

router.patch('/:id', StartupController.update);

router.delete('/:id', StartupController.destroy);

module.exports = router;