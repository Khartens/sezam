$(".sliders_container-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // prevArrow: '<div class="prev"><i class="fa fa-chevron-right"></i></div>',
    // nextArrow: '<div class="next"><i class="fa fa-chevron-left"></i></div>'
    responsive: [
        {
          breakpoint: 1100,
          settings: {
            dots: true,
          }
        },
      ]
});