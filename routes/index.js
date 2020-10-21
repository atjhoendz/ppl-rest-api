const express = require('express');
const router = express.Router();
const sendResponse = require('../utils/sendResponse')

const user = require('./user')

/* GET home page. */
router.get('/', function(req, res, next) {
  return sendResponse(res, true, 200, {}, 'API running successfuly')
});

router.use('/user', user)

module.exports = router;
