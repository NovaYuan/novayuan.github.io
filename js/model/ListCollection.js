var ArticleCollection = (function(){
    var Model = Backbone.Model.extend ({
        url: "/list"
    }),
    ArticleCollection = Backbone.Collection.extend ({
        model: Model,
        parse: function (response) {
            return response;
        }
    });
    return ArticleCollection;
}());