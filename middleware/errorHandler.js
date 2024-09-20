const {RSVPApiError} = require('../errors/custom-error')

const errorHandler = (err,req,res,next)=>{
    if(err instanceof RSVPApiError){
       return res.status(err.statusCode).json({msg:err.message})
    }
   return res.status(500).json({msg:'Something Went Wrong'})
}

module.exports = errorHandler