var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
const community=require('../models/community')

//get all posts
router.get('/', (req, res, next)=>{
    community.find({})
    .then(data=>{console.log(data);
        res.json(data)
    });
        
})

// get single post
router.get('/item/:postId', (req, res, next)=>{
    community.find({postId: req.params.postId})
    .then(data=>{console.log(data); res.json(data)})
})

//post new post
router.post('/add', (req, res, next)=>{
    const saveCommunity = new community({
        postId:req.body.postId,
        author:req.body.author,
        title:req.body.title,
        text:req.body.text
    })
    saveCommunity.save()
})

//uppdate comments and likes in post
router.put('/item/update/:postId', (req, res, next)=>{
    let updates = req.body
    console.log(updates)

    community.findOneAndUpdate({postId: req.params.postId}, updates)
    .then(data=>{console.log(data); res.json(data)})
    .catch(err => res.status(400).json("Error: " + err))
})

// delete post
router.delete('/item/delete/:postId', (req, res, next)=>{
    community.findOneAndDelete({postId: req.params.postId})
    .then(data=>{console.log(data); res.json(data)})
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;