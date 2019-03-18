const mongoose = require('mongoose');

const model = mongoose.model;

const QuestionSchema = require('../schemas/question'); //lay question trong schema

const QuestionModel = model("question", QuestionSchema);

module.exports = QuestionModel;
