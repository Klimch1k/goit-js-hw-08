import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

function savedTimeVideo(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}

player.on('timeupdate', throttle(savedTimeVideo, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(savedTime);
}
