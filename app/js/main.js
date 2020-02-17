$(function () {

  $(".rate-star").rateYo({
    rating: 4.2,
    starWidth: "12px",
    readOnly: true
  });

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3 

  });

  var mixer = mixitup('.products__inner-box');


});