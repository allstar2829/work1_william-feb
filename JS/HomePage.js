// top bar 捲動固定

$(function() {
    $(window).scroll(function() {
      let w = document.body.clientWidth
      if (w > 428){
        if ($(this).scrollTop() > 100)  {         /* 要滑動到選單的距離 */
           $('.topbarbg').addClass('navFixed');   /* 幫選單加上固定效果 */
           $('.top').css('padding-top',64);
        } else {
          $('.topbarbg').removeClass('navFixed'); /* 移除選單固定效果 */
          $('.top').removeAttr('style');
        }
      }else{
          $('.topbarbg').addClass('navFixed');   /* 幫選單加上固定效果 */
          $('.top').css('padding-top',64);
      }
    });
});


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
})