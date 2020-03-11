import mongoose from "mongoose"

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    username : String,
    gender : {type : String , default : "male"},
    phone : {type : String , default : null},
    address : {type : String , default : null},
    avatar : {type : String , default : "avatar-default.jpg"},
    role : { type : String , default : "user"},
    local : {
        email : {type : String , trim : true},
        password : {type : String},
        isActive : { type : Boolean , default : false},
        veryfyToken : String
    },
    facebook : {
        uid : String ,
        token : String , 
        email : {type : String , trim : true},
    },
    google : {
        uid : String ,
        token : String , 
        email : {type : String , trim : true},
    },
    createdAt : {type : Number ,default : Date.now},
    deletedAt : {type : Number ,default : null},
    updatedAt : {type : Number ,default : null},
});

module.exports = mongoose.model("user", UserSchema);