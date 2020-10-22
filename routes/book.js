const express = require('express')
const router = express.Router()
const bukuController = require('../controller/book')

router.get('/', bukuController.getAll)
router.get('/:id', bukuController.get)
router.post('/', bukuController.create)
router.put('/:id', bukuController.update)
router.delete('/:id', bukuController.delete)

module.exports = router