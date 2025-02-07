//INSTALLING AND CALLING MODULES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./db_schema/scheme.js');

//DATABASE CONNECTION 
mongoose.connect("mongodb+srv://user200:temp12345@cluster0.wcy5m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Database connected");
}).catch((error)=>{
    console.log(error);
});


//HOME PAGE
app.get('/',(req, res)=>{
    res.send('entered enemy zone');
});


//SERVER LISTENING
app.listen(3000, ()=>{
    console.log('Server is listening');
});