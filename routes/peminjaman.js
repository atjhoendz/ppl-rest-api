const express = require('express')
const router = express.Router()
const peminjamanController = require('../controller/peminjaman')

router.get('/', peminjamanController.getAll)
router.get('/:id', peminjamanController.get)
router.post('/', peminjamanController.create)
router.put('/:id', peminjamanController.update)
router.delete('/:id', peminjamanController.delete)

module.exports = router