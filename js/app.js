(function () {
    var me = new Me();
    var login = new Login({
        model: me
    });
    var articles = new ArticleCollection();
    articles.set({
        "date":"2015.8",
        "title":"我的天",
        "content":"蓝蓝的天上白云飘，我的花儿从中:-笑"
    });
    var write = new Write({
        collection: articles
    });
    var popup = new Popup({
        collection: articles,
        model: me
    });
    var base = new Base();
}());