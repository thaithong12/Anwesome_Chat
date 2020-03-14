//var express = require("express");
import express from "express";
import connectDB from "./config/ConnectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import bodyParser from "body-parser";

let app  = express();

connectDB();

configViewEngine(app);

// Enable data request 

app.use(bodyParser.urlencoded({extended : true}));

initRoutes(app);

app.listen(process.env.port , process.env.hostname , ()=>{
    console.log("Thong dep dai nhat ");
});

