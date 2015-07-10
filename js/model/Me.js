var Me = (function () {
  var Model = Backbone.Model.extend ({
    url: '/me/',
    defaults: {
      username: 'qiujuan',
      password: '123456'
    }
  })
  , Me = Backbone.Collection.extend ({
    model: Model,
    parse: function (response) {
      return response;
    }
  });
  return Me;
}());