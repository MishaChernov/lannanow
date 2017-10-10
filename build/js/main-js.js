'use strict'

$('.no-js').removeClass('no-js');

$('.burger').click(function() {
  $(this).toggleClass('burger--close  burger--open');
  $('.main-menu__list').slideToggle();
});

$(function functionName() {
  var header = $(".page-header");
    $(window).scroll(function() {

      var ser = $(".search");
      var headerHeight = header.height();
      var searchHeight = ser.height();
      var some = window.scrollY;

      if (some >= headerHeight - searchHeight) {
        header.addClass("fixed");
      }
      else {
        header.removeClass("fixed");
      }
  });
})
