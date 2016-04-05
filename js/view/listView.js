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
        console.log(this.collection);
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
        console.log(model);
        var template = $(this.template({list: [model.toJSON()]}));
        template.attr('id', model.cid);

        this.$el.append(template);
    },
    edit_clickHandler: function(e){
        var id = $(e.currentTarget).data("id");

        //$(this).modal()
    }
});