var BaseView = Backbone.View.extend({
    el: "body",
    events: {
        "loading.tools.modal .create": "addFooter"
    },
    initialize: function(){
        this.render();
    },
    render: function(){
        $(".loading").fadeOut();
    }
});

var Modal = (function(list, listc){
    var alertInfo = function(messages, color){
        var $message = '<div id="create-msg" class="tools-message tools-message-'+ color +'">'+ messages +'</div>';

        if($("#create-msg").length <= 0){
            $("body").append($message);
            $("#create-msg").show();
        }else{
            $("#create-msg").show();
        }

        setTimeout(function(){
            $("#create-msg").hide()
        }, 2000)
    };

    $(".create-btn").unbind("click").bind("click", function(){
        var formData = {
            title: $("input[name=title]").val(),
            content: $("textarea[name=content]").val(),
            tags: $("input[name=tags]").val()
        };

        list.url = '/list/save.node';

        list.save(formData, {
            success: function(model, options){
                alertInfo(options.content, "green");
                listc.unshift(formData);
            },
            error: function(data){
                alertInfo(data, "red")
            }
        });
        $("#create-modal").modal("hide")
    });
});