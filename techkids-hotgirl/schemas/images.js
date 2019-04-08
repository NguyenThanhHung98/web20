const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
    link :{type:String, require:true},
    views:{type:Number, default:0},
    like:{type:Number, default:0},
    description:{type:String},
    title:{type:String, required:true},
    author:{type:mongoose.Types.ObjectId, ref:"User"}
},{
    timestamps:true, //createAt, updateAt
});

module.exports =  model('Image', ImagesSchema)