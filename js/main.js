var $gradientStop1 = document.querySelector('#js-bg-grad-1');
var $gradientStop2 = document.querySelector('#js-bg-grad-2');

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset;
  var val = scrollTop / 10;
  var hue1 = (val) % 360;
  var hue2 = (val + 65) % 360;
  
  TweenMax.set($gradientStop1, {
    stopColor: 'hsl('+hue1+', 100%, 65%)'
  });

  TweenMax.set($gradientStop2, {
    stopColor: 'hsl('+hue2+', 100%, 65%)'
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
});
