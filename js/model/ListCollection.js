var ArticleCollection = (function(){
    var Model = Backbone.Model.extend ({
        url: "/list",
        //defaults: {
        //    "date":"2015.8",
        //    "title":"我的天",
        //    "content":"蓝蓝的天上白云飘，我的花儿从中:-笑"
        //}
    }),
    ArticleCollection = Backbone.Collection.extend ({
        model: Model,
        parse: function (response) {
            return response;
        }
    });
    return ArticleCollection;
}());