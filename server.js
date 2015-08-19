var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3001));
app.use('/', express.static(path.join(__dirname, 'novayuan.github.io')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/list.json', function(req,res){
  fs.readFile('list.json', function(err,data){
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/list.json', function(req,res){
  fs.readFile('list.json', function(err,data){
    var list = JSON.parse(data);
    list.push(req.body);
    fs.writeFile('list.json', JSON.stringify(list, null, 4), function(err){
      res.setHeader('Cache-Control', 'no-cache');
      res.json(list);
    })
  })
});

app.listen(app.get('port'), function(){
  console.log('Server started:'+app.get('port') + '/');
});