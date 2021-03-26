// top bar 捲動固定
$(function() {
  $(window).scroll(function() {
    let w = document.body.clientWidth
    if (w > 428){
      if ($(this).scrollTop() > 100)  {         
        $('.topbarbg').addClass('navFixed'); 
        $('.c_mk_area').css({
          'margin-top':0,
          'height':670,
        });
      } else {
        $('.topbarbg').removeClass('navFixed');
        $('.c_mk_area').removeAttr('style')
      }
    }else{
      if( w > 375){
        $('.topbarbg').addClass('navFixed'); 
        $('.c_mk_area').css({
          'margin-top':0,
          'height':478,
        });
      }else{
        $('.topbarbg').addClass('navFixed'); 
        $('.c_mk_area').css({
          'margin-top':0,
          'height':396,
        });
      }
    }
  });
});

// 文字動畫設定
AOS.init();

// 選單滑動效果

$(function(){
  $(".rwd_menu_btn, .btn_close").click(function(){
    $("#menu").slideToggle(".-offmenu");
  });
});

$(function(){
  $(".menu_pd_list_btn").click(function(){
    $(".menu_pd_list_item").slideToggle(".-show");
  });
});