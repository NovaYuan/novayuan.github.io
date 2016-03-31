/**
 * Created by yuan on 2016/3/28.
 */
'use strict';
var ListView = Backbone.View.extend({
    el: '.content',
    initialize: function(){
        this.template = Handlebars.compile($("#article-list-template").html());
        this.render();
    },
    render: function(){
        var data = this.model.toJSON(),
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
    }
});