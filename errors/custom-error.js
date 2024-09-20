class RSVPApiError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createRSVPApiError = (message,statusCode)=>{
    return new RSVPApiError(message,statusCode)
}

module.exports = {RSVPApiError,createRSVPApiError}