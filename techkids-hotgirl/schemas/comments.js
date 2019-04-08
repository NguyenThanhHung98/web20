const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    imageId:{type:mongoose.Types.ObjectId, ref:"User"},
    time:{type:Date, default:"1/1/2018"},
    userId:{type:String},
    content:{type:String}
});

module.exports =  model('Comment', CommentsSchema)