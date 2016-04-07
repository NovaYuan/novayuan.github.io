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
            $("#create-msg").message();
        }else{
            $("#create-msg").message();
        }

        setTimeout(function(){
            $("#create-msg").hide()
        }, 2000)
    };
    $(".create").on('loading.tools.modal', function(modal) {
        $(".modal-box .footer").empty();
        this.createCancelButton('关闭');
        var buttonAction = this.createActionButton('保存');

        buttonAction.on('click', $.proxy(function() {
            var formData = {
                    title: $("input[name=title]").val(),
                    content: $("textarea[name=content]").val(),
                    tags: $("input[name=tags]").val()
                };

            list.url = '/list/save.node';

            list.save(formData, {
                success: function(model, options){
                    alertInfo(options.content, "green");
                    formData.createDate = Common.stampToDate((new Date()).valueOf(), false, true);
                    console.log(formData.createDate);
                    formData.stars = 0;
                    listc.unshift(formData);
                },
                error: function(data){
                    alertInfo(data, "red")
                }
            });
            this.close();
        }, this));
    });
});