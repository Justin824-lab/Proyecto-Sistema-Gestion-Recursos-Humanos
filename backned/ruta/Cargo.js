const express = require('express');
const router = express.Router();

const CargoController = require('../controller/CargoController');
router.get('/', CargoController.list);
router.post('/', CargoController.save);
router.delete('/:IdCargo', CargoController.delete);
router.get('/:IdCargo', CargoController.edit);
router.post('/:IdCargo', CargoController.update);

module.exports = router;