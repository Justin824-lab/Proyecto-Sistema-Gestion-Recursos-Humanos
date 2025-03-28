const express = require('express');
const router = express.Router();

const CargoFuncionesController = require('../controller/CargoFuncionesController');
router.get('/', CargoFuncionesController.list);
router.post('/', CargoFuncionesController.save);
router.delete('/:IdCargo', CargoFuncionesController.delete);
router.get('/:IdCargo', CargoFuncionesController.edit);
router.post('/:IdCargo', CargoFuncionesController.update);

module.exports = router;