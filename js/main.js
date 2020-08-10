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

// wavifyAnimation
jQuery(function($){
    // コード
    jQuery('#waves').wavify({
        height: 100,
        bones: 4,
        amplitude: 40,
        color: '#f0f8ff',
        speed: .25
    });
    jQuery('#menu_link').click(function(){
      jQuery('.icon_link_tab').addClass('open');
      jQuery('.fa-bars').css('display','none');
    });
    jQuery('.close_btn').click(function(){
      jQuery('.icon_link_tab').removeClass('open');
      jQuery('.fa-bars').css('display','block');
    });
});

// for SmartPhone
$(window).on('load scroll', function(){
  if ($(window).scrollTop() > 200) {
    $('h1 p').addClass("js-scroll");
   } else {
    $('h1 p').removeClass("js-scroll");
   }
});
