const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

router.get('/', userController.getAll)
router.get('/:id', userController.get)
router.post('/', userController.create)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

module.exports = router
