const express = require('express');
const router = express.Router();

const GrupoEscalasController = require('../controller/GrupoEscalasController');
router.get('/', GrupoEscalasController.list);
router.post('/', GrupoEscalasController.save);
router.delete('/:IdGrupoEscala', GrupoEscalasController.delete);
router.get('/:IdGrupoEscala', GrupoEscalasController.edit);
router.post('/:IdGrupoEscala', GrupoEscalasController.update);

module.exports = router;



