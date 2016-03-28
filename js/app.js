(function () {
    var me = new Me();
    me.set({
        username: 'test',
        password: '1234',
        nickname: '何向以西',
        motto: '走走停停，才能看到最炫的风景'
    });

    var user = new UserInfo({
        model: me
    });

    var list = new List();
    list.set({
        lists: [
            {
                id: 0,
                createDate: Common.getDate("today").data,
                title: 'backbone学习经验',
                tags: [
                    {value: 'backbone'},
                    {value: 'Handlebar'}
                ],
                content: '今天学习backbone+handlebars构建网站，争取今年做出一个网站出来'
            },
            {
                id: 1,
                createDate: Common.getDate("today").data,
                title: 'handlebars学习经验',
                tags: [
                    {value: 'backbone'},
                    {value: 'Handlebar'}
                ],
                content: '今天学习backbone+handlebars构建网站，争取今年做出一个网站出来'
            }
        ]
    });

    var lists = new ListView({
        model: list
    });

    //var login = new Login({
    //    model: me
    //});
    //var articles = new ArticleCollection();
    //articles.set({
    //    "date":"2015.8",
    //    "title":"我的天",
    //    "content":"蓝蓝的天上白云飘，我的花儿从中:-笑"
    //});
    //var write = new Write({
    //    collection: articles
    //});
    //var popup = new Popup({
    //    collection: articles,
    //    model: me
    //});
    //var base = new Base();
}());