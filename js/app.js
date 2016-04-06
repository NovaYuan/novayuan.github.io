var App = (function () {
    var me,
        user,
        baseview;

    me = new Me();
    baseview = new BaseView();

    me.url = "/me.node";
    me.fetch({
        success: function(model, options){
            me.set(options);
            user = new UserInfo({
                model: me
            })
        },
        error: function(data){
            console.log(data)
        }
    });
}());