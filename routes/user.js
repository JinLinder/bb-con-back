var express = require('express');
var router = express.Router();
const user = require('../models/user')

/* GET users listing. */
router.get('/:userProfile', (req, res, next)=> {
  user.find({username:req.params.userProfile})
  .then(result=>res.json(result))
  .catch(err=>console.log(err))

})


module.exports = router;
