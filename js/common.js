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
  const checkBox = [];
  checkBox["kaisei"] = "hello";
  checkBox["yusei"] = "hello2";
  checkBox["daiya"] = "hello3";
  checkBox["daiya"] = "hello4";
  console.log(checkBox);

  var new_check_list = object.key(checkbox).map(function (key) {
    return [String(key), checkbox[key]];
  });

  console.log(new_check_list);
});

$(function () {
  $(".slider_wrap").slick({
    autoplay: true,
    autoplaySpeed: 3000,
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
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
