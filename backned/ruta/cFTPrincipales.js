const express = require('express');
const router = express.Router();

const cFTPrincipalesController = require('../controller/cFTPrincipalesController');
router.get('/', cFTPrincipalesController.list);
router.post('/', cFTPrincipalesController.save);
router.delete('/:IdFTPrincipales', cFTPrincipalesController.delete);
router.get('/:IdFTPrincipales', cFTPrincipalesController.edit);
router.post('/:IdFTPrincipales', cFTPrincipalesController.update);

module.exports = router;