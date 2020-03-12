//var express = require("express");
import express from "express";
import connectDB from "./config/ConnectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
let app  = express();

connectDB();

configViewEngine(app);

initRoutes(app);

app.listen(process.env.port , process.env.hostname , ()=>{
    console.log("Thong dep dai nhat ");
});

