const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

router.get('/getusers',(req,res)=>{
    User.find({})
   .then((data)=>res.json(data))
   .catch(err=>res.status(500).json({msg:`somthing went wrong ${err}`}))
})

router.post('/addusers',(req,res)=>{
    console.log(req,body)
    User.create(req,body)
   .then((data)=>res.json(data))
   .catch(err=>res.status(500).json({msg:`somthing went wrong ${err}`}))
})
router.delete('/deleteuser/:userid',(req,res)=>{
    User.findByIdAndDelete(req,params,userid)
    .then(el=>res.json('user deleted'))
    .catch(err=>res.status(500).json({msg:`somthing went wrong ${err}`}))

})

router.put('/updateuser/:id',(req,res)=>{
    User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json({msg:`somthing went wrong ${err}`}))


})

module.exports = router