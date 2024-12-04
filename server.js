const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
const PORT=5000;

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://swastikagupta2305:<db_password>@cluster3.nvogc.mongodb.net/?retryWrites=true&w=majority&appName=cluster3",
{}
)
.then(()=>{
    console.log("Connected to the database");
});

//Routes

const userRoute=require("./routes/user.route");
const todoRoute=require("./routes/todo.route");
app.use("/user",userRoute);
app.use("/todo",todoRoute);


app.get("/",(req,res)=>{
    res.send("HelloWorld");
    res.end();
});

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})