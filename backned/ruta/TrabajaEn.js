const express = require('express');
const router = express.Router();

const TrabajaEnController = require('../controller/TrabajaEnController');
router.get('/', TrabajaEnController.list);
router.post('/', TrabajaEnController.save);
router.delete('/:CI', TrabajaEnController.delete);
router.get('/:CI', TrabajaEnController.edit);
router.post('/:CI', TrabajaEnController.update);

module.exports = router;