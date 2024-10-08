require('dotenv').config() //Adding .env content to process env
const express = require('express')
const router = require('./routers/rvsp_routes')
const connectDB = require('./database/connect') //Importing method to Initiate DB connection.Returns promise
const errorHandler = require('./middleware/errorHandler') //Importing Error Handler middleware. All errors are forwaded here
const notFound = require('./middleware/notFound') //Importing Middleware to handle unknow API routes
const swaggerUi = require('swagger-ui-express')
const app = express()
const YAML = require('yamljs')

const PORT = process.env.port || 3000 //Take process port(depends on which machine app is running) or 3000

//Order is important!!!
app.use(express.json()) //Middleware for parsing the json request body
app.use(express.static('./ui'))

const swaggerDoxument = YAML.load('./swagger/swagger.yaml')
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDoxument))


app.use('/api/v1/rsvp',router)//Middleware for all defined API routes
app.use(notFound)//Middleware to handle unknow API routes
app.use(errorHandler)//Error Handler middleware. All errors are forwaded here


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI) //Initiate DB connection.Returns promise
        
        console.log('Connect to DB');
        
        app.listen(PORT,()=>{
            console.log(`Listening on port ${PORT}....`);
        })

    } catch (error) {
        console.log('Failed to start Server');
    }
}

start() //Starts with trying to connect DB and then starts server
