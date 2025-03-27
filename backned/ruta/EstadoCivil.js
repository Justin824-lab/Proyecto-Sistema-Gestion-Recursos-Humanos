const express = require('express');
const router = express.Router();

const EstadoCivilController = require('../controller/EstadoCivilController');
router.get('/', EstadoCivilController.list);
router.post('/', EstadoCivilController.save);
router.delete('/:IdCivil', EstadoCivilController.delete);
router.get('/:IdCivil', EstadoCivilController.edit);
router.post('/:IdCivil', EstadoCivilController.update);

module.exports = router;
