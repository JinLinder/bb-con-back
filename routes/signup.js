var express = require('express');
var router = express.Router();
const user = require('../models/user')

//const saveUser = new user({
    //     username:"test2" ,
    //       password:"test" ,
    //       babyAge:"test2",
    //       location:"test2"
    // })
    // saveUser.save()

 router.post('/', function(req, res, next){
    const saveUser= new user({
        username:req.body.username,
        password:req.body.password,
        babyAge:req.body.babyAge,
        location:req.body.location
    })
    saveUser.save()
 })
module.exports = router;