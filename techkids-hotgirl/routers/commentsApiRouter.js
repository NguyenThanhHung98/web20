const express = require("express");

const Router = express.Router;

const commentsApiRouter = Router();

const CommentModel = require("../schemas/comments")

//Create
commentsApiRouter.post("/",(res,req) =>{
    const {imageId, time, userId, content} = req.body;
    UserModel.create(
        {imageId, time, userId, content},(err,imageScreated) => {
        if(err) res.send({success:0,err});
        else res.send({success:1, data:imageScreated})
    });
})

//Read
commentsApiRouter.get("/",(req,res) =>{
    CommentModel.find({},(err,data) => {
        if(err) console.log(err);
        else res.send(data);
    })
})

//Read one
commentsApiRouter.get("/:id",(res,req) =>{
    const {id} = req.params;
    CommentModel.findOne({_id:id},{},(err,data) => {
        if(err) console.log(err);
        else res.send(data);
    })
})

//Update
commentsApiRouter.put("/:id",(req,res)=>{
    const {id} = req.params;
    CommentModel.findOneAndUpdate({_id:id},{},(err,data)=>{
        if(err) console.log(err)
        else console.log(data)
    })
})


//Delete
commentsApiRouter.delete("/:id",(res,req) =>{
    const {id} = req.params;
    CommentModel.findOneAndDelete({_id:id},{},(err,data)=>{
        if(err) console.log(err)
        else console.log(data)
    })
})

module.exports = commentsApiRouter;

