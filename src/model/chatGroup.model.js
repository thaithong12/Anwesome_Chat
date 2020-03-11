import mongoose, { Mongoose, mongo } from "mongoose"

let Schema = mongoose.Schema;

let ChatGroup = new Schema({
    name : String , 
    userAmount : {type : Number, default : 0 , min : 3 , max : 100},
    messageAmount : {type : Number , default : 0},
    userId : String ,
    members : [
        {userId : String}
    ],
    createdAt : {type : Number ,default : Date.now},
    deletedAt : {type : Number ,default : null},
    updatedAt : {type : Number ,default : null},

});

module.exports = mongoose.model("chat-group", ChatGroup);