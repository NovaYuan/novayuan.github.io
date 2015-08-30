var Login = (function(){
    var Login = Backbone.View.extend({
        el: $("body"),
        events:{
            "click .login-btn": "submit"
        },
        submit: function(){
            var data = {
                username: $(".username").val(),
                password: $(".password").val()
            };
            this.model.save(data, {
                patch: true,
                wait: true,
                success: function(model, response, options){
                    window.location.href = '/'
                },
                error: function(model, response, options){
                    if(response.status == 200){
                        window.location.href = '/'
                    }else{
                        alert("账户或密码不正确")
                    }
                }
            });
            //$.ajax({
            //    url: this.model.url,
            //    dataType: "json",
            //    type: "POST",
            //    data: data,
            //    success: function(){
            //        console.log(data);
            //        window.location.href = "/index"
            //    },
            //    error: function(err){
            //        console.log(err);
            //    }
            //})
        }
    });
    return Login;
}());