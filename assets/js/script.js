$(document).ready(function () {
  if ($("html").attr("dir") == "rtl") {
    var dir_d = true;
  } else {
    var dir_d = false;
  }
  $(".header-section .open-icon").click(function () {
    $(".header-section .nav-box").fadeIn();
  });
  $(".header-section .nav-box .close-icon").click(function () {
    $(".header-section .nav-box").fadeOut();
  });

  $(".testimonials-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    rtl: dir_d,
    fade: true,
  });
  $(".client-slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    rtl: dir_d,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });

  AOS.init();
});

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
