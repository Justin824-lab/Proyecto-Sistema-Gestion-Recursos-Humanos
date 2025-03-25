const express = require('express');
const router = express.Router();

const EmpleadosController = require('../controller/EmpleadosController');
router.get('/', EmpleadosController.list);
router.post('/', EmpleadosController.save);
router.delete('/:CI', EmpleadosController.delete);
router.get('/:CI', EmpleadosController.edit);
router.post('/:CI', EmpleadosController.update);

module.exports = router;