const express = require('express');
const router = express.Router();

const OtrosPagosEmpleadosController = require('../controller/OtrosPagosEmpleadosController');
router.get('/', OtrosPagosEmpleadosController.list);
router.post('/', OtrosPagosEmpleadosController.save);
router.delete('/:CI', OtrosPagosEmpleadosController.delete);
router.get('/:CI', OtrosPagosEmpleadosController.edit);
router.post('/:CI', OtrosPagosEmpleadosController.update);

module.exports = router;