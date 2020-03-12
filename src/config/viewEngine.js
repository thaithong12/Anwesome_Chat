import express from "express";
import expressEjsExtend from "express-ejs-extend";
import path from "path";
// var app = express(); 
 let congifViewEngine = (app) =>{
    app.use(express.static('./src/public'))
    app.engine('ejs', expressEjsExtend); // add this line
    app.set('view engine', 'ejs');
    app.set('views', './src/views');
 }
 module.exports = congifViewEngine;

 