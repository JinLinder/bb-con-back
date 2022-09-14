var express = require('express');
var router = express.Router();
const user = require('../models/user')

router.post('/', function(req, res, next){
    
    user.find({username:req.body.username})
    .then(data => {
        if (data.length < 1) {
          console.log('Wrong username or password.');
          res.status(422).json({ message: `Wrong username or password.` });
        }
      })  
    .catch((err)=> {
        console.log(err);
    });

    user.find({username:req.body.username, password:req.body.password})
    .then(data=>{
        if(data.length>=1) {
            console.log(`User: ${req.body.username} loged in.`);
            res.status(201).json({ message: `User: ${req.body.username} loged in.` })
        }
    })
    .catch((err)=> {
        console.log(err);
    });
})

module.exports = router;