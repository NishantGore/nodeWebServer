const express = require('express');
var app = express();
const fs = require('fs');

app.set('view engine', 'ejs');

app.use(function(req, res, next){
  var date = new Date().toString();
  var log = `${date}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFileSync('logFile.log',log + '\n');
  next();
});

// app.use(function(req, res, next){
//   res.send("Site under maintainence");
// });

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
})

app.listen(8000, function(){
  console.log('Server is on port 8000');
})
