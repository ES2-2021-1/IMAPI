const { Router } = require('express');
const express = require('express');
const router = express.Router();
const SubmissionController = require('../controllers/SubmissionController');

router.get('/', SubmissionController.index);

router.post('/', SubmissionController.store);

router.get('/:id', SubmissionController.show);

router.patch('/:id', SubmissionController.update);

router.delete('/:id', SubmissionController.destroy);

module.exports = router;