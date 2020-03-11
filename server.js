//var express = require("express");
import express from "express";
let app  = express();

let hostname = "localhost";
let port =  8017;


app.get('/', (req , res)=>{
    res.send("Xin chao day la Hello word");
});
app.listen(port , hostname , ()=>{
    console.log("Thong dep dai nhat ");
});

