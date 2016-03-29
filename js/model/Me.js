'use strict';
var Me = Backbone.Model.extend({
  url: '/me',
  defaults: {
    username: 'test',
    password: '1234'
  },
  parse: function(res, options){
    console.log(res, options)
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