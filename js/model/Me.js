var Accounts = (function () {
  var Me = Backbone.Model.extend ({
    url: '/me/',
    defaults: {
      username: 'test',
      password: '1234'
    }
  })
  , Accounts = Backbone.Collection.extend ({
    model: Me,
    parse: function (response) {
      return response;
    }
  });
  return Accounts;
}());