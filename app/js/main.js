$(function() {
  $(".header__help-link").click(function() {
    $(".header__help-dropdown").toggle(300);
    $(".header__icon-bars").toggleClass("header__icon-bars-changed");
  });
});

if ($(window).width() < 769) {
  $(".header__icon-bars").removeClass("header__icon-bars-changed");
  $(".header__btn-menu").click(function() {
    $(".header__icon-bars").toggleClass("header__icon-bars-changed");
    $(".header__help-dropdown").toggle(300);
  });
}
