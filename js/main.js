$(window).scroll(function() {
if ($(this).scrollTop() > 650){
    $('#main-nav').addClass("show");
  }
  else{
    $('#main-nav').removeClass("show");
  }
});
