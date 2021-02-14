"use strict";
(function ($) {
  $(document).ready(function () {
    var menu = $(".header");
    $(window).scroll(function () {
      var header = $(this).scrollTop();
      if (header >= 105) {
        menu.addClass("header-stiky");
        $(".header-top__logo-img").attr(
          "src",
          "../img/icons-png/logo_black.png"
        );
      } else if (header < 150) {
        menu.removeClass("header-stiky");
        $(".header-top__logo-img").attr(
          "src",
          "../img/icons-png/logo_white.png"
        );
      }
    });

    //SLIDER

    $(".banner-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false,
      arrows: false,
      dots: false,
    });


  });
})(jQuery);

$(document).on("click", ".js-open", function () {
  $(this).find(".question__description").slideToggle(300);

  let currentDescription = $(this);

  setTimeout(function () {
    $(currentDescription).toggleClass("open");
  }, 300);
});

$(document).on("click", ".js-open-info", function () {
  $(this).parent().find(".info__list").slideToggle(300);
});

$("body").on("click", ".js-opem-mobile", function () {
  if ($("#checkbox3").prop("checked")) {
    $(".mobile-menu").slideToggle(300);
  }
});

$("body").on("click", ".js-scroll", function () {
  $("#checkbox3").prop("checked", false);
  $(".mobile-menu").hide(300);
});

function offTheTarget(target, callback) {
  $(document).on("mousedown", function (e) {
    if (!$(target).is(e.target) && $(target).has(e.target).length === 0) {
      callback();
    }
  });
}

$("body").on("click", ".js-scroll", function (e) {
  var fixed_offset = 0;
  $("html,body")
    .stop()
    .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

$("body").on("click", ".js-scroll-up", function (e) {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});
