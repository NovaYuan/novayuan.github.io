var Login = (function(){
    var Login = Backbone.View.extend({
        events:{
            "submit .login-btn": "submit"
        },
        submit: function(){
            var username = $(".username").val()
                , password = $(".password").val();
            this.model.save();
            //$.ajax({
            //    url: url,
            //    dataType: "json",
            //    type: "POST"
            //})
        }
    });
    return Login;
}());