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

$(".images-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  autoplay: true,
 });
});