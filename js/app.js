$(function () {
  var me = new Me();
    me.set({
      username: '秋娟',
      password: '123456'
    });
  var list = new ListCollection();
    list.set(
      {
        "date":"2012.11",
        "title":"我的天",
        "content":"蓝蓝的天上白云飘，我的花儿从中:-笑.....网易云音乐是一款专注于发现与分享的音乐产品,依托专业音乐人、DJ、好友推荐及社交功能,为用户打造全新的音乐生活。"
      }
    );
  var username = new Username({
      el: '.name',
      collection: me
    });
  var body = new Body({
    collection: me
  });
  var login = new Login({
    el: 'body',
    collection: me
  });
  var blog = new Blog({
    el: 'body',
    collection: list
  });
});