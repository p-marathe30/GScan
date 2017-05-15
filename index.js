var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname+"/public"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//app.set('port',(process.env.PORT||5000));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/public/index.html')
})

app.get('/video',function(req,res){
  res.sendFile(__dirname+'/public/index.html')
})


app.listen('3000',function(){
  console.log("all eyes at 3000");
})
