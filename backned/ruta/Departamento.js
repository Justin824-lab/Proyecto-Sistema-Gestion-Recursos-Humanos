const express = require('express');
const router = express.Router();

const DepartamentoController = require('../controller/DepartamentoController');
router.get('/', DepartamentoController.list);
router.post('/', DepartamentoController.save);
router.delete('/:IdDpto', DepartamentoController.delete);
router.get('/:IdDpto', DepartamentoController.edit);
router.post('/:IdDpto', DepartamentoController.update);

module.exports = router;



