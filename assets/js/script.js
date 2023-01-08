$(document).ready(function () {
  $(".header-section .open-icon").click(function () {
    $(".header-section .nav-box").fadeIn();
  });
  $(".header-section .nav-box .close-icon").click(function () {
    $(".header-section .nav-box").fadeOut();
  });
});
