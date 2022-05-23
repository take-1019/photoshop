let mySwiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 3000,
    diableOnInteraction: false,
  },
  speed: 2000,
});

// スクロールするとロゴの色変更
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".mv").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-header").addClass("headerColorScroll");
    } else {
      $(".js-header").removeClass("headerColorScroll");
    }
  });
});

$(function() {
(window).on('scroll', function () {
　if (400 < jQuery(this).scrollTop()) {
　　jQuery('.js-header').addClass('headerColorScroll');
　} else {
　　jQuery('.js-header').removeClass('headerColorScroll');
　}
});
});