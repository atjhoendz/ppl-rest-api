const express = require('express');
const router = express.Router();
const sendResponse = require('../utils/sendResponse')

const user = require('./user')
const book = require('./book')
const peminjaman = require('./peminjaman')

router.get('/', function(req, res, next) {
  return sendResponse(res, true, 200, {}, 'API running successfuly')
});

router.use('/user', user)
router.use('/buku', book)
router.use('/peminjaman', peminjaman)

module.exports = router;
