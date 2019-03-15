const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/home.html");
})

app.get("/randomquestion", (req, res) => {
	let questionList = JSON.parse(fs.readFileSync("./question.json", "utf-8"));
	res.send(questionList[Math.floor(Math.random() * questionList.length)]);
});
app.get("/ask", (req, res) => {
	res.sendFile(__dirname + "/views/ask.html");
});
app.post("/addquestion", (req, res) => {
	let questionList = JSON.parse(fs.readFileSync("./question.json", "utf-8"));
	const questionData = {
		content: req.body.question,
		yes: 0,
		no: 0,
		id: questionList.length
	};
	questionList.push(questionData);

	fs.writeFile("question.json", JSON.stringify(questionList), err => {
		if(err) console.log(err);
		else console.log("Success");
	});

	res.redirect("/ask");
});

app.put("/questionvote", (req, res) => {
	let questionList = JSON.parse(fs.readFileSync("./question.json", "utf-8"));
	let question = req.body;
	questionList[question.id] = question;
	fs.writeFile("question.json", JSON.stringify(questionList), err => {
		if(err) console.log(err);
		else console.log("Write file success");
	});
});

app.listen(6969, (err) => {
	if(err) console.log(err);
	else console.log("Success Server");
});