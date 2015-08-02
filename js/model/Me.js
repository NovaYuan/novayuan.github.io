var Accounts = (function () {
  var Model = Backbone.Model.extend ({
    url: '/me/',
    defaults: {
      username: 'qiujuan',
      password: '123456'
    }
  })
  , Accounts = Backbone.Collection.extend ({
    model: Model,
    parse: function (response) {
      return response;
    }
  });
  return Accounts;
}());