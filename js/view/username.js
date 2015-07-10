var Username = (function () {
  var Username = Backbone.View.extend ({
    el: $('.name'),
    initialize: function () {
      this.collection.username = this.collection.models[0].attributes.username;

      this.render()
    },
    render: function (){
      this.$el.html("欢迎，"+ this.collection.username);
      return this;
    }
  });
  return Username;
}());