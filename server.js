/**
 * Created by yuan on 2016/3/29.
 */
'use strict';

var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    mysql = require('mysql'),
    express = require("express"),
    bodyParser = require('body-parser'),
    app = express(),
    connection;

//创建数据库连接
connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'mysql1202',
    database: 'halo_world',
    port: 3306
});

connection.connect(function(err){
    if(err){
        console.error('error connecting:' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

//创建服务器
http.createServer( function (request, response) {
    var pathname = url.parse(request.url).pathname,
        dataUrl = request.url;

    if(pathname == "/"){
        pathname = "/index.html"
    }

    if(pathname == "/me.node"){
        connection.query(
            'select * from me',
            function selectCb(err, results, fields){
                if(err){
                    res.status(404).end(err);
                    throw err;
                }

                if(results){
                    response.setHeader('Cache-Control', 'no-cache');
                    response.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
                    response.end(JSON.stringify(results));
                }
            }
        );
    }else if(pathname == "/list.node"){
        connection.query(
            'select * from articles',
            function selectCb(err, results, fields){
                if(err){
                    res.status(404).end(err);
                    throw err;
                }

                if(results){
                    response.setHeader('Cache-Control', 'no-cache');
                    response.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
                    response.end(JSON.stringify(results));
                }
            }
        );
    }else if(pathname == "/list/save.node"){
        console.log(request.method);
        console.log(request);
        request.on("data", function(data){
            console.log("服务器接收到的数据：　"+ data);

            console.log(data.title, data.content, data.tags)
        });
        request.on("end", function(){
            console.log('客户端请求数据全部接收完毕');
        });
        response.end();
        //connection.query(
        //    'insert into articles(title, content, tags) value()'
        //)
    }else{
        fs.readFile(pathname.substr(1), "binary", function (err, data) {
            if (err) {
                response.writeHead(404, {'Content-Type': 'text/html'});
            }else{
                if(pathname.indexOf('.css') != -1){
                    response.setHeader('Content-Type', 'text/css')
                }else if(pathname.indexOf('.woff') != -1) {
                    response.setHeader('Content-Type', 'text/woff')
                } else{
                    response.writeHead(200, {'Content-Type': 'text/html'});
                }
                response.write(data, "binary");
            }
            response.end();
        });
    }

}).listen(8080);