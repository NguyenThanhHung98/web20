const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    content : {type:String, unique:true, require:true, default: 'Question'}, //require: khong de trong; default: gia tri mac dinh
    yes : {type:Number, default:0},
    no : {type:Number, default:0}
});

module.exports = QuestionSchema;