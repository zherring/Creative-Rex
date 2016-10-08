/// Sticky Bar
$(window).scroll(function() {
if ($(this).scrollTop() > 650){
    $('#main-nav').addClass("show");
  }
  else{
    $('#main-nav').removeClass("show");
  }
});

/// Smooth Scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
      }, 500);
        return false;
      }
    }
  });
});
