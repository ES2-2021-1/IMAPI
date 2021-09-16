const { Router } = require('express');
const express = require('express');
const router = express.Router();
const AnnexController = require('../controllers/AnnexController');

router.get('/', AnnexController.index);

router.post('/', AnnexController.store);

router.get('/:id', AnnexController.show);

router.patch('/:id', AnnexController.update);

router.delete('/:id', AnnexController.destroy);

module.exports = router;