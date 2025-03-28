const express = require('express');
const router = express.Router();

const CargoNivelUtilizacionController = require('../controller/CargoNivelUtilizacionController');
router.get('/', CargoNivelUtilizacionController.list);
router.post('/', CargoNivelUtilizacionController.save);
router.delete('/:IdCargo', CargoNivelUtilizacionController.delete);
router.get('/:IdCargo', CargoNivelUtilizacionController.edit);
router.post('/:IdCargo', CargoNivelUtilizacionController.update);

module.exports = router;