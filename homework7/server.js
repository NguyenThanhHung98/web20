const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');

const QuestionModel = require('./models/question'); // dua model vao trong server.js

mongoose.connect('mongodb://localhost:27017/web20-quyetde',{ useNewUrlParser: true }, (err) => { //tao ket noi mongo DB
	if(err) console.log(err);
	else console.log("Connect to DB success!!");
	QuestionModel.find({}, (err,docs) => {
		if(err) console.log(err);
		else console.log(docs);
	})
})

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/home.html");
});

app.get("/randomquestion", (req, res) => {
	let questionList;
	QuestionModel.find().exec(function(err,question){
		if(err) console.log(err);
		else questionList = question;
		let randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
		res.send(randomQuestion);
	})
});

app.get("/ask", (req, res) => {
	res.sendFile(__dirname + "/views/ask.html");
});

app.put("/editquestion", (req, res) => {
	const question = req.body;
	let questionId = question._id;
	QuestionModel.updateOne({_id : questionId},{
		$set:{
			yes : Number(question.yes),
			no : Number(question.no),
		}
	},function(err,modify){
		if(err) console.log(err);
		else console.log(modify);
	})

	// const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	// const question = req.body;
	// questionList[question.id] = question;
	// fs.writeFileSync("./questions.json", JSON.stringify(questionList));
});

app.post("/addquestion", (req, res) => {
	const questionContent = req.body;
	QuestionModel.create({ content: questionContent }, (err, questionCreated) => { //dua cau hoi len database
		if (err) console.log(err);
		else console.log(questionCreated);
	})
	res.redirect("/ask");
	// const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	// const question = {
	// 	content: req.body.question,
	// 	yes: 0,
	// 	no: 0,
	// 	id: questionList.length,
	// };
	// questionList.push(question);
	// fs.writeFileSync("./questions.json", JSON.stringify(questionList));
	// res.redirect("/ask");
});

app.get("/vote/:questionId/yes", (req, res) => {
	const questionId = req.params.questionId;
	QuestionModel.findOne({_id:questionId},(err,question) => {
		if(err) console.log(err);
		else{ 
			//console.log(question);
			QuestionModel.updateOne({_id:questionId},{yes:question.yes+1},{no:question.no}, (err,docs) => {
				//if(err) console.log(err);
				//else console.log(docs);
				res.redirect(`/question/${questionId}`);
			})
		}
		
	})
	

	// const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	// const questionId = req.params.questionId;
	// questionList[questionId].yes = Number(questionList[questionId].yes) + 1;
	// fs.writeFileSync("./questions.json", JSON.stringify(questionList));
	// res.redirect(`/question/${questionId}`);
});

app.get("/vote/:questionId/no", (req, res) => {
	const questionId = req.params.questionId;
	QuestionModel.findOne({_id:questionId},(err,question) => {
		if(err) console.log(err);
		else{ 
			console.log(question);
			QuestionModel.updateOne({_id:questionId},{no:question.no+1},{yes:question.yes}, (err,docs) => {
				if(err) console.log(err);
				else console.log(docs);
				res.redirect(`/question/${questionId}`);
			})
		}
	})


	// const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	// const questionId = req.params.questionId;
	// questionList[questionId].no = Number(questionList[questionId].no) + 1;
	// fs.writeFileSync("./questions.json", JSON.stringify(questionList));
	// res.redirect(`/question/${questionId}`);
});

app.get("/question/:questionId" , (req,res) => {
	res.sendFile(__dirname + "/views/votes.html"); //su dung param
})

app.get("/detail/:questionId" , (req,res) => {
	const questionId = req.params.questionId;
    QuestionModel.findOne({_id:questionId}, (err, docs) => {
        if(err) console.log(err)
        else res.send(docs);
        
    })

	// const questionId = req.params.questionId;
	// const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	// const question = questionList[questionId];
	// res.send(question);
})

app.listen(6969, (err) => {
	if(err) console.log(err)
	else console.log("Server start!!");
});