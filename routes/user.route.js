const express=require('express');
const router=express.Router();
const User= require("../model/user.model");

router.post("/register", async(req,res)=>{
    try{
       const newUser= new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
       });
       if(await User.findOne({email: req.body.email})){
        return res.status(602).send("Same email already exists");
       } 
       const user= await newUser.save();
       console.log(user);
       res.status(201).json(user);

    }catch(err){
        res.status(400).send("Error: "+err);
    }
    res.end();
});

router.get("/login",async(req,res)=>{
    try{
        const user=await User.findOne({
        email:req.body.email,
        password:req.body.password,    
        });
        res.status(200).json(user);
    }catch(err){
        res.status(400).send("Error: "+ err);
    }
    res.end();
});



module.exports = router;
