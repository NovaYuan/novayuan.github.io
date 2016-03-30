var BaseView = Backbone.View.extend({
    el: "body",
    events: {
        "loading.tools.modal .create": "addFooter"
    }
});

var Modal = (function(list){
    $(".create").on('loading.tools.modal', function(modal) {
        this.createCancelButton('关闭');
        var buttonAction = this.createActionButton('保存');

        buttonAction.on('click', $.proxy(function() {
            var list = new List(),
                formData = {
                    title: $("input[name=title]").val(),
                    content: $("textarea[name=content]").val(),
                    tags: $("input[name=tags]").val()
                };

            list.url = '/list/save.node';
            list.save(formData, {
                success: function(model, options){
                    console.log(options)
                },
                error: function(data){
                    console.log(data)
                }
            });
            this.modal.close();

        }, this));
    });
});