const { throttle } = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const updateTime = player.on('timeupdate', function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  _throttle(updateTime, [(wait = 1000)]);
  console.log(updateTime);
});

const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime);

window.onload = e => {
  if (localStorage.getItem('videoplayer-current-time') !== null) {
    const currentTime = Object.values(parsedTime);
    const currentTimeSeconds = currentTime[0];
    player.setCurrentTime(currentTimeSeconds).catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
  } else {
    return;
  }
};
