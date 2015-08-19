var Popup = (function () {
    var Popup = Backbone.View.extend ({
        el: 'body',
        events: {
           "click .create": "createArticle",
           "click .dismiss": "closeWin"
        } ,
        initialize: function () {
            data = this.collection.toJSON();
            this.render();
        },
        render: function(){
            $(".nickname").text(data[0].nickname);
            $(".motto").text(data[0].motto);
            this.delegateEvents();

            return this;
        },
        createArticle: function(){
            var options = $(".create").data();
            options.content = 'page/' + options.template;
            $.get(options.content, function(response){
                var popup = $(".popup");
                popup.fadeIn();
                popup.html(response);
            });
        },
        closeWin: function(){
            var popup = $(".popup");
            popup.fadeOut();
            $(".create-popup").remove();
        }
    });
    return Popup;
}());