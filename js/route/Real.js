var Real = (function () {
  var Real = Backbone.Router.extend({
    routes: {
      //"#/login": "login",
      //"#/blog": "blog",
      "#/create": "create"
    },
    //login: function (response) {
    //  this.$el.template(response)
    //},
    //blog: function (response) {
    //  this.$el.template(response)
    //}
    create: function (response){
      this.$el.template(response);
    }
  });
  return Real;
}());