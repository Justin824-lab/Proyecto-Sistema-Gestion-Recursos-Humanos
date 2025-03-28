const express = require('express');
const router = express.Router();

const PlantillaController = require('../controller/PlantillaController');
router.get('/', PlantillaController.list);
router.post('/', PlantillaController.save);
router.delete('/:IdCargo', PlantillaController.delete);
router.get('/:IdCargo', PlantillaController.edit);
router.post('/:IdCargo', PlantillaController.update);

module.exports = router;