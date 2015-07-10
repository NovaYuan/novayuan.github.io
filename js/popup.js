$(".dismiss").click(function () {
  var popup = $(".popup");
  popup.animate({
    display: "none",
    opacity: '0.5'
  },3000)
});