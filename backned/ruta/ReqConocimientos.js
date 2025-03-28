const express = require('express');
const router = express.Router();

const ReqConocimientoController = require('../controller/ReqConocimientoController');
router.get('/', ReqConocimientoController.list);
router.post('/', ReqConocimientoController.save);
router.delete('/:IdReqConoc', ReqConocimientoController.delete);
router.get('/:IdReqConoc', ReqConocimientoController.edit);
router.post('/:IdReqConoc', ReqConocimientoController.update);

module.exports = router;



