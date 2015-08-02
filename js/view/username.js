var User = (function () {
    var User = Backbone.View.extend ({
        initialize: function () {
            data = this.collection.toJSON();

            this.render();
        },
        render: function(){
            $(".nickname").text(data[0].nickname);
            $(".motto").text(data[0].motto);
        }
    });
  return User;
}());