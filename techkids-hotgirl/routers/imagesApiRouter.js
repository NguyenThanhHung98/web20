const express = require("express");

const Router = express.Router;

const imagesApiRouter = Router();

const ImageModel = require("../schemas/images");

//Create
imagesApiRouter.post("/",(res,req) =>{
    const {link , title, author, description} = req.body;
    ImageModel.create(
        {link , title, author, description},(err,imageScreated) => {
        if(err) res.send({success:0,err});
        else res.send({success:1, data:imageScreated})
    });
})

//Read
imagesApiRouter.get("/",(req,res) =>{
    ImageModel.find({},(err,data) => {
        if(err) console.log(err);
        else res.send(data);
    })
})

//Read one
imagesApiRouter.get("/:id",(res,req) =>{
    const {id} = req.params;
    ImageModel.findOne({_id:id},{},(err,data) => {
        if(err) console.log(err);
        else res.send(data);
    })
})

//Update
imagesApiRouter.put("/:id",(req,res)=>{
    const {id} = req.params;
    ImageModel.findOneAndUpdate({_id:id},{},(err,data)=>{
        if(err) console.log(err)
        else console.log(data)
    })
})


//Delete
imagesApiRouter.delete("/:id",(res,req) =>{
    const {id} = req.params;
    ImageModel.findOneAndDelete({_id:id},{},(err,data)=>{
        if(err) console.log(err)
        else console.log(data)
    })
})

module.exports = imagesApiRouter;

