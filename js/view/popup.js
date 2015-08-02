var Popup = (function () {
    var Popup = Backbone.View.extend ({
        events: {
           "click .create": "create"
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
        create: function(){
            var options = $(".create").data();
            options.content = 'page/' + options.template;
            $.get(options.content, function(response){
                var popup = $(".popup");
                popup.css({display: "block"});
                popup.html(response);
                console.log("1");
            });
        }
    });
    return Popup;
}());