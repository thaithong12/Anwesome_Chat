import express from "express";
import authController from "./../controllers/authController"
import homeController from "./../controllers/homeController"
import {authValid} from "./../validation/index";

let router = express.Router();

// Init Routes @pram app from express module

let initRoutes = (app) => {
    router.get('/',  homeController);
     router.get('/login-register',  authController.getLoginRegister);
     router.post('/register',authValid.register,  authController.postRegister);

      return app.use("/", router);
}
module.exports = initRoutes;