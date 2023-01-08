$(document).ready(function () {
  $(".header-section .open-icon").click(function () {
    $(".header-section .nav-box").fadeIn();
  });
  $(".header-section .nav-box .close-icon").click(function () {
    $(".header-section .nav-box").fadeOut();
  });
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
