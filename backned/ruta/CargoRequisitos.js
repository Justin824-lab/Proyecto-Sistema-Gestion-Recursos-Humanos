const express = require('express');
const router = express.Router();

const CargoRequisitosController = require('../controller/CargoRequisitosController');
router.get('/', CargoRequisitosController.list);
router.post('/', CargoRequisitosController.save);
router.delete('/:IdCargo', CargoRequisitosController.delete);
router.get('/:IdCargo', CargoRequisitosController.edit);
router.post('/:IdCargo', CargoRequisitosController.update);

module.exports = router;