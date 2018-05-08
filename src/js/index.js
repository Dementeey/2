function classElemClassToggle(classElem, classToggle) {
  var elem = document.querySelector(classElem);

  elem.classList.toggle(classToggle);
}

var vid = document.querySelector('.testimonial__video');
var pauseBtn = document.querySelector('.testimonial__video-pause-btn');
var playBtn = document.querySelector('.testimonial__video-play-btn');

function videoPlayBtn() {
  if (vid.paused) {
    vid.play();
    pauseBtn.style.display = 'block'

  }
  if (vid.play()) {
    // playBtn.style.display = 'none'
    playBtn.style.opacity = 0;
    playBtn.style.zIndex = -1;
  }
}

function videoPauseBtn() {
  if (!vid.paused) {
    vid.pause();
    // playBtn.style.display = 'block'
    playBtn.style.opacity = 1;
    playBtn.style.zIndex = 2;
  }

  if (vid.paused) {
    pauseBtn.style.display = 'none'
  }
}
