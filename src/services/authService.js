import userModel from "./../model/userModel";
import bcrypt from "bcrypt";
import uuidv4 from "uuid/v4";
import { reject } from "bluebird";
import {transError , transSuccess} from "./../../lang/vi";

let saltRount = 7 ;
let register =  (email , gender , password) => {
    return new Promise(async (resovle , reject) => {
        let salt = bcrypt.genSaltSync(saltRount);
        let userByEmail = await userModel.findByEmail(email);
        if(userByEmail){
            if(userByEmail.deleteAt !=null){
                return reject(transError.account_in_delete);
            }
            if(!userByEmail.isActived){
                return reject(transError.account_in_active);
            }
            return reject(transError.account_in_use);
        }
        let userItem = {
            username : email.split("@")[0],
            gender : gender,
            local : {
                email : email,
                password : bcrypt.hashSync(password,salt),
                verifyToken : uuidv4()
            }
        };
        let user = await userModel.createNew(userItem); 
        resovle(transSuccess.user_created(user.local.email));
    })
      
};

module.exports = {
    register : register
}