$(function () {
  $(".firstview").bgSwitcher({
    images: [
      "images/background1.jpg",
      "images/background2.jpg",
      "images/background3.jpg",
      "images/background4.jpg",
      "images/background5.jpg"
    ],
    interval: 5000,
    loop: true
  });

  $(window).scroll(function () {
    $(".container").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200){
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });


$(".images-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  autoplay: true,
    responsive: [
    {
      breakpoint: 1024,   // 1024px以下
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,    // 768px以下
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,    // 480px以下
      settings: {
        slidesToShow: 1
      }
    }
  ]
 });
});