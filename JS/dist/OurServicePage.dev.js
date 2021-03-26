"use strict";

// top bar 捲動固定
$(function () {
  $(window).scroll(function () {
    var w = document.body.clientWidth;

    if (w > 428) {
      if ($(this).scrollTop() > 100) {
        $('.topbarbg').addClass('navFixed');
        $('.title').css({
          'margin-top': 0,
          'height': 650
        });
      } else {
        $('.topbarbg').removeClass('navFixed');
        $('.title').removeAttr('style');
      }
    } else {
      if (w > 375) {
        $('.topbarbg').addClass('navFixed');
        $('.title').css({
          'margin-top': 0,
          'height': 395
        });
      } else {
        $('.topbarbg').addClass('navFixed');
        $('.title').css({
          'margin-top': 0,
          'height': 330
        });
      }
    }
  });
}); // 文字動畫設定

AOS.init(); // 選單滑動效果

$(function () {
  $(".rwd_menu_btn, .btn_close").click(function () {
    $("#menu").slideToggle(".-offmenu");
  });
});
$(function () {
  $(".menu_pd_list_btn").click(function () {
    $(".menu_pd_list_item").slideToggle(".-show");
  });
});