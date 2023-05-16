const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const linkRoute = require("./routes/linkRoute");
const path = require("path")

mongoose.connect('mongodb://localhost:27017/links' , {useNewUrlParser: true, useUnifiedTopology: true, family: 4,});

let db = mongoose.connection;

db.on("error" , ()=>{console.log("Houve um Error")});
db.once("open" , ()=>{console.log("Banco carregado")});

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "templates") )

app.use("/" , linkRoute);

app.listen(port, ()=>{console.log("Server running!")})