let mySwiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 3000,
    diableOnInteraction: false,
  },
  speed: 2000,
});

$(function () {
  $(window).on("load scroll", function () {
    var $header = $(".header");

    // 200以上スクロールしたら処理
    if ($(window).scrollTop() > 600) {
      $header.addClass("sticky", "headerLogoScroll");
    } else {
      $header.removeClass("sticky", "headerLogoScroll");
    }
  });
});

// スクロールするとロゴ画像変更
$(function () {
  $(window).on("load scroll", function () {
    var $header = $(".header");

    // 200以上スクロールしたら処理
    if ($(window).scrollTop() > 600) {
      $(".js-header").addClass("headerLogoScroll");
    } else {
      $(".js-header").removeClass("headerLogoScroll");
    }
  });
});

//ハンバーガーメニュー
(function ($) {
  var $nav = $("#navArea");
  var $btn = $(".toggle_btn");
  var $mask = $("#mask");
  var open = "open"; // class
  // menu open close
  $btn.on("click", function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on("click", function () {
    $nav.removeClass(open);
  });
})(jQuery);

AOS.init({
  delay: 200,
  duration: 500,
  easing: "ease-out",
  anchorPlacement: "top-center",
});

// クラス変更
window.onload = function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

//safari対策
window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
};