var App = (function () {
    var me,
        user,
        list,
        lists,
        listc,
        baseview,
        modal;

    me = new Me();
    list = new List();
    listc = new ListCollection();
    baseview = new BaseView();
    modal = new Modal(list, listc);

    me.url = "/me.node";
    listc.url = '/list.node';

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

    listc.fetch({
        success: function(model, options){
            listc.add(options);
            lists = new ListView({
                collection: listc
            });
        },
        error: function(data){
            console.log(data)
        }
    });
}());