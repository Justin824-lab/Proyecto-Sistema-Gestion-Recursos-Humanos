const express = require('express');
const router = express.Router();

const NoResolucionController = require('../controller/NoResolucionController');
router.get('/', NoResolucionController.list);
router.post('/', NoResolucionController.save);
router.delete('/:IdNoResolucion', NoResolucionController.delete);
router.get('/:IdNoResolucion', NoResolucionController.edit);
router.post('/:IdNoResolucion', NoResolucionController.update);

module.exports = router;