const express = require('express');
const router = express.Router();

const OtrosPagosController = require('../controller/OtrosPagosController');
router.get('/', OtrosPagosController.list);
router.post('/', OtrosPagosController.save);
router.delete('/:IdPagos', OtrosPagosController.delete);
router.get('/:IdPagos', OtrosPagosController.edit);
router.post('/:IdPagos', OtrosPagosController.update);

module.exports = router;