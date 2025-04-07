const express = require('express');
const router = express.Router();
const OtrosPagosEmpleadosController = require('../controller/OtrosPagosEmpleadosController');

console.log('Cargando rutas de OtrosPagosEmpleados'); // Depuración

// Listar todos los registros
router.get('/', OtrosPagosEmpleadosController.list);

// Crear un nuevo registro
router.post('/', OtrosPagosEmpleadosController.save);

// Eliminar un registro
router.delete('/:id', OtrosPagosEmpleadosController.delete);

// Obtener un registro específico
router.get('/:id', OtrosPagosEmpleadosController.edit); // Cambiado de '/OtrosPagosEmpleados/:id'

// Actualizar un registro
router.put('/:id', OtrosPagosEmpleadosController.update); // Cambiado de POST a PUT

module.exports = router;