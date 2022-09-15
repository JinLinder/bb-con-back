var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
const activity = require('../models/activity');
var timeout = require('connect-timeout');

// get all activities
router.get('/', timeout('10s'), (req, res, next) => {
    console.log("activity")
    // activity.find({})
    // .then(data=>{console.log(data);
    //     res.json(data)
    // })
})

// post new activities
router.post('/add', (req, res, next) => {
    const saveActivity = new activity({
        username:req.body.username,
        actId:req.body.actId,
        title:req.body.title,
        community:req.body.community,
        adress:req.body.adress,
        time:req.body.time,
        info:req.body.info,
        participants:req.body.participants
    })
    saveActivity.save()
})

// get my activities
router.get('/:myAct', (req, res, next)=>{
    activity.find({username: req.params.myAct})
    .then(data=>{console.log(data); res.json(data)})
})

// get single activities
router.get('/item/:actId', (req, res, next)=>{
    activity.find({actId: req.params.actId})
    .then(data=>{console.log(data); res.json(data)})
})

//join activity PUT the participant in single activity
router.put('/item/update/:actId', (req, res, next)=>{
    let updates = req.body
    activity.findOneAndUpdate({actId: req.params.actId}, updates)
    .then(data=>{console.log(data); res.json(data)})
    .catch(err => res.status(400).json("Error: " + err))
})

// delete activity
router.delete('/item/delete/:actId', (req, res, next)=>{
    activity.findOneAndDelete({actId: req.params.actId})
    .then(data=>{console.log(data); res.json(data)})
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router