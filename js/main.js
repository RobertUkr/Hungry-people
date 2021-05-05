$(function(){
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });
  
  $('.menu__btn').on('click', function () {
    $('.menu__item').toggleClass('menu__item--active')
    
  });
});