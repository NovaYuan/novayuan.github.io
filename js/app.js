(function () {
    var me,
        user,
        list,
        lists;

    me = new Me();
    list = new List();

    me.url = "/me.node";
    list.url = '/list.node';

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

    list.fetch({
        success: function(model, options){
            list.set(options);
            lists = new ListView({
                model: list
            });
        },
        error: function(data){
            console.log(data)
        }
    });
}());