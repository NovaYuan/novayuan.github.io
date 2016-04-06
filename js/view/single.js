/**
 * Created by yuan on 2016/4/6.
 */
'use strict';
var Single = Backbone.View.extend({
    el: ".content",
    initialize: function(){
        this.template = Handlebars.compile($("#article-view-template").html());
        this.render()
    },
    render: function(){
        var data = this.model.toJSON()[0],
            lists;

        data.createDate = Common.stampToDate(parseInt(data.createDate), false, true);
        data.modifyDate = Common.stampToDate(parseInt(data.createDate), false, true);
        //$.each(data, function(i, o){
        //    console.log(o.createDate);
        //    if(o.createDate){
        //        o.createDate = Common.stampToDate(parseInt(o.createDate), false, true)
        //    }
        //    if(o.modifyDate){
        //        o.modifyDate = Common.stampToDate(parseInt(o.createDate), false, true)
        //    }
        //});

        lists = data;

        this.$el.html(this.template(lists));
    }
});