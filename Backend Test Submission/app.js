require('dotenv').config();

const express = require('express');
const app = express();

// requirements
const bodyParser = require("body-parser")
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// database mongo
const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/boiler")
    .then(()=> console.log("connected to mongo"))
    .catch((e)=> console.log(`mongo error at : ${e}`))

// middleware cors options

const { storeURL } = require('./controllers/urlController');
app.get('/storeurl', storeURL);


const port = process.env.PORT || 3004;
app.listen(port,()=>{
    console.log(`running fine on ${port}`);
})

module.exports = app;