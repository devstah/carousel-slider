// SplideJS Slider. See full docs at:
// https://splidejs.com/
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('#splide', {
    type         : 'loop',
    perPage      : 1,
    autoplay     : true,
    interval     : 15000, // How long to display each slide
    pauseOnHover : false, // must be false
    pauseOnFocus : false, // must be false
    resetProgress: false
  }).mount();

  var button = document.querySelector('.splide__play-pause');

  if (button) {
    var pausedClass = 'is-paused';

    // Remove the paused class and change the label to "Pause".
    splide.on('autoplay:play', function () {
      button.classList.remove(pausedClass);
      button.textContent = 'Pause';
      button.setAttribute('aria-label', 'Pause Autoplay');
    });

    // Add the paused class and change the label to "Play".
    splide.on('autoplay:pause', function () {
      button.classList.add(pausedClass);
      button.textContent = 'Play';
      button.setAttribute('aria-label', 'Start Autoplay');
    });

    // Toggle play/pause when the button is clicked.
    splide.on('click', function () {
      var flag     = 99;
      var Autoplay = splide.Components.Autoplay;

      if (button.classList.contains(pausedClass)) {
        Autoplay.play(flag);
      } else {
        Autoplay.pause(flag);
      }
    }, button);
  }
});
