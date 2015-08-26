var Login = (function(){
    var Login = Backbone.Model.extend({
        url: '/login',
        events:{
            "keyup .username": "username",
            "click .login-btn": "submit"
        },
        submit: function(){
            $.ajax({

            })
        }
    });
    return Login;
}());