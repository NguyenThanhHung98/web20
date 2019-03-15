const express = require('express');

const app = express();

const fs = require('fs');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.get('/ask',(req,res) => {
    res.sendFile(__dirname + "/views/ask.html");
});

app.put('/editquestion', (req,res) => {
    const questionList = JSON.parse(fs.readFileSync("questions.json","utf-8"));
    const question = req.body;
    questionList[question.id]=question;
    fs.writeFile('questions.json',JSON.stringify(questionList),(err)=>{
        if(err) console.log(err);
        else console.log("success");
    });
})

app.get('/',(req,res) => {
    // const answerList = JSON.parse(fs.readFileSync("questions.json","utf-8"));
    // const answer = answerList[Math.floor(Math.random()*answerList.length)];
    // res.send(
    // '<nav>'+
    //     '<a href="/ask">' + 'Hỏi nhanh' + '</a>'+ ' ' + 
    //     '<a href="/">' + 'Đáp gọn' + '</a>' +
    // '</nav>' +
    // '<h1 class="text-center" id="text-question" style="margin-left: 175px">' + answer + '</h1>' + 
    // '<button type="submit" name="but_yesno" value="no" id="but_1" style="background-color: red;margin-left: 100px">' + 'Sai / Không / Trái' + '</button>' + 
    // '<button type="submit" name="but_yesno" value="yes" id="but_2" style="background-color: blue;margin-left: 200px">' + 'Đúng / Có / Phải' + '</button>' + 
    // '<br>' + '<br>' +
    // '<button type="submit" name="but_yesno" value="ketquavote" id="but_3" style="margin-left: 225px">' + 'Kết quả vote' + '</button>' + 
    // '<button type="submit" name="but_yesno" value="cauhoikhac" id="but_4">' + 'Câu hỏi khác' + '</button>'
    // );

    res.sendFile(__dirname + "/views/home.html");

})

app.get('/randomquestion', (req,res) => {
    const questionList = JSON.parse(fs.readFileSync("questions.json","utf-8"));
    const randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
    res.send(randomQuestion);
})

app.post('/addquestion', (req,res) =>{
    const questionList =JSON.parse(fs.readFileSync('questions.json','utf-8')); //chuyển từ text sang dạng của obj
    const question = {
        content:req.body.question,
        yes:0,
        no:0,
        id:questionList.length
    };
    questionList.push(question);
    fs.writeFileSync('questions.json',JSON.stringify(questionList),(err) => { // chuyển từ dạng obj sang text
        if(err) console.log(err);
        else console.log("success");
    })
    res.redirect('/ask');
})

app.listen(6969, (err) => {
    if(err) console.log(err);
    else console.log('server start success');
})