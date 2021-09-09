const { Router } = require('express');
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');


router.get('/', TaskController.index);

router.post('/', TaskController.store);

router.get('/:id', TaskController.show);

router.patch('/:id', TaskController.update);

router.delete('/:id', TaskController.destroy);

module.exports = router;