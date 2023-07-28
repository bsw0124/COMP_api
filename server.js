const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json())

app.post('/comp',async (req,res) => {
    const jsonData = req.body;
    jsonData.clubMembers.push("백승우");

    fs.writeFile('./comp.json',JSON.stringify(jsonData, null ,2), err => {

        if(err){
            console.log('파일 저장중 오류 발생',err);
        }
        else{
            console.log('성공');
            res.send(200);
        }
    })
})

app.get('/comp', async (req,res) => {
    fs.readFile('./comp.json','utf-8',(err,data) => {
        if(err){
            console.log(err);
        }
        else{
            jsonData = JSON.parse(data);
            res.send(jsonData);
            
        }
    })
})


const server = app.listen(8080, () => {
console.log('server is working : local 8080');
});
