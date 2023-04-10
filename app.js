var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require("./dbconnector/connection");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.post('/main/:machineid',(req,res)=>{

  let machineid=req.params.machineid
  console.log(machineid)
const id = 1;
console.log(req.body.IR1)
console.log(req.body.IR2)
console.log(req.body.temperature);
const data = [[req.body.IR1, req.body.IR2, req.body.temperature,req.params.machineid]];
const sql = "INSERT INTO sensordata(ir1,ir2,tempreature,name) VALUES ?";
db.query(sql,[data],(err,result)=>{
      if(err)
      {
            console.log(err)
      }
      else{
            console.log("inserted")
      }

})
res.status(200).send("HI")
})



app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
