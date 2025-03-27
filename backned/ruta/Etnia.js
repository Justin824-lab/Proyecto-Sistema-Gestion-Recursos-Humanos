const express = require('express');
const router = express.Router();

const EtniaController = require('../controller/EtniaController');
router.get('/', EtniaController.list);
router.post('/', EtniaController.save);
router.delete('/:IdEtnia', EtniaController.delete);
router.get('/:IdEtnia', EtniaController.edit);
router.post('/:IdEtnia', EtniaController.update);

module.exports = router;



