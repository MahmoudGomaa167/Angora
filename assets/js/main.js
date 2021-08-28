$(document).ready(function () {
    // Blog Carousel
    $('.opinions-carousel').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        asNavFor: '.image-carousel',
        fade: true,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

    $('.image-carousel').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: false,
        arrows: false,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.opinions-carousel',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });
})