const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const cors = require('cors')
const app = express();
app.use(cors())
dotenv.config()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended:false}))

app.use('/', require('./routes/dillerRouter'))


const PORT = process.env.PORT || 3303;
app.listen(PORT, ()=> console.log(`server running on ${PORT}`))