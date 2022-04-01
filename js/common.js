$(function () {
  let state = false;
  let pos;
  $(".hamburger, .globalMenuSp ul li a").click(function () {
    $(".hamburger").toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".globalMenuSp").addClass("active");
    } else {
      $(".globalMenuSp").removeClass("active");
    }
  });
});

$(function () {
  $(".slider_wrap").slick({
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
