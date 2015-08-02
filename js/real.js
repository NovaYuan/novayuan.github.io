(function (){
  $(".create").click(function () {
    var options = $(".create").data();
    options.content = 'page/' + options.template;
    $.get(options.content, function(response){
      var popup = $(".popup");
      popup.css({display: "block"});
      popup.html(response)
    });
  });
})();

function dismiss(){
    var popup = $(".popup");
    popup.css({display: "none"});
}