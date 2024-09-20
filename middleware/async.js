const { createRSVPApiError } = require('../errors/custom-error')

const asyncWrapper = (fn)=>{
    return async (req,res,next)=>{
        try {
            await fn(req,res,next)  
        } catch (error) {
            // Extract and pass the error message to the custom error handler
            const errorMessage = error.message || 'An unexpected error occurred';
            next(createRSVPApiError(errorMessage,500))
        }
    }
}

module.exports = asyncWrapper