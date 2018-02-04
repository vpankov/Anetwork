$(document).ready(function () {
  $('#fullpage').fullpage(
    {
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage', 'ninthPage'],
      menu: '#scrollMenu',
      onLeave: function(index, nextIndex){
        var scrollMenuElement = $('.scroll-menu');
        if(nextIndex !== 1) {
          scrollMenuElement.addClass( 'vision' )
        } else {
          scrollMenuElement.removeClass( 'vision' )
        }
      }
    }
  );
  $('.home-page__phone-center').hover(function(e) {
    $(this).addClass('home-page__phone-center--hovered');
    $('.home-page__watch-right').addClass('home-page__watch-right--shifted');
  }, function(e) {
    $(this).removeClass('home-page__phone-center--hovered');
    $('.home-page__watch-right').removeClass('home-page__watch-right--shifted');
  })
});
