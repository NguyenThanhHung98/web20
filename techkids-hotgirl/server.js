const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');

const ImageModel = require('./schemas/images'); // dua model vao trong server.js
const UserModel = require('./schemas/users');
const CommentModel = require('./schemas/comments');


mongoose.connect('mongodb://localhost:27017/techkids',{ useNewUrlParser: true }, (err) => { //tao ket noi mongo DB
	if(err) console.log(err);
	else console.log("Connect to DB success!!");
	ImageModel.find({}, (err,docs) => {
		if(err) console.log(err);
		else console.log(docs);
	})
	UserModel.find({}, (err,docs) => {
		if(err) console.log(err);
		else console.log(docs);
	})
	CommentModel.find({}, (err,docs) => {
		if(err) console.log(err);
		else console.log(docs);
	})
})

const apiRouter = require("./routers/apiRouter.js");

app.use(bodyParser.json({extended: false}));

app.use("/api", apiRouter);

app.listen(6969, (err) => {
	if(err) console.log(err)
	else console.log("Server start!!");
});