/**
 * Created by yuan on 2016/4/6.
 */
'use strict';
var Single = Backbone.View.extend({
    el: ".content",
    initialize: function(){
        this.getPage();
    },
    render: function(){
        var data = this.model.toJSON()[0],
            lists;

        data.createDate = Common.stampToDate(parseInt(data.createDate), false, true);
        data.modifyDate = Common.stampToDate(parseInt(data.createDate), false, true);
        lists = data;

        this.$el.html(this.template(lists));
    },
    getPage: function(){
        var that = this;

        $.get("/page/listview.hbs", function(response){
            that.template = Handlebars.compile($(response).html());
            that.render();
        })
    }
});