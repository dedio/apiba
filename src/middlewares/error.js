const errors = require('../const/errors')

module.exports = function (err, req, res, next) {
  //console.log(err)
  let response = {
      timestamp: err.timestamp,
      status: err.status,
      error: err.error,
      message: err.message
  }

  if (err.isJoi) {
    let validationErrorType = err.details[0].type
    let errorKey = 'ValidationError'
    if (validationErrorType === 'any.required'
      || validationErrorType === 'object.unknown'
      || validationErrorType === 'string.base'
    ) {
      errorKey = 'BadRequest'
    }

    response.timestamp = errors[errorKey].timestamp
    response.status = errors[errorKey].status
    response.error = errors[errorKey].error
    response.message = errors[errorKey].message
  }

  if (err.message === 'Not Found') {
    response.message = 'Not Found'
  }

  res.status(200).json(response)
}
