import {validationResult} from "express-validator/check";
import {auth} from "./../services/index";
let getLoginRegister =  (req , res)=>{
    return res.render("auth/master", {
        errors : req.flash('errors'),
        success : req.flash('success')
    });
 }
let postRegister = async (req,res) => {
   
    //console.log(req.body)
    // console.log(validationResult(req).mapped());
    // console.log("----------------");
    let errorArray = [];
    let successArray = [];
    let validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()){
        let errors = Object.values(validationErrors.mapped());
        errors.forEach(item => {
            errorArray.push(item.msg);
        });
        //console.log(errorArray);
        req.flash("errors", errorArray);
        return res.redirect('/login-register')  
    }
    try {
       let createUserStatus = await auth.register(req.body.email , req.body.gender , req.body.gender);
        console.log(req.body);
        successArray.push(createUserStatus);
        req.flash("success", successArray);
        return res.redirect('/login-register') 

    } catch (error) {
        errorArray.push(error);
        req.flash("errors", errorArray);
        return res.redirect('/login-register')  
    }
    

}
 module.exports = {
     getLoginRegister : getLoginRegister,
     postRegister : postRegister
 };