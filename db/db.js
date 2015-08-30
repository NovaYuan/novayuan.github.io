//用sqlite3创建数据库
var sqlite3 = require('sqlite3').verbose();
var haloWorldDb = new sqlite3.Database('halo.db');

haloWorldDb.serialize(function(){
    haloWorldDb.run("create table user (" +
        "username varchar not null unique," +
        "password varchar not null,"+
        "nickname varchar,"+
        "motto varchar,"+
        "id varchar not null,"+
        "primary key(id)"+
        ")");
    var stmt = haloWorldDb.prepare("insert into user values('以西','123456','以西','何向以西','1a')");
    stmt.run();
    stmt.finalize();

    haloWorldDb.each("select * from user", function(err,row){
        console.log(row);
    });
});

haloWorldDb.serialize(function(){
    haloWorldDb.run("create table articles (" +
        "title varchar not null," +
        "content varchar not null,"+
        "tag varchar,"+
        "type varchar,"+
        "createTime date,"+
        "modifyTime date,"+
        "author varchar,"+
        "id varchar not null,"+
        "primary key(id)"+
        " foreign key(author) references user(nickname)"+
        ")");
    var stmt = haloWorldDb.prepare("insert into articles values('时间','今天是个好日子','today','说说','2015.8.19','null','以西','122')");
    stmt.run();
    stmt.finalize();

    haloWorldDb.each("select * from articles", function(err,row){
        console.log(row);
    });
});