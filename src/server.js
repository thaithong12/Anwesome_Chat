//var express = require("express");
import express from "express";
import connectDB from "./config/ConnectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import configSession from "./config/session";
let app  = express();

connectDB();

// Config Session 
configSession(app);

configViewEngine(app);

// Enable data request 

app.use(bodyParser.urlencoded({extended : true}));

// Enalbe flash message (Thu vien thong bao loi cho nguoi dungh)
app.use(connectFlash());

initRoutes(app);

app.listen(process.env.port , process.env.hostname , ()=>{
    console.log("Thong dep dai nhat ");
});

