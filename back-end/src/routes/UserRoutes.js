const { Router } = require('express');
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.get('/', AuthMiddleware.auth, UserController.index);

router.post('/', UserController.store);

router.get('/:id', AuthMiddleware.auth, UserController.show);

router.patch('/:id', AuthMiddleware.auth, UserController.update);

router.delete('/:id', AuthMiddleware.auth, UserController.destroy);

module.exports = router;