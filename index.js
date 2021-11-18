const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()
app.use(morgan('tiny'));
dotenv.config()
app.use(express.json())
const PORT = process.env.PORT
const db = require('./DB/db.js')
// import
const userRouter = require('./routers/routes/user')

app.use(userRouter)


app.listen(PORT , ()=>{
    console.log('working');
})