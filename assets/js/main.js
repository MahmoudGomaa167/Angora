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

  // Show White navbar on scroll
  const whiteNav = function () {
    $(window).scroll(function () {
      let windowScrollTop = $(window).scrollTop();

      if (windowScrollTop >= 10) {
        $('.scroll-nav').css('top', '0');
        $('.main-nav').css('opacity', '0');
      } else {
        $('.scroll-nav').css('top', '-100px');
        $('.main-nav').css('opacity', 1);
      }
    })
  }

  // Scroll to section on links click
  const sectionScroll = function () {
    let navLinks = document.querySelectorAll('.list__link');

    navLinks.forEach(function (link) {
      let href = $(link).attr('href');
      if (href !== '#') {
        let sectionOffset = Math.ceil($(href).offset().top);

        $(link).click(function () {
          $('body, html').animate({
            scrollTop: sectionOffset + 10
          }, 1500);
        });
      }

    });
  }

  // Add active class to links on scroll
  const addActiveScroll = function () {
    let navLinks = document.querySelectorAll('.list__link');

    $(window).scroll(function () {
      let windowScrollTop = $(window).scrollTop();

      navLinks.forEach(function (link) {
        let href = $(link).attr('href');
        if (href !== '#') {
          let sectionOffset = Math.ceil($(href).offset().top);

          if (windowScrollTop >= sectionOffset - 50) {
            $(link).addClass('active');
            $(link).parent().siblings().children().removeClass('active');
          }
        }

      })
    })
  }

  // Click on go up button and scroll smoothly to home
  const goUP = function () {
    let homeOffset = $('#home').offset().top;
    $('.goup').click(function () {
      $('body, html').animate({
        scrollTop: homeOffset
      }, 1500);
    })
  }

  // Click on mouse and scroll smoothly to About section
  const mouse = function () {
    let aboutOffset = Math.ceil($('#about').offset().top);

    $('.mouse').click(function () {
      $('body, html').animate({
        scrollTop: aboutOffset + 10
      }, 1500);
    });

    // opacity of the mouse
    $(window).scroll(function () {
      let windowScrollTop = $(window).scrollTop() / 600;
      let mouseOpacity = 1 - windowScrollTop

      if (mouseOpacity <= 0) {
        mouseOpacity = 0;
        $('.mouse').css('opacity', mouseOpacity);
      } else {
        $('.mouse').css('opacity', mouseOpacity);
      }
    });

  }

  // Click on Gears icon to show options box
  const options = function () {
    $('.icon-cogs').click(function () {
      let optioBoxWidth = $('.color-box').innerWidth();
      let boxLeft = $('.color-box').css('left');

      if (boxLeft === '0px') {
        $('.color-box').animate({
          left: `-${optioBoxWidth}px`
        }, 1000)
      } else {
        $('.color-box').animate({
          left: '0px'
        }, 1000)
      }
    })
  }

  // Change Color of Website based on color list
  const changeColor = function () {
    let colorList = document.querySelectorAll('.color-item');

    colorList.forEach(function (color) {
      let dataColor = $(color).attr('data-color');

      $(color).click(function () {
        $('.change-color, .icon').css('color', `${dataColor}`);
        $('.goup').css('background-color', `${dataColor}`);
        $('.custom-button').css('background-color', dataColor);
        $('.progress').css('background-color', dataColor);


        $('.list__link.active').css('color',dataColor);
        let navLinks = document.querySelectorAll('.list__link');
        $(window).scroll(function(){
          navLinks.forEach(function(link){
            if($(link).hasClass('active')){
              $(link).css('color', dataColor)
            }else{
              $(link).hasClass('scroll') ? $(link).css('color', '#282828') : $(link).css('color', '#fff')
            }
          })
        });

        navLinks.forEach(function(link){
          $(link).hover(function(){
            $(this).css('color', dataColor)
          }, function(){
            if($(link).hasClass('active')){
              $(this).css('color', dataColor)
            }else{
              $(this).hasClass('scroll') ? $(this).css('color', '#282828') : $(this).css('color', '#fff')
            }
          })
        })


        $('.mouse').hover(function () {
          $(this).css('border', `1px solid ${dataColor}`)
          $(this).children('a').children('.wheel').css('background-color', dataColor);
        }, function () {
          $(this).css('border', `1px solid #fff`)
          $(this).children('a').children('.wheel').css('background-color', '#fff');
        })

        // Team Section Change color
        $('.overlay').css('background-color', `${dataColor}`);
        $('.team-item').hover(function () {
          $(this).children('.team-title').css('color', `${dataColor}`)
        }, function () {
          $(this).children('.team-title').css('color', '#282828')
        }
        )

        // Services change colorof titles on hover
        $('.services-item').hover(function () {
          $(this).children('.services-info').children('h5').css('color', `${dataColor}`)
        }, function () {
          $(this).children('.services-info').children('h5').css('color', `#282828`)
        })

        // contact change color
        $('.contact-info').hover(function () {
          $(this).children('.info-brief').children('h3').css('color', `${dataColor}`)
        }, function () {
          $(this).children('.info-brief').children('h3').css('color', `#282828`)
        });

        $('.contact-info a').hover(function () {
          $(this).css('color', `${dataColor}`)
        }, function () {
          $(this).css('color', '#666666')
        });

        // Change input and textarea border color
        $('input, textarea').focus(function () {
          $(this).css('border', `2px solid ${dataColor}`)
        })
        $('input, textarea').blur(function () {
          $(this).css('border', `2px solid #eee`)
        });

        // Change footer links and tags colors
        $('.footer-link').hover(function () {
          $(this).css('color', `${dataColor}`)
        }, function () {
          $(this).css('color', '#b0b0b0')
        });

        $('.footer-tag').hover(function () {
          $(this).css({
            'color': dataColor,
            'border-color': dataColor
          });
        }, function () {
          $(this).css({
            'color': '#b0b0b0',
            'border-color': '#b0b0b0'
          });
        });

        $('.social-icon').hover(function () {
          $(this).css('color', `${dataColor}`)
        }, function () {
          $(this).css('color', '#fff')
        });

        $('.scroll-social-icon').hover(function () {
          $(this).css('color', `${dataColor}`)
        }, function () {
          $(this).css('color', '#282828')
        });

      })
    })

  }

  // Progress on scroll to about section
  const progress = function () {
    let progressElements = document.querySelectorAll('.progress');

    progressElements.forEach(function (progress) {
      let dataWidth = $(progress).attr('data-progress');
      let aboutOffset = $('#about').offset().top;
      let teamOffset = $('#team').offset().top;

      $(window).scroll(function () {
        let windowScrollTop = $(window).scrollTop();

        if (windowScrollTop >= aboutOffset - 100 && windowScrollTop <= teamOffset - 50) {
          $(progress).css({
            width: `${dataWidth}%`
          })
        } else {
          $(progress).css({
            width: '0'
          });
        }

      })
    })
  }

  // Home Slider
  const slider = function(){
    const imagesList = document.querySelectorAll('.image-slide');
    let imageSrcArr = [];
    let introHeaders = document.querySelectorAll('.intro-header');
    let introHeadersArr = [];
    let index = 0;
  
    // Headers Array List
    introHeaders.forEach(function(header){
      let content = $(header).html();
      introHeadersArr.push(content);
    });
  
    // Images Array List
   imagesList.forEach(function(image){
     let imageSrc = $(image).attr('src')
     imageSrcArr.push(imageSrc);
   });

   // Add active class on headers
   function addActive(){
     $(introHeaders[index]).addClass('active-content');
     $(introHeaders[index]).siblings().removeClass('active-content')
   }
  
   // Run slider 
   function run(){
     index++;
     changeImage();
     addActive();
   }
  
   // change Image Function
   function changeImage(){
    if(index > imageSrcArr.length - 1){
      index = 0;
    }else if(index < 0){
      index = imageSrcArr.length - 1;
    }
    $('header').css({backgroundImage: `url(${imageSrcArr[index]})`});
    $('.intro-header').html(introHeadersArr[index]);
    addActive();
   }
  
   // Change Image every 5 seconds
   let interval = setInterval(run, 5000);
  
   // Reset Interval Function on click on next and prev buttons
   function resetInterval(){
     clearInterval(interval);
     interval = setInterval(run, 5000);
     addActive();
   }
  
   // Next Function
  function next(){
    resetInterval();
    index++;
    changeImage();
  }

  // Prev Function
  function prev(){
    resetInterval();
    index--;
    changeImage();
  }
  
  $('.next').click(next);
  
  $('.prev').click(prev);
  }
  


  
  

  

  whiteNav();
  sectionScroll();
  addActiveScroll();
  goUP();
  mouse();
  options();
  changeColor();
  progress();
  slider();
})