const { Router } = require('express');
const express = require('express');
const router = express.Router();
const ModuleController = require('../controllers/ModuleController');

router.get('/', ModuleController.index);

router.post('/', ModuleController.store);

router.get('/:id', ModuleController.show);

router.patch('/:id', ModuleController.update);

router.delete('/:id', ModuleController.destroy);

module.exports = router;