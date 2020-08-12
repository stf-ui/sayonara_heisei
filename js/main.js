// gradAnimation
const $gradientStop1 = document.querySelector('#js-bg-grad-1');
const $gradientStop2 = document.querySelector('#js-bg-grad-2');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const val = scrollTop / 10;
  const Color1 = (val) % 360;
  const Color2 = (val + 65) % 360;

  TweenMax.set($gradientStop1, {
    stopColor: 'hsl('+Color1+', 100%, 65%)'
  });

  TweenMax.set($gradientStop2, {
    stopColor: 'hsl('+Color2+', 100%, 65%)'
  });
});

// jQuery
jQuery(function($){
    //波打つアニメーション（PCSP共通）
    jQuery('#waves').wavify({
        height: 100,
        bones: 4,
        amplitude: 40,
        color: '#f0f8ff',
        speed: .25
    });
    // ナビゲーションバー（PCのみ）
    var appear = false;
    var sideAnimate = $('.js-side-animation');
    var pagetop = $('.go-top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        if (appear == false) {
          appear = true;
          sideAnimate.stop().animate({
            'right': '0px'
          }, 500);
        }
      } else {
        if (appear) {
          appear = false;
          sideAnimate.stop().animate({
            'right': '-300px'
          }, 500);
        }
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
    // ページ内検索（PCのみ）
    $('input#search').quicksearch('#contents .songs section');

    // for SmartPhone
    $(window).on('load scroll', function(){
      if ($(window).scrollTop() > 100) {
        $('h1 p').addClass("js-spScroll");
      } else {
        $('h1 p').removeClass("js-spScroll");
      }
    });
});
