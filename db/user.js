var sqlite3 = require('sqlite3').verbose();
var userdb = new sqlite3.Database(':memory:');
var articledb = new sqlite3.Database(':memory:');

userdb.serialize(function(){
    userdb.run("create table user (" +
        "username varchar not null unique," +
        "password varchar not null,"+
        "nickname varchar,"+
        "motto varchar,"+
        "id varchar not null,"+
        "primary key(id)"+
        ")");
    var stmt = userdb.prepare("insert into user values('袁秋娟','123456','以西','何向以西','1a')");
    stmt.run();
    stmt.finalize();

    userdb.each("select * from user", function(err,row){
        console.log(row);
    });
});

articledb.serialize(function(){
    articledb.run("create table articles (" +
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
    var stmt = articledb.prepare("insert into articles values('时间','今天是个好日子','today','说说','2015.8.19','null','袁秋娟','122')");
    stmt.run();
    stmt.finalize();

    articledb.each("select * from articles", function(err,row){
        console.log(row);
    });
});