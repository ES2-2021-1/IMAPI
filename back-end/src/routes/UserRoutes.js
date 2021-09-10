const { Router } = require('express');
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/', UserController.index);

router.post('/', UserController.store);

router.get('/:id', UserController.show);

router.patch('/:id', UserController.update);

router.delete('/:id', UserController.destroy);

module.exports = router;