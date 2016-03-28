//http请求及路由
var url  = require("url"),
    path = require("path"),
    fs   = require("fs"),
    express = require("express"),
    bodyParser = require('body-parser'),
    app = express();
    http = require("http").createServer(app).listen(8080,"127.0.0.1");

//创建数据库连接
//var sqlite3 = require('sqlite3').verbose(),
//    db = new sqlite3.Database("db/halo.db");
//
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

//首页数据
//app.get('/', function(req,res){
//    db.all()
//});

//登录页面验证
app.post('/me', function(req,res){
    db.all("select * from user where username = ? and password=?",req.body.username, req.body.password,function(err, rows){
        if(rows){
            rows.forEach(function(row){
                console.log(row.username == req.body.username && row.password == req.body.password);
                if(row.username == req.body.username && row.password == req.body.password){
                    console.log("ok");
                    res.setHeader('Cache-Control', 'no-cache');
                    res.send("验证成功");
                    return;
                }else{
                    console.log("用户或密码不正确");
                    res.send("用户或密码不正确");
                    return;
                }
            });
            db.close();
        }else{
            res.setHeader('Cache-Control', 'no-cache');
            res.send("用户或密码不正确");
            return;
        }
    });
});

app.use (function (req, res) {
    var proUrl = url.parse(req.url).pathname;
    var pathname = __dirname + proUrl;
    if (path.extname(pathname) == "") {
        pathname += "/";
    }
    if (pathname.charAt(pathname.length - 1) == "/") {
        pathname += "index.html";
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
            });
        }else{
            res.writeHead(404,{
                "Content-Type":"text/html"
            });
            res.end("<h1>404 Not Found</h1>");
        }
    });
});
console.log("Your Server is started @port 8080");

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