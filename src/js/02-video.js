import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (event) {
  player
    .getCurrentTime()
    .then(function (seconds) {
      // seconds = the current playback position
      //   console.log(seconds);
      return localStorage.setItem('videoplayer-current-time', seconds);
      //   return seconds;
    })
    .catch(function (error) {
      // an error occurred
      console.log('Помилка!!!!!');
    });
});

// console.log(localStorage.getItem('videoplayer-current-time'));
const videoPlayerCurrentTime = localStorage.getItem('videoplayer-current-time');
// ====================================перезавантаження сторінки===================================
player
  .setCurrentTime(videoPlayerCurrentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
