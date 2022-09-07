const volumeControl = document.querySelector('.volumeControl');
const musicBtn = document.querySelector('.musicBtn');
const bettingTime = document.querySelector('.bettingTime');
const bettingTimePlusBtn = document.querySelector('.bettingTimePlusBtn');
const bettingTimeMinusBtn = document.querySelector('.bettingTimeMinusBtn');

let setting = JSON.parse(localStorage.getItem('setting')) || {
  isMusicOff: false,
  volume: 50,
  bettingTime: 30,
};

let isMuted = false;
const setSetting = () => {
  musicBtn.checked = setting.isMusicOff;
  musicControlFunction();
  // volumeBar
  volumeControl.value = setting.volume;
  volumeBarFunction(volumeControl.value);
  bettingTime.textContent = setting.bettingTime;
};
let played = false;
document.addEventListener('click', () => {
  if (!played) {
    // startAudio.play();
    played = true;
    setSetting();
  }
});
setSetting();

function musicControlFunction() {
  if (musicBtn.checked) {
    // volumeBtn.firstElementChild.classList = 'fa-solid fa-volume-xmark';
    // startAudio.pause();
    isMuted = true;
  } else {
    // volumeBtn.firstElementChild.classList = 'fa-solid fa-volume-high';
    // startAudio.play();
    isMuted = false;
  }
  setting.isMusicOff = musicBtn.checked;
  localStorage.setItem('setting', JSON.stringify(setting));
}

function volumeBarFunction(value) {
  volumeControl.style.backgroundSize = value + '% 100%';
  // startAudio.volume = value / 100;
  // centerAnimationAudio.volume = value / 100;
  // clockAudio.volume = value / 100;
  // clickAudio.volume = value / 100;
  // lossAudio.volume = value / 100;
  // winAudio.volume = value / 100;
  // endAudio.volume = value / 100;
  // coinDropAudio.volume = value / 100;
  setting.volume = value;
  localStorage.setItem('setting', JSON.stringify(setting));
  // if (isMuted) {
  //   startAudio.pause();
  // }
}

musicBtn.addEventListener('input', () => {
  // clickAudio.play();
  musicControlFunction();
});

volumeControl.addEventListener('input', () => {
  let { value } = volumeControl;
  console.log(value);
  volumeBarFunction(value);
});

bettingTimePlusBtn.onclick = () => {
  // clickAudio.play();
  bettingTimePlusBtn.classList.add('buttonAnimate');
  setTimeout(() => {
    bettingTimePlusBtn.classList.remove('buttonAnimate');
  }, 310);
  setting.bettingTime += 5;
  bettingTime.textContent = setting.bettingTime;
  localStorage.setItem('setting', JSON.stringify(setting));
};

bettingTimeMinusBtn.onclick = () => {
  // clickAudio.play();
  if (setting.bettingTime == 5) {
    bettingTimeMinusBtn.classList.add('shake');
  } else {
    bettingTimeMinusBtn.classList.add('buttonAnimate');
  }
  setTimeout(() => {
    bettingTimeMinusBtn.classList.remove('buttonAnimate', 'shake');
  }, 310);
  setting.bettingTime -= setting.bettingTime > 5 ? 5 : 0;
  bettingTime.textContent = setting.bettingTime;
  localStorage.setItem('setting', JSON.stringify(setting));
};
