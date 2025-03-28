const express = require('express');
const router = express.Router();

const UbicacionController = require('../controller/UbicacionController');
router.get('/', UbicacionController.list);
router.post('/', UbicacionController.save);
router.delete('/:IdUbicacion', UbicacionController.delete);
router.get('/:IdUbicacion', UbicacionController.edit);
router.post('/:IdUbicacion', UbicacionController.update);

module.exports = router;



