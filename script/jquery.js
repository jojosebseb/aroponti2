$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top +50
        }, 300);
        return false;
      }
    }
  });
});

$('.language-handle').on('click', function(){
  $('.language-drop').toggleClass('active');
})

$('.mobile-handle').on('click', function(){
  $(this).toggleClass('active');
  $('.navigation').toggleClass('active');
})
