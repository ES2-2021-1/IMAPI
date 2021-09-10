  const { Router } = require('express');
  const express = require('express');
  const router = express.Router();
  const StepController = require('../controllers/StepController');

  router.get('/', StepController.index);

  router.post('/', StepController.store);

  router.get('/:id', StepController.show);

  router.patch('/:id', StepController.update);

  router.delete('/:id', StepController.destroy);

  module.exports = router;