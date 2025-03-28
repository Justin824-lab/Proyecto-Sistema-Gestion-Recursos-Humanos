const express = require('express');
const router = express.Router();

const TlaboralController = require('../controller/TlaboralController');
router.get('/', TlaboralController.list);
router.post('/', TlaboralController.save);
router.delete('/:CI', TlaboralController.delete);
router.get('/:CI', TlaboralController.edit);
router.post('/:CI', TlaboralController.update);

module.exports = router;