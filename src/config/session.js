import session from "express-session";
import connectMongo from "connect-mongo";
// Config Session for Appp

let mongoStore = connectMongo(session);

let sessionStore = new mongoStore({
    url : `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    autoRemove : "native", // het han session tu xoa trong Db 
    autoReconnect : true
})


let configSession = (app) => {
    app.use(session({
        key : "express.sid",
        secret : "mySecret",
        resave : true,
        saveUninitialized : false,
        cookie : {
            maxAge : 1000*60*60*24  // 1 ngay 
        },
        store : sessionStore
    }))
};

module.exports = configSession;