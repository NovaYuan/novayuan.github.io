/**
 * Created by yuan on 2016/3/28.
 */
'use strict';
var ListView = Backbone.View.extend({
    el: '#content',
    events: {
        'click .btn-green': 'edit_clickHandler'
    },
    initialize: function(){
        $("header").show();
        $(this.el).css("marginTop", '0');
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
        var collection = this.collection,
            that = this;
        collection.fetch({
            url: "/list.node",
            success: function(model, options){
                collection.add(options);
                that.getPage();
            }
        });
        console.log(this.collection);
    },
    edit_clickHandler: function(e){
        var id = $(e.currentTarget).data("id");

        console.log(this.collection)
    }
});