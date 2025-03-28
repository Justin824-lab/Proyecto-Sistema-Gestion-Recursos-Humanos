const express = require('express');
const router = express.Router();

const bancosController = require('../controller/bancosController');
router.get('/', bancosController.list);
router.post('/', bancosController.save);
router.delete('/:cbank', bancosController.delete);
router.get('/:cbank', bancosController.edit);
router.post('/:cbank', bancosController.update);

module.exports = router;



