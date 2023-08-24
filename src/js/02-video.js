const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', function (data) {
  // data is an object containing properties specific to that event
});

const data = {
  duration: 61.857,
  percent: 0.049,
  seconds: 3.034,
};

localStorage.setItem('videoplayer - current - time');
