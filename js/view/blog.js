var Blog = (function () {
  var Blog = Backbone.View.extend({
    events: {
      "click .blog": 'blog_clickHandler'
    },
    render: function () {
      this.template = Handlebars.compile(this.$(".article-list").remove().html());

      var attr = ["#fe8c84","#9c0","#fc9","#9cf"];
      $(".blog-nav a").each (function(i) {
        $(".blog-nav a").eq(i).css({
          background: function () {
            return attr[Math.floor(i+Math.random())]
          }
        });
      });

      if (this.model){
        for (var i=0 ; i<this.collection.models.length; i++){
          this.$("ul").append(this.template(this.model[i].toJSON()));
        }
      }
      },
    blog_clickHandler: function (event) {
      var options = $(".blog").data();
      options.content = 'page/' + options.template;
      $.get(options.content, _.bind(this.template_complateHandler, this));
    },
    template_complateHandler: function (response) {
      this.template = Handlebars.compile(response);
      this.$(".all-content").html(response);

      this.collection.add({
        "date":"2015.11",
        "title":"人生嘻嘻哈哈",
        "content":"蓝蓝的天上白云飘，我的花儿从中:-笑哈哈哈哈哈哈"
      });
      this.collection.add(
        {
          "date":"2015.11",
          "title":"那些人说",
          "content":"息息相关 嘻嘻哈哈 呵呵你拉拉 白加黑 黑加百 特仑苏 草原 牛"
        });
      this.collection.username = "秋娟";
      this.$(".name").html( this.collection.username);
      this.$(".title").html(this.collection.models[0].attributes.title);
      this.$(".article-content").html(this.collection.models[0].attributes.content);
      this.model = this.collection.models;
      this.render();
    }
  });
  return Blog;
}());