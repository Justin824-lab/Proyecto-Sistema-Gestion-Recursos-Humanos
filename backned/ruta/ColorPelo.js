const express = require('express');
const router = express.Router();

const ColorPeloController = require('../controller/ColorPeloController');
router.get('/', ColorPeloController.list);
router.post('/', ColorPeloController.save);
router.delete('/:IdColorPelo', ColorPeloController.delete);
router.get('/:IdColorPelo', ColorPeloController.edit);
router.post('/:IdColorPelo', ColorPeloController.update);

module.exports = router;



