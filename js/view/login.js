var Login = (function () {
  var Login = Backbone.View.extend({
    events: {
      'click .close-btn': 'closeBtn_clickHandler',
      'click .login-btn': 'loginBtn_clickHandler'
    },
    closeBtn_clickHandler: function () {
      $(".popup").css({
        display: 'none'
      });
    },
    loginBtn_clickHandler: function () {
      //var id = $('.username').val()
      //  , pwd = $('.password').val();
      //if ((id == null) || (pwd == null) || (id == '') || (pwd == '') ){
      //  $('.id-error').css({
      //    display: 'block'
      //  });
      //  $('.id-error').html("请输入账号和密码");
      //}
      //
      //if (!(/^[a-zA-Z0-9_]{3,16}$/.test(id)) && !(/^[a-zA-Z0-9_]{6,16}$/.test(pwd))) {
      //  $('.id-error').css({
      //    display: 'block'
      //  });
      //  $('.id-error').html("账号或密码格式错误");
      //}

    var me = new Me;
      me.fetch({
        url: '#/me/',
        success: function (model,response) {
          $('.name').html(model.get('username'));
         },
        error: function () {
          $('.id-error').css({
            display: 'block'
          });
          $('.id-error').html("账号或密码错误，请重新输入");
          return false;
        }
      });
    }
  });
  return Login;
}());