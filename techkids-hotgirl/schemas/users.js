const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name :{type:String, require:true},
    dob:{type:Date, default:"1/1/2018"},
    password:{type:String, required:true},
    location:{type:String},
    gender:{type:String},
    account:{type:String, required:true, unique:true}
});


module.exports = model('User', UsersSchema)