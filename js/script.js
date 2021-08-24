$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__list, .header__links").toggleClass("active btn-click");
    $(".main").toggleClass("disable");
  });
});
