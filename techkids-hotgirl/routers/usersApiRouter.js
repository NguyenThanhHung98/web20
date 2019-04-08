const express = require("express");

const Router = express.Router;

const usersApiRouter = Router();

const UserModel = require("../schemas/users")

//Create
usersApiRouter.post("/",(res,req) =>{
    const {name,dob,password,location,gender,account} = req.body;
    UserModel.create(
        {name,dob,password,location,gender,account},(err,imageScreated) => {
        if(err) res.send({success:0,err});
        else res.send({success:1, data:imageScreated})
    });
})

//Read
usersApiRouter.get("/",(req,res) =>{
    UserModel.find({},(err,data) => {
        if(err) console.log(err);
        else res.send(data);
    })
})

//Read one
usersApiRouter.get("/:id",(res,req) =>{
    const {id} = req.params;
    UserModel.findOne({_id:id},{},(err,data) => {
        if(err) console.log(err);
        else res.send(data);
    })
})

//Update
usersApiRouter.put("/:id",(req,res)=>{
    const {id} = req.params;
    userModel.findOneAndUpdate({_id:id},{},(err,data)=>{
        if(err) console.log(err)
        else console.log(data)
    })
})


//Delete
usersApiRouter.delete("/:id",(res,req) =>{
    const {id} = req.params;
    UserModel.findOneAndDelete({_id:id},{},(err,data)=>{
        if(err) console.log(err)
        else console.log(data)
    })
})

module.exports = usersApiRouter;