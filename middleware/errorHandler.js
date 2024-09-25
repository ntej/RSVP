const {RSVPApiError} = require('../errors/custom-error')

const errorHandler = (err,req,res,next)=>{
    if(err instanceof RSVPApiError){
       return res.status(err.statusCode).json({msg:err.message})
    }
    console.log(err);
    return res.status(500).json({msg:err.message})
}

module.exports = errorHandler