// top bar 捲動固定

$(function() {
    $(window).scroll(function() {
      let w = document.body.clientWidth
      if (w > 428){
        if ($(this).scrollTop() > 100)  {         
          $('.topbarbg').addClass('navFixed'); 
          $('.s_a').css({
            'margin-top':0,
            'height':520,
          //增加的高度就是 原本的高 + padding top + margin top 的總和

          // 因為下滑時，s_a 的 padding top 設成 0 畫面才不會跳動
          // 但是會造成那個區塊上移，才會有按鈕往上的情況
          // 所以原本的 padding top 加回來 + 上面選單的高度，就得加回 s_a 的高度上讓他拉高，靠下的按鈕位置才不會變
          });
        } else {
          $('.topbarbg').removeClass('navFixed');
          $('.s_a').removeAttr('style')
        }
      }else{
        if( w > 375){
          $('.topbarbg').addClass('navFixed'); 
          $('.s_a').css({
            'margin-top':0,
            'height':436,
          });
        }else{
          $('.topbarbg').addClass('navFixed'); 
          $('.s_a').css({
            'margin-top':0,
            'height':363,
          });
        }
      }
    });
  });



// 輪播圖設定
new Splide( '.pic', {
    type: 'loop' ,
    height: '200px',
    perPage: 3,
    autoWidth: true, 
    autoplay: true,
    focus: 'center',
}).mount();

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