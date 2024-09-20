const { createRSVPApiError } = require('../errors/custom-error')

const notFound = (req,res,next) => next(createRSVPApiError('API not found!!',404))

module.exports = notFound