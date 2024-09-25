//Generates Access token to READ, WRITE, UPDATE and DELETE RVSP
const axios = require("axios");
require('dotenv').config({path: '../.env'})

const options = {
  method: 'POST',
  url: process.env.ISSUER_AUTH_END_POINT,
  headers: { 'Content-Type': 'application/json' },
  data: {
    client_id: process.env.CRUD_CLIENT_ID,
    client_secret: process.env.CRUD_CLIENT_SECRET,
    audience: process.env.API_IDENTIFIER,
    grant_type: process.env.GRANT_TYPE
  }
};

axios(options)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
