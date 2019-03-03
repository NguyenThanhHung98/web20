const fs = require("fs");

const path = require("path");

const express = require("express");

const app = express();

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html");
})

for(let k=13;k<=20;k++){
    let str = '/web'+k;
    let str1= "../homework3/data"+str+".json";
    app.get(str,function(req,res){
        var li='';
        var data=fs.readFileSync(path.resolve(__dirname,str1));
        var dataArray=JSON.parse(data);
        for(var i=0;i<dataArray.length;i++){
            li+="<li>"+dataArray[i]+"</li>"; 
        }
        res.send("<ul>"+li+"</ul>");
    });
}
app.listen(6969, function(err){
    if(err) console.log(err);
    else console.log("server start success");
})
// http://localhost:6969

