'use strict';
var Me = Backbone.Model.extend({
  url: '/',
  defaults: {
    username: 'test',
    password: '1234'
  }
});

//var Me = (function () {
//  var Me = Backbone.Model.extend ({
//    url: '/me',
//    defaults: {
//      username: 'test',
//      password: '1234'
//    }
//  });
//  return Me;
//}());