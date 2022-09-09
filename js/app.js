// preloder js start
document.body.onload = function () {
	setTimeout(function () {
		let preloader = document.getElementById('page-preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 3000);
}
// preloder js end

// menu js start
$(Window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling> 100){
    $(".navbar-light").addClass("bg-color")
  }else{
    $(".navbar-light").removeClass("bg-color")
  }
})

$(".scroll-icon i").click(function(){
  $("html,body").animate({
    scrollTop: 0,
  },1000)
})

$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling>100){
    $(".scroll-icon i").fadeIn(500)
  }
  else{
    (scrolling>100)
      $(".scroll-icon i").fadeOut(500)
    }
})
// menu js end

// portfolio part mixited js
var mixer = mixitup('.mixit-item');

// expart slick part start

$('.expart-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    }
  ]
});

//   experience part slick js
$('.experience-main').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
responsive: [
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
    }
  },
]
});

  // aos js
  AOS.init();

