const sendResponse = (res, success, status, data, message) => {
  return res.status(status).json({
    success: success,
    status: status,
    data: data,
    message: message
  })
}

module.exports = sendResponse;