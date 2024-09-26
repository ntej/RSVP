const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'be5dce0125950f0d0abf9c47cf377b71c5d6cb0d374869306d7a47f750b7ab68',
    baseURL: 'http://localhost:3000',
    clientID: 'IdVY8kAd7TR3A1VZuXvyxQ3KTWX8i5j5',
    issuerBaseURL: 'https://dev-sktv8eidkix3p4r4.us.auth0.com'
};

module.exports = auth(config)