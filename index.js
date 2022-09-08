const loadingScreen = document.querySelector('.loading-screen');
const gameWelcome = document.querySelector('.game__welcome');
const profileBtn = document.querySelector('.game__welcome-top-item2-name');
const profileContainer = document.querySelector('.profileContainer');
const profilebackBtn = document.querySelector('.profilebackBtn');
const achievementBtn = document.querySelector('.achievementBtn');
const achievementContainer = document.querySelector('.achievementContainer');
const achievementbackBtn = document.querySelector('.achievementbackBtn');
const settingBtn = document.querySelector('.settingBtn');
const settingContainer = document.querySelector('.settingContainer');
const volumeControl = document.querySelector('.volumeControl');
const musicBtn = document.querySelector('.musicBtn');
const bettingTime = document.querySelector('.bettingTime');
const bettingTimePlusBtn = document.querySelector('.bettingTimePlusBtn');
const bettingTimeMinusBtn = document.querySelector('.bettingTimeMinusBtn');
const settingBackBtn = document.querySelector('.settingBackBtn');
const bubbleClick = document.querySelector('.bubbleClick');
const volumeBtn = document.querySelector('.volumeBtn');

function getImage(url) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.onload = function () {
      resolve(url);
    };
    img.onerror = function () {
      reject(url);
    };
    img.src = url;
  });
}

function menuBoardPreloader() {
  Promise.all([
    getImage('./assets/images/menu-board/menuBoardBg.jpg'),
    getImage('./assets/images/btn/coin1.png'),
    getImage('./assets/images/menu-board/person icon.png'),
    getImage('./assets/images/menu-board/play.png'),
    getImage('./assets/images/menu-board/victory.png'),
    getImage('./assets/images/menu-board/setting.png'),
    getImage('./assets/images/gameicon copy 2.png'),
  ])
    .then(() => {
      loadingScreen.style.display = 'none';
      gameWelcome.style.display = 'block';
    })
    .catch((e) => console.log(e));
}
menuBoardPreloader();

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
    volumeBtn.firstElementChild.classList = 'fa-solid fa-volume-xmark';
    // startAudio.pause();
    isMuted = true;
  } else {
    volumeBtn.firstElementChild.classList = 'fa-solid fa-volume-high';
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

settingBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    gameWelcome.style.display = 'none';
    settingContainer.style.display = 'flex';
  }, 210);
});

settingBackBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    gameWelcome.style.display = 'block';
    settingContainer.style.display = 'none';
  }, 210);
});

volumeBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
  }, 210);
  musicBtn.checked = !musicBtn.checked;
  musicControlFunction();
});

musicBtn.addEventListener('input', () => {
  bubbleClick.play();
  musicControlFunction();
});

volumeControl.addEventListener('input', () => {
  let { value } = volumeControl;
  volumeBarFunction(value);
});

bettingTimePlusBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
  }, 250);
  setting.bettingTime += setting.bettingTime < 60 ? 5 : 0;
  bettingTime.textContent = setting.bettingTime;
  localStorage.setItem('setting', JSON.stringify(setting));
});

bettingTimeMinusBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
  }, 250);
  setting.bettingTime -= setting.bettingTime > 10 ? 5 : 0;
  bettingTime.textContent = setting.bettingTime;
  localStorage.setItem('setting', JSON.stringify(setting));
});

profileBtn.addEventListener('click', function () {
  bubbleClick.play();
  // if (menuController == false) {
  //   return;
  // } else {
  //   this.classList.add("zoomoutAnimate");
  //   setTimeout(() => {
  //     this.classList.remove("zoomoutAnimate");
  //     gameWelcome.style.display = "none";
  //     profileContainer.style.display = "flex";
  //   }, 100);
  // }
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    gameWelcome.style.display = 'none';
    profileContainer.style.display = 'flex';
  }, 210);
});
profilebackBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    gameWelcome.style.display = 'block';
    profileContainer.style.display = 'none';
  }, 210);
});

achievementBtn.addEventListener('click', function () {
  bubbleClick.play();
  // if(menuController == false){
  //     return ;
  // }else{
  //     this.classList.add('menuTopLeftBtnClickAnimation');
  //     setTimeout (()=>{
  //         this.classList.remove('menuTopLeftBtnClickAnimation');
  //         menuBoard.style.display = "none";
  //         achievementContainer.style.display = "flex";
  //     },100)
  // }
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    gameWelcome.style.display = 'none';
    achievementContainer.style.display = 'flex';
  }, 210);
});
achievementbackBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    gameWelcome.style.display = 'block';
    achievementContainer.style.display = 'none';
  }, 210);
});
