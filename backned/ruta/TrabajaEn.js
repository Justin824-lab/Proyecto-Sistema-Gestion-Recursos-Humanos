const express = require('express');
const router = express.Router();

const TrabajaEnController = require('../controller/TrabajaEnController');
router.get('/', TrabajaEnController.list);
router.post('/', TrabajaEnController.save);
router.delete('/:id', TrabajaEnController.delete);
router.get('/:id', TrabajaEnController.edit);
router.post('/:id', TrabajaEnController.update);

module.exports = router;