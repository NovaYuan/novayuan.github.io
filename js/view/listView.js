/**
 * Created by yuan on 2016/3/28.
 */
'use strict';
var ListView = Backbone.View.extend({
    el: '.content',
    events: {
        'click .btn-green': 'edit_clickHandler'
    },
    initialize: function(){
        this.getPage();
        this.collection.on("add", this.collection_addHandler, this);
    },
    render: function(){
        var data = this.collection.toJSON(),
            lists = {};

        $.each(data, function(i, o){
            if(o.createDate){
                o.createDate = Common.stampToDate(parseInt(o.createDate), false, true)
            }
            if(o.modifyDate){
                o.modifyDate = Common.stampToDate(parseInt(o.createDate), false, true)
            }
        });

        lists = {
            lists: data
        };

        this.$el.html(this.template(lists));
        return this;
    },
    getPage: function(){
        var that = this;
        $.get("/page/list.hbs", function(response){
            that.template = Handlebars.compile($(response).html());
            that.render();
        })
    },
    collection_addHandler: function(model){
        //var template = this.template(model.toJSON());

        //this.$el.prepend($(template)); //无效，不知道怎么局部刷新，好奇怪
        //location.reload(true);
        this.getPage()
    },
    edit_clickHandler: function(e){
        var id = $(e.currentTarget).data("id");

        console.log(this.collection)
    }
});