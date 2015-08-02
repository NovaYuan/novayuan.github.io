var Write = (function () {
    var Write = Backbone.View.extend ({
        initialize: function () {
            list = this.collection.toJSON();

            this.render();
        },
        render: function(){
            $(".title").text(list[0].title);
            $(".content").text(list[0].content);
            $(".date").text(list[0].date);
        }
    });
    return Write;
}());