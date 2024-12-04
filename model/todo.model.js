const mongoose=require('mongoose');
const ToDoSchema=mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:"Not Done",
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
});

module.exports=mongoose.model("ToDo" , ToDoSchema);