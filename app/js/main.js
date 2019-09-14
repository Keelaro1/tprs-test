$(function() {
  $(".header__help-link").click(function() {
    $(".header__help-dropdown").toggle(300);
  });

  $(document).click(function(e) {
    if (e.target.id != ".header__help-link" &&
      $(e.target).parents(".header__help-link").length == 0) {
      $(".header__help-dropdown").hide(300);
    }
  });
});