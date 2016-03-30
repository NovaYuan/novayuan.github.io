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
        var lists = {
            lists: this.model.toJSON()
        };

        this.$el.html(this.template(lists));
    }
});