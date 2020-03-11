import mongoose, { mongo } from "mongoose"

let Schema = mongo.Schema;

let NotificationModel = new Schema({
    sender : {
        id : String,
        username : String ,
        avatar : String
    },
    receiver : {
        id : String,
        username : String ,
        avatar : String
    },
    type : String,
    content : String ,
    isRead : {type : Boolean , default : false},
    createdAt : {type : Number ,default : Date.now},
});

module.exports = mongoose.model("notification" , NotificationModel);