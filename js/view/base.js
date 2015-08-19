var Base = (function(){
    var Base = Backbone.View.extend({
        initialize: function(){
            if (document.readyState == "loading") {
                $(".loading").fadeOut();
                $("header").css({display:"block"});
                $(".writings").css({display:"block"});
            }
        }
    });
    return Base;
}());