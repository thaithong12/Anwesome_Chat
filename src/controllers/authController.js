import {validationResult} from "express-validator/check";

let getLoginRegister =  (req , res)=>{
    return res.render("auth/master");
 }
let postRegister = (req,res) => {
   
    //console.log(req.body)
    // console.log(validationResult(req).mapped());
    // console.log("----------------");
    let errorArray = [];
    let validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()){
        let errors = Object.values(validationErrors.mapped());
        errors.forEach(item => {
            errorArray.push(item.msg);
        });
        console.log(errorArray);
          
    }
    console.log(req.body);

}
 module.exports = {
     getLoginRegister : getLoginRegister,
     postRegister : postRegister
 };