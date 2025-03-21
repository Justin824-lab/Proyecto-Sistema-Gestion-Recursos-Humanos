const express = require('express');
const router = express.Router();

const NiveldeUtilizacionController = require('../controller/NiveldeUtilizacionController');
router.get('/', NiveldeUtilizacionController.list);
router.post('/', NiveldeUtilizacionController.save);
router.delete('/:IdNivelUtilizacion', NiveldeUtilizacionController.delete);
router.get('/:IdNivelUtilizacion', NiveldeUtilizacionController.edit);
router.post('/:IdNivelUtilizacion', NiveldeUtilizacionController.update);

module.exports = router;