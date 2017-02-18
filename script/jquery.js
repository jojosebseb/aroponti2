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


var winWidth = $(window).width();

if (winWidth > 1000) {
  console.log('a');
  $('#welcome').on('mousemove', function(event){
    var Xm = event.pageX;
    var Ym = event.pageY;
    Z = (-Xm+Ym)/7;
    $('.welcome-kelp').css({
      transform: 'rotateZ('+Z/50+'deg)',
      transition: 'none'
    })
    $('.white-wave').css({
      transform: 'rotateZ('+-Z/50+'deg)',
      transition: 'none'
    })
    $('.blue-wave').css({
      transform: 'rotateZ('+Z/50+'deg)',
      transition: 'none'
    })
    $('.welcome-weed').css({
      transform: 'rotateZ('+-Z/50+'deg)',
      transition: 'none'
    })

  })
}
