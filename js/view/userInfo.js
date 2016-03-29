/**
 * Created by yuan on 2016/3/28.
 */
'use strict';
var UserInfo = Backbone.View.extend({
    el: '.portrait',
    initialize: function(){
        this.template = Handlebars.compile($("#user-info").html());
        console.log(this.collection);
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
    }
});