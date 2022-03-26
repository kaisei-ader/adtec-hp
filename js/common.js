$(function () {
  $(".slider_wrap").slick({
    autoplay: true, // 自動再生を設定
    autoplaySpeed: 3000, // スライド切り替えの時間を設定
    dots: true,
    prevArrow:
      '<img src="images/product-allow-left.png" class="slide-arrow prev-arrow">',
    nextArrow:
      '<img src="images/product-allow-right.png" class="slide-arrow next-arrow">',
    slidesToShow: 2,
    slidesToScroll: 2,
    dotsClass: "slick-dots",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
