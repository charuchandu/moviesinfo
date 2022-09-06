const exp=require("express");
const taskRouteObj=exp.Router();

taskRouteObj.post("/valid",(req,res)=>{
    var credentials={
        mail:"validlogin@movies.in",
        password:"movies"
    }
    res.send({"data":credentials})
})


module.exports=taskRouteObj;