/**
 * Created by yuan on 2016/3/28.
 */
'use strict';
var Real = Backbone.Router.extend({
  $body: ".content",
  routes: {
    "": "list",
    "list/view/:id": "view"
  },
  list: function(){
    var list,
        listv,
        listc,
        modal;

    list = new List();
    listc = new ListCollection();
    modal = new Modal(list, listc);

    listc.fetch({
      url: '/list.node',
      success: function(model, options){
        listc.add(options);
        listv = new ListView({
          collection: listc
        });
      },
      error: function(data){
        console.log(data)
      }
    });
  },
  view: function(id){
    var params = {
          id: parseInt(id)
        };

    var view = new View();
    view.fetch({
      url: "/list/view.node",
      data: params,
      success: function(model, response, options){
        view.set(model);
        var singleView = new Single({
          model: view
        });
      },
      error: function(model, response, options){
        console.log(model);
        console.log(response);
        console.log(options);
      }
    })
  }
});

var real = new Real();
Backbone.history.start();