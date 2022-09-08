const bubbleClick = document.querySelector(".bubbleClick");
const mainBackgroundSound = document.querySelector(".mainBackgroundSound");
const coinDropAudio = document.querySelector(".coinDropAudio");
const selectSound = document.querySelector(".selectSound");
const loadingScreen = document.querySelector(".loading-screen");
const gameWelcome = document.querySelector(".game__welcome");
const profileBtn = document.querySelector(".game__welcome-top-item2-name");
const profileContainer = document.querySelector(".profileContainer");
const profilebackBtn = document.querySelector(".profilebackBtn");
const achievementBtn = document.querySelector(".achievementBtn");
const achievementContainer = document.querySelector(".achievementContainer");
const achievementbackBtn = document.querySelector(".achievementbackBtn");
const settingBtn = document.querySelector(".settingBtn");
const settingContainer = document.querySelector(".settingContainer");
const welcomePlay = document.querySelector("#welcomePlay");
const loadingBox = document.querySelector(".loadingBox");
const volumeControl = document.querySelector(".volumeControl");
const musicBtn = document.querySelector(".musicBtn");
const bettingTime = document.querySelector(".bettingTime");
const bettingTimePlusBtn = document.querySelector(".bettingTimePlusBtn");
const bettingTimeMinusBtn = document.querySelector(".bettingTimeMinusBtn");
const settingBackBtn = document.querySelector(".settingBackBtn");
const volumeBtn = document.querySelector(".volumeBtn");
const gameContainer = document.querySelector(".game__container");
console.log(gameContainer);
const betBtn = document.querySelectorAll(".animalCircleImg");
const myValue = document.querySelectorAll(".myValue");
const centerImg = document.querySelectorAll(".img");
const betCoins = document.querySelector(".betCoins");
const myOwnCoin = document.querySelector(".myOwnCoin");
const startBtn = document.querySelector(".startBtn");
const removeBetBtn = document.querySelector(".removeBetBtn");
const showWinOrLose = document.querySelector(".showWinOrLose");
const winCount = document.querySelector(".winCount");
const getCoinBtn = document.querySelector(".get-coin");
const quitBtn = document.querySelector(".quitBtn");
const warning = document.querySelector(".warning");
const okBtn = document.querySelector(".okBtn");
const outOfCoinWarning = document.querySelector(".outOfCoinWarning");
const okBtn2 = document.querySelector(".okBtn2");
const outOfCoinAnimation = document.querySelector(".outOfCoinAnimation");
const circle = document.querySelector(".timerCircle");
let ss = document.getElementById("ss");
const countDown = document.querySelector(".countDown");

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
    getImage("./assets/images/menu-board/menuBoardBg.jpg"),
    getImage("./assets/images/btn/coin1.png"),
    getImage("./assets/images/menu-board/person icon.png"),
    getImage("./assets/images/menu-board/play.png"),
    getImage("./assets/images/menu-board/victory.png"),
    getImage("./assets/images/menu-board/setting.png"),
    getImage("./assets/images/gameicon copy 2.png"),
  ])
    .then(() => {
      loadingScreen.style.display = "none";
      gameWelcome.style.display = "block";
    })
    .catch((e) => console.log(e));
}
menuBoardPreloader();
function gamePreloader() {
  return Promise.all([
    getImage("./assets/images/square-buttons/sea-bg.png"),
    getImage("./assets/images/btn/play.png"),
    getImage("./assets/images/btn/cross.png"),
    getImage("./assets/images/round-buttons/dog.png"),
    getImage("./assets/images/round-buttons/monkey.png"),
    getImage("./assets/images/round-buttons/sheep.png"),
    getImage("./assets/images/round-buttons/elephant.png"),
    getImage("./assets/images/round-buttons/seahorse.png"),
    getImage("./assets/images/round-buttons/jellyfish.png"),
    getImage("./assets/images/round-buttons/dolphin.png"),
    getImage("./assets/images/round-buttons/shark.png"),
    getImage("./assets/images/square-buttons/bird.png"),
    getImage("./assets/images/round-buttons/whale.png"),
    getImage("./assets/images/round-buttons/sea.png"),
    getImage("./assets/images/round-buttons/land.png"),
    getImage("./assets/images/square-buttons/dog(top corner).png"),
    getImage("./assets/images/square-buttons/whale(top corner).png"),
    getImage("./assets/images/square-buttons/seahorse(right side).png"),
    getImage("./assets/images/square-buttons/jellyfish(top corner).png"),
    getImage("./assets/images/square-buttons/whale(right side).png"),
    getImage("./assets/images/square-buttons/dolphin(bottom).png"),
    getImage("./assets/images/square-buttons/shark(right side).png"),
    getImage("./assets/images/square-buttons/elephant(bottom).png"),
    getImage("./assets/images/round-buttons/bird.png"),
    getImage("./assets/images/square-buttons/sheep(left side).png"),
    getImage("./assets/images/square-buttons/monkey(left side).png"),
    getImage("./assets/images/animation-gif/dog.gif"),
    getImage("./assets/images/animation-gif/sheep.gif"),
    getImage("./assets/images/animation-gif/elephant.gif"),
    getImage("./assets/images/animation-gif/seahorse.gif"),
    getImage("./assets/images/animation-gif/jellyfish.gif"),
    getImage("./assets/images/animation-gif/dolphin.gif"),
    getImage("./assets/images/animation-gif/shark.gif"),
    getImage("./assets/images/animation-gif/whale.gif"),
    getImage("./assets/images/animation-gif/monkey.gif"),
    getImage("./assets/images/24265652.jpg"),
    getImage("./assets/images/animation-gif/loseAnimation.gif"),
  ]).then(() => {
    gameWelcome.style.display = "none";
    loadingBox.style.display = "none";
    gameContainer.style.display = "flex";
    console.log("hello", gameContainer);
  });
}
let menuController = true;
welcomePlay.addEventListener("click", function () {
  bubbleClick.play();
  // mainBackgroundSound.play();
  menuController = false;
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
  }, 210);
  loadingBox.style.display = "flex";
  gamePreloader();
});

let setting = JSON.parse(localStorage.getItem("setting")) || {
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
document.addEventListener("click", () => {
  if (!played) {
    // startAudio.play();
    played = true;
    setSetting();
  }
});
setSetting();

function musicControlFunction() {
  if (musicBtn.checked) {
    volumeBtn.firstElementChild.classList = "fa-solid fa-volume-xmark";
    // startAudio.pause();
    isMuted = true;
  } else {
    volumeBtn.firstElementChild.classList = "fa-solid fa-volume-high";
    // startAudio.play();
    isMuted = false;
  }
  setting.isMusicOff = musicBtn.checked;
  localStorage.setItem("setting", JSON.stringify(setting));
}

function volumeBarFunction(value) {
  volumeControl.style.backgroundSize = value + "% 100%";
  // startAudio.volume = value / 100;
  // centerAnimationAudio.volume = value / 100;
  // clockAudio.volume = value / 100;
  // clickAudio.volume = value / 100;
  // lossAudio.volume = value / 100;
  // winAudio.volume = value / 100;
  // endAudio.volume = value / 100;
  // coinDropAudio.volume = value / 100;
  setting.volume = value;
  localStorage.setItem("setting", JSON.stringify(setting));
  // if (isMuted) {
  //   startAudio.pause();
  // }
}

settingBtn.addEventListener("click", function () {
  bubbleClick.play();
  if (menuController == false) {
    return;
  }
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
    gameWelcome.style.display = "none";
    settingContainer.style.display = "flex";
  }, 210);
});

settingBackBtn.addEventListener("click", function () {
  bubbleClick.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
    gameWelcome.style.display = "block";
    settingContainer.style.display = "none";
  }, 210);
});

volumeBtn.addEventListener("click", function () {
  bubbleClick.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
  }, 210);
  musicBtn.checked = !musicBtn.checked;
  musicControlFunction();
});

musicBtn.addEventListener("input", () => {
  bubbleClick.play();
  musicControlFunction();
});

volumeControl.addEventListener("input", () => {
  let { value } = volumeControl;
  volumeBarFunction(value);
});

bettingTimePlusBtn.addEventListener("click", function () {
  bubbleClick.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
  }, 250);
  setting.bettingTime += setting.bettingTime < 60 ? 5 : 0;
  bettingTime.textContent = setting.bettingTime;
  localStorage.setItem("setting", JSON.stringify(setting));
});

bettingTimeMinusBtn.addEventListener("click", function () {
  bubbleClick.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
  }, 250);
  setting.bettingTime -= setting.bettingTime > 10 ? 5 : 0;
  bettingTime.textContent = setting.bettingTime;
  localStorage.setItem("setting", JSON.stringify(setting));
});

profileBtn.addEventListener("click", function () {
  bubbleClick.play();
  if (menuController == false) {
    return;
  }
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
    gameWelcome.style.display = "none";
    profileContainer.style.display = "flex";
  }, 210);
});
profilebackBtn.addEventListener("click", function () {
  bubbleClick.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
    gameWelcome.style.display = "block";
    profileContainer.style.display = "none";
  }, 210);
});

achievementBtn.addEventListener("click", function () {
  bubbleClick.play();
  if (menuController == false) {
    return;
  }
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
    gameWelcome.style.display = "none";
    achievementContainer.style.display = "flex";
  }, 210);
});
achievementbackBtn.addEventListener("click", function () {
  bubbleClick.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
    gameWelcome.style.display = "block";
    achievementContainer.style.display = "none";
  }, 210);
});

// InGameScreen----------------------------------------
let betPermission = true;
for (let i = 0; i < betBtn.length; i++) {
  betBtn[i].addEventListener("click", function () {
    coinDropAudio.play();
    this.classList.add("animalBtnClickAnimation");
    setTimeout(() => {
      this.classList.remove("animalBtnClickAnimation");
    }, 100);
    if (betPermission === false) {
      return;
    } else {
      if (+myOwnCoin.firstChild.textContent > 0) {
        myValue[i].firstChild.textContent =
          +myValue[i].firstChild.textContent + 1;
        myOwnCoin.firstChild.textContent =
          +myOwnCoin.firstChild.textContent - 1;
        // showMenuCoin.textContent = +myOwnCoin.firstChild.textContent
        // showCoinInProfile.textContent = +myOwnCoin.firstChild.textContent
        betCoins.firstChild.textContent = +betCoins.firstChild.textContent + 1;
      }
    }
  });
}
getCoinBtn.addEventListener("click", function () {
  coinDropAudio.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
  }, 210);
});

quitBtn.addEventListener("click", function () {
  bubbleClick.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
  }, 210);
});

let count = 7;
let timerId = 0;
let playPermission = true;
startBtn.addEventListener("click", function () {
  bubbleClick.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
  }, 210);
  if (playPermission === false) {
    return;
  } else {
    playPermission = false;
    if (+myOwnCoin.firstChild.textContent === 0) {
      outOfCoinWarning.style.display = "flex";
    } else {
      circle.style.display = "block";
      if (timerId !== 0) return;

      timerId = setInterval(function () {
        count--;
        let s = count;
        s = s < 10 ? "0" + s : s;
        countDown.innerHTML = s;

        if (betPermission == false) {
          preAmount = +myOwnCoin.firstChild.textContent;
        }

        betPermission = true;
        if (count > 0 && count <= 5) {
          countDown.style.color = "rgb(253, 38, 38)";
          ss.style.stroke = "rgb(253, 38, 38)";
        }
        if (count === 0) {
          countDown.innerHTML = "GO";
          countDown.style.color = "orange";
        }
        if (count < 0) {
          countingEnd();
          if (+betCoins.firstChild.textContent === 0) {
            warning.style.display = "flex";
          } else {
            gameIntervel = 0;
            let random = getRandomInt(32);
            animationCircle(null, 100);
            setTimeout(() => {
              clearInterval(gameIntervel);
              gameIntervel = 0;
              animationCircle(null, 200);
            }, 3000);
            setTimeout(() => {
              clearInterval(gameIntervel);
              gameIntervel = 0;
              animationCircle(null, 250);
            }, 5000);
            setTimeout(() => {
              clearInterval(gameIntervel);
              gameIntervel = 0;
              animationCircle(null, 300);
            }, 6000);
            setTimeout(() => {
              clearInterval(gameIntervel);
              gameIntervel = 0;
              animationCircle(random, 350);
            }, 7000);
          }
        }
        ss.style.strokeDashoffset = 440 - (440 * count) / 30;
      }, 1000);
    }
  }
});

function countingEnd() {
  clearInterval(timerId);
  timerId = 0;
  // count = +countText.innerText;
  // countDown.innerHTML = count;
  count = 7;
  circle.style.display = "none";
  betPermission = false;
  ss.style.stroke = "orange";
  countDown.style.color = "orange";
}

removeBetBtn.addEventListener("click", function () {
  bubbleClick.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
  }, 210);
  if (betPermission === false) {
    return;
  } else {
    for (let i = 0; i < betBtn.length; i++) {
      myOwnCoin.firstChild.textContent =
        +myOwnCoin.firstChild.textContent + +myValue[i].firstChild.textContent;
      // showMenuCoin.textContent = +myOwnCoin.firstChild.textContent
      // showCoinInProfile.textContent = +myOwnCoin.firstChild.textContent
    }
    for (let i = 0; i < betBtn.length; i++) {
      myValue[i].firstChild.textContent = 0;
    }
    betCoins.firstChild.textContent = 0;
    countingEnd();
    playPermission = true;
  }
});
