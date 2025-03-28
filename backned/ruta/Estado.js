const express = require('express');
const router = express.Router();

const EstadoController = require('../controller/EstadoController');
router.get('/', EstadoController.list);
router.post('/', EstadoController.save);
router.delete('/:IdEstado', EstadoController.delete);
router.get('/:IdEstado', EstadoController.edit);
router.post('/:IdEstado', EstadoController.update);

module.exports = router;



