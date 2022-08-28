import express from 'express';
import bodyParser from'body-parser';
import cors from 'cors';
import fs from 'fs' 


function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

const app = express();

app.use(bodyParser.json());
app.use(cors())
let data = []

app.post('/v2x',(req,res)=>{
	data.push(req.body)
  res.send ('ok')
  console.log (data)
});

app.get('/get',(req,res)=>{
	res.send(data);
});



app.listen(process.env.PORT || 3000);
