//http请求及路由
var http = require("http"),
    url  = require("url"),
    path = require("path"),
    fs   = require("fs");

http.createServer(function (req, res) {
    var pathname = __dirname + url.parse(req.url).pathname;
    if (path.extname(pathname) == "") {
        pathname += "/";
    }
    if (pathname.charAt(pathname.length - 1) == "/") {
        pathname += "login.html";
    }

    fs.exists(pathname,function(exists){
        if(exists){
            switch (path.extname(pathname)){
                case ".html":
                    res.writeHead(200,{"Content-Type":"text/html"});
                    break;
                case ".js":
                    res.writeHead(200,{"Content-Type":"text/javascript"});
                    break;
                case ".css":
                    res.writeHead(200, {"Content-Type": "text/css"});
                    break;
                case ".gif":
                    res.writeHead(200, {"Content-Type": "image/gif"});
                    break;
                case ".jpg":
                    res.writeHead(200, {"Content-Type": "image/jpeg"});
                    break;
                case ".png":
                    res.writeHead(200, {"Content-Type": "image/png"});
                    break;
                default:
                    res.writeHead(200, {"Content-Type": "application/octet-stream"});
            }

            fs.readFile(pathname, function(err,data){
                res.end(data);
            })
        }else{
            res.writeHead(404,{
                "Content-Type":"text/html"
            });
            res.end("<h1>404 Not Found</h1>");
        }
    });
}).listen(8080,"127.0.0.1");
console.log("Server running at http://127.0.0.1:8080");

//设置路由
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.get('/index', function(req, res){
    fs.readFile('index.html', function(err,data){
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    });
});

//创建数据库连接
//var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database("db/halo.db");
//db.run("insert into user values('袁秋娟1','1234567','以西1','何向以西1','1b')");
//db.close();
//db.each("select * from user", function(err,row){
//    console.log(row);
//});
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