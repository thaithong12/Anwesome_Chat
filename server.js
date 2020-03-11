var express = require("express");
var app  = express();

var hostname = "localhost";
var port =  8017;


app.get('/', (req , res)=>{
    res.send("Xin chao day la Hello word");
});
app.listen(port , hostname , ()=>{
    console.log("Thong dep dai nhat ");
});

