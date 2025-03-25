const express = require('express');
const router = express.Router();

const CatOcupacionalController = require('../controller/CatOcupacionalController');
router.get('/', CatOcupacionalController.list);
router.post('/', CatOcupacionalController.save);
router.delete('/:IdCatOcupacional', CatOcupacionalController.delete);
router.get('/:IdCatOcupacional', CatOcupacionalController.edit);
router.post('/:IdCatOcupacional', CatOcupacionalController.update);

module.exports = router;