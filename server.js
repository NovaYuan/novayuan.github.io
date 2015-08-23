//http请求及路由
var http = require('http');
var url = require('url');

function start(route, handle){
    function onRequest(req,res){
        var pathname = url.parse(req.url).pathname;
        console.log(pathname);
        route(handle,pathname);
        res.writeHead(200,{
            "Content-Type": "text/plain"
        });
        res.write("Hello World");
        res.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start;



//var fs = require('fs');
//var path = require('path');
//var express = require('express');
//var bodyParser = require('body-parser');
//var restify = require('restify');
//var sqlite3 = require('sqlite3').verbose();
//var app = express();
//
//var server = restify.createServer();
//var content = new Array();
//
//app.set('port', (process.env.PORT || 3001));
//app.use('/', express.static(path.join(__dirname, '/index.html')));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
//
//var db = new sqlite3.Database('db/halo.db');
//
//function getUserInfo(){
//    db.each('select * from user', function(err, rows){
//        if(!err){
//            console.log(rows);
//            content.push({
//                nickname: rows.nickname,
//                motto: rows.motto
//            });
//            console.log(content)
//        } else {
//            throw err;
//        }
//        db.close();
//    });
//}
//getUserInfo();
//
//app.get('/create', function(req,res){
//    console.log("1");
//});
//
////创建web服务
//http.createServer(function(req,res){
//    var pathname = url.parse(req.url).pathname;
//    console.log("request for" + pathname + "received");
//});

//app.get('/list.json', function(req,res){
//  fs.readFile('list.json', function(err,data){
//    res.setHeader('Cache-Control', 'no-cache');
//    res.json(JSON.parse(data));
//  });
//});
//
//app.post('/list.json', function(req,res){
//  fs.readFile('list.json', function(err,data){
//    var list = JSON.parse(data);
//    list.push(req.body);
//    fs.writeFile('list.json', JSON.stringify(list, null, 4), function(err){
//      res.setHeader('Cache-Control', 'no-cache');
//      res.json(list);
//    })
//  })
//});