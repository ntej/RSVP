const {auth} = require('express-oauth2-jwt-bearer')
const { createRSVPApiError } = require("../errors/custom-error");
require('dotenv').config()

const checkJwt = auth({
    audience: process.env.API_IDENTIFIER,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
})

const checkDeleteScope = (req,res,next)=>{
    const requiredScope = process.env.DELETE_SCOPE
    const suppliedScopes = req.auth.payload.scope.split(' ') 
    const hasrequiredScope =  suppliedScopes.includes(requiredScope)

    if(hasrequiredScope){
        return next();
    }
       next(createRSVPApiError('Missing Delete Scope',401))
}

const checkReadScope = (req,res,next)=>{
    const requiredScope = process.env.READ_SCOPE
    const suppliedScopes = req.auth.payload.scope.split(' ') 
    const hasrequiredScope =  suppliedScopes.includes(requiredScope)

    if(hasrequiredScope){
        return next();
    }
       next(createRSVPApiError('Missing Read Scope',401))
}

const checkWriteScope = (req,res,next)=>{
    const requiredScope = process.env.WRITE_SCOPE
    const suppliedScopes = req.auth.payload.scope.split(' ') 
    const hasrequiredScope =  suppliedScopes.includes(requiredScope)

    if(hasrequiredScope){
        return next();
    }
       next(createRSVPApiError('Missing Write Scope',401))
}

const checkUpdateScope = (req,res,next)=>{
    const requiredScope = process.env.UPDATE_SCOPE
    const suppliedScopes = req.auth.payload.scope.split(' ') 
    const hasrequiredScope =  suppliedScopes.includes(requiredScope)

    if(hasrequiredScope){
        return next();
    }
       next(createRSVPApiError('Missing Update Scope',401))
}

module.exports = {checkJwt,checkDeleteScope,checkReadScope,checkWriteScope,checkUpdateScope}