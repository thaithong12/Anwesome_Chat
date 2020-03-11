import mongooes from "mongoose"

let Schema = mongooes.Schema;

let ContactSchema = new Schema({
    userId : String , 
    contactId : String , 
    status : {type : Boolean ,default : false},
    createdAt : {type : Number ,default : Date.now},
    deletedAt : {type : Number ,default : null},
    updatedAt : {type : Number ,default : null},
});

module.exports = mongooes.model("contact", ContactSchema);