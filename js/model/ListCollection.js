var ListCollection = (function(){
  var Model = Backbone.Model.extend ({
    url: "/list",
    defaults: {
      "date":"2012.11",
      "title":"我的天",
      "content":"蓝蓝的天上白云飘，我的花儿从中:-笑"
    }
  }),
    ListCollection = Backbone.Collection.extend ({
      model: Model,
      parse: function (response) {
        return response;
      }
    });
return ListCollection;
}());