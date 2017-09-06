const express = require('express');
var app = express();
const fs = require('fs');
const port = process.env.PORT || 8000;
app.set('view engine', 'ejs');

app.use(function(req, res, next){
  var date = new Date().toString();
  var log = `${date}: ${req.method} ${req.url}`;      //middleware
  console.log(log);
  fs.appendFileSync('logFile.log',log + '\n');
  next();
});

app.use(express.static('public'));


app.get('/', function(req, res){
  var obj = {
    Name: 'Nishant Gore',
    Age: 19,
    Place: 'Pune'
  };
  res.send(obj);
});

app.get('/ejs', function(req, res){
  res.render('tempejs',{
    obj: {
      Name: 'Nishant',
      Age: 19,
      Place: 'Pune'
    }
  });
});

app.get('/projects',function(req, res){
  res.render('projects');
})

app.listen(port, function(){
  console.log(`The server is running on port ${port}`);
})
