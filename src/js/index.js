// function toggleClass() {
//   var burger = document.querySelector('.burger-wrap')
//   var pageNav = document.querySelector('.page-nav')
//   burger.classList.toggle('burger-wrap--active')
//   pageNav.classList.toggle('page-nav--active')
// }


var vid = document.querySelector('.testimonial__video');
var pauseBtn = document.querySelector('.testimonial__video-pause-btn');
var playBtn = document.querySelector('.testimonial__video-play-btn');

function videoPlayBtn() {
  if (vid.paused) {
    vid.play();
    pauseBtn.style.display = 'block'

  }
  if (vid.play()) {
    playBtn.style.display = 'none'
  }
}

function videoPauseBtn() {
  if (!vid.paused) {
    vid.pause();
    playBtn.style.display = 'block'
  }

  if (vid.paused) {
    pauseBtn.style.display = 'none'
  }
}
