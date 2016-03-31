var BaseView = Backbone.View.extend({
    el: "body",
    events: {
        "loading.tools.modal .create": "addFooter"
    }
});

var Modal = (function(list){
    var alertInfo = function(messages, color){
        var $message = '<div id="create-msg" class="tools-message tools-message-'+ color +'">'+ messages +'</div>';

        if($("#create-msg").length <= 0){
            $("body").append($message);
            $("#create-msg").message();
        }else{
            $("#create-msg").message();
        }

        setTimeout(function(){
            $("#create-msg").hide()
        }, 2000)
    };
    $(".create").on('loading.tools.modal', function(modal) {
        this.createCancelButton('关闭');
        var buttonAction = this.createActionButton('保存');

        buttonAction.on('click', $.proxy(function() {
            var saveList = new List(),
                formData = {
                    title: $("input[name=title]").val(),
                    content: $("textarea[name=content]").val(),
                    tags: $("input[name=tags]").val()
                };

            saveList.url = '/list/save.node';

            saveList.save(formData, {
                success: function(model, options){
                    alertInfo(options.content, "green");
                },
                error: function(data){
                    alertInfo(data, "red")
                }
            });
            this.close();
        }, this));
    });
});