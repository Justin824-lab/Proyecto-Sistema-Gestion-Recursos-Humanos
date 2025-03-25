const express = require('express');
const router = express.Router();

const ContratoController = require('../controller/ContratoController');
router.get('/', ContratoController.list);
router.post('/', ContratoController.save);
router.delete('/:IdContrato', ContratoController.delete);
router.get('/:IdContrato', ContratoController.edit);
router.post('/:IdContrato', ContratoController.update);

module.exports = router;