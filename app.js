const express = require('express');
const router = require('./routes/router');
const mongodb = require('./config/mongoConfig');
const app = express();
require('dotenv').config()

app.use(express.json());

app.use('/', router);

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
   mongodb.main()
    console.log(`server is listen at port: ${PORT}`)
})