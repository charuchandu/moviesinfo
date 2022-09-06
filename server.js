const exp=require("express");
const app=exp();
const path=require("path");


app.use(exp.static(path.join(__dirname,'./dist/moviesinfo')));

//importing apis 
const taskApiObj=require("./apis/taskapi");

//redirecting to apis
app.use("/task",taskApiObj);

//err handling
app.use((req,res,next)=>{
    res.send({message:"path not existed"})
})
app.use((err,req,res,next)=>{
    console.log(err);
    res.send({message:"something went wrong!!"})
})

const port=3500;
app.listen(port,()=> console.log("server is running on port",port));