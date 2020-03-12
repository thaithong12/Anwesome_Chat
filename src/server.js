//var express = require("express");
import express from "express";
import connectDB from "./config/ConnectDB";
import configViewEngine from "./config/viewEngine";
let app  = express();

connectDB();

configViewEngine(app);

app.get('/',  (req , res)=>{
   return res.render("master/index");
});
app.get('/login-register',  (req , res)=>{
    return res.render("auth/loginRegister");
 });
app.listen(process.env.port , process.env.hostname , ()=>{
    console.log("Thong dep dai nhat ");
});

