$(function() {
  $(".header__help-link").click(function() {
    $(".header__help-dropdown").toggle(300);
    $(".header__icon-bars").toggleClass("header__icon-bars-changed");
  });
});

if ($(window).width() < 769) {
  $(".header__icon-bars").toggleClass("header__icon-bars-changed");

  $(".header__btn-menu").click(function() {
    $(".header__icon-bars").toggleClass("header__icon-bars-changed");
    $(".header__help-dropdown").toggle(300);
  });
}


if ($(window).width() < 769) {
  $(".payment__inner-title").text("Узнайте, как оплатить");
  $(".payment__penalties-mobile").css("border-bottom", "1px dotted #0777ba")
  $(".payment__penalties-mobile").text ("Штрафы ГИБДД");
}

$('.toggle').click(function(e) {
  e.preventDefault();
  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});

                