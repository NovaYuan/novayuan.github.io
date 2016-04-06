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
        this.template = Handlebars.compile($("#article-list-template").html());
        this.collection.on("add", this.collection_addHandler, this);

        this.render();
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
    collection_addHandler: function(model){
        var template = this.template(model.toJSON());

        this.$el.append($(template)); //无效，不知道怎么局部刷新，好奇怪
        location.reload(true); 
    },
    edit_clickHandler: function(e){
        var id = $(e.currentTarget).data("id");

        console.log(this.collection)
    }
});