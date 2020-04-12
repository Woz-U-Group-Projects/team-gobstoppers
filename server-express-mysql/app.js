var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var models = require('./models'); 

var bidsRouter = require("./routes/index");


app.use("/bids", bidsRouter);

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// add the below
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

models.sequelize.sync().then(function() {
  console.log("DB Sync'd up");
});

module.exports = app;
