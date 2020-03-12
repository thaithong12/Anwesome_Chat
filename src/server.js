//var express = require("express");
import express from "express";
import ContactModel from "./model/contact.model";
import connectDB from "./config/ConnectDB";
let app  = express();

connectDB();


app.get('/', async (req , res)=>{
    try {
        let item = {
            userId : "1234" , 
            contactId : "2345" , 
        }
        let contact = await ContactModel.createNew(item);
        res.send(contact);
    } catch (error) {
        console.log(error);
    }
    
});
app.listen(process.env.port , process.env.hostname , ()=>{
    console.log("Thong dep dai nhat ");
});

