const express=require("express");
const router = express.Router();
const List=require("../model/todo.model");


router.post("/add",async(req,res)=>{
    try{
        const newList=new List({
            text:req.body.text,
            user:req.body.user,
        });
        const list= await newList.save();
        console.log(list);
        res.status(201).json(list);
    }catch(err){
        res.status(400).send("Error"+err);
    }
    res.end();
})

router.get("/all",async(req,res)=>{
    try{
        const list=await List.find({
            user:req.body.user,
        });
        console.log(list);
        res.status(200).json(list);
    }catch(err){
        res.status(400).send("Error"+err);
    }
    res.end();
})

router.patch("/:id",async(req,res)=>{
    try{
        const updatedList=await List.findByIdAndUpdate(
            req.params.id,
            {
            text:req.body.text,
            status:req.body.status,
        },
        {new:true}
    );
    res.status(200).json(updatedList);
    }catch(error){
        res.status(400).send("Error:"+error);
    }
});


  router.delete("/:id",async(req,res)=>{
    try{
      const deletedList=await List.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedList);
    }catch(error){
    res.status(400).send("Error: "+error);
    }
});

module.exports=router;