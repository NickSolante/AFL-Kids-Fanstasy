const express = require("express");
const cp = require("cookie-parser");
const bp = require("body-parser");
const mongoose = require("body-parser");
const passport = require("passport");

const app = express();

require("dotenv").config();

const port = process.env.PORT || 3000;
const dbPort = proess.env.DB_Port || 27017;
const dbUrl = process.env.DB_URL || "localhost";
const dbCollection = process.env.DB_COLLECTION || "auth-test";

mongoose.set("useCreateIndex", true);
//fixes an issue with a deprecated default in mongoose.js

mongoose
  .connect(`mongodb://${dbURL}/${dbCollection}`, { useNewParser: true })
  .then(_ => console.log("Connected Successfully to mongoDB");).catch(err => console.err(err););

app.use(passport.initialize());

require('./passport-config')(passport);

app.use(cp());
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());

app.use((req, res, next) => {
    if (req.body) log.info(req.body);
    if (req.params) log.info(req.params);
    if (req.query) log.info(req.query);
    log.info(`Received a ${req.method} request from ${req.ip} for                ${req.url}`);
    next();
});


app.use('/users', require('./routes/user');
//registers our authentication routes with Express.
app.listen(port, err => {
    if (err) console.error(err);
    console.log(`Listening for Requests on port: ${port}`);
});


