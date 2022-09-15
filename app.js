require('dotenv').config()

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
//const user = require('./models/user')

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');
var signupRouter=require('./routes/signup');
var activityRouter = require('./routes/activity')
var communityRouter = require('./routes/community')
var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(function(req, res, next) {
    res.setTimeout(30);
    next();
  });

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/activity', activityRouter);
app.use('/community', communityRouter)

//Connect DATABASE
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // useFindAndModify: false,
}, function(err) {
    if(!err) {
        console.log("Database connected...");
    } else {
        console.log(err);
    }
})




module.exports = app;
