'use strict'

$('.no-js').removeClass('no-js');

$('.burger').click(function() {
  $(this).toggleClass('burger--close  burger--open');
  $('.main-menu__list').slideToggle();
});
