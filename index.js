const bubbleClick = document.querySelector(".bubbleClick");
const mainBackgroundSound = document.querySelector(".mainBackgroundSound");
mainBackgroundSound.autoplay = true;
mainBackgroundSound.loop = true;

const coinDropAudio = document.querySelector(".coinDropAudio");
const coinDropAudio2 = document.querySelector(".coinDropAudio2");
const selectSound = document.querySelector(".selectSound");
const backGroundSound = document.querySelector(".backGroundSound");
backGroundSound.loop = true;

const clockTick = document.querySelector(".clockTick");
const winSound = document.querySelector(".winSound");
const loseSound = document.querySelector(".loseSound");
const gameSpin = document.querySelector(".gameSpin");
gameSpin.loop = true;
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
const aboutBettingSlotsBtn = document.querySelector(".aboutBettingSlotsBtn");
const aboutBettingSlotsBackBtn = document.querySelector(
  ".aboutBettingSlotsBackBtn"
);
const privacy = document.querySelector(".privacy");
const userAgreement = document.querySelector(".userAgreement");
const aboutBettingSlots = document.querySelector(".aboutBettingSlots");
const volumeBtn = document.querySelector(".volumeBtn");
const gameContainer = document.querySelector(".game__container");
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
const countDown = document.getElementById("count-down");
const circleEle = document.getElementById("circle");
const secondSpan = document.querySelector("#count-down span");
const quitConfirm = document.querySelector(".quitConfirm");
const yesBtn = document.querySelector(".yesBtn");
const noBtn = document.querySelector(".noBtn");
const randomAnimal = document.querySelector(".randomAnimal");
const showMenuCoin = document.querySelector(".wellcomeTotal");
const showCoinInProfile = document.querySelector(".showCoinInProfile");
const winOne = document.querySelector(".winning1");
const winTwo = document.querySelector(".winning2");
const winThree = document.querySelector(".winning3");
const winFour = document.querySelector(".winning4");
const loseGif = document.querySelector(".loserGif");
const celebration = document.querySelector(".celebration");
const loserDolphin = document.querySelector(".loserDolphin");
const privacyContainer = document.querySelector(".privacy__container");
const privacyBackBtnOne = document.querySelector(".privacyBack");
const privacyBackBtnTwo = document.querySelector(".privacyBackBtn");
const userAgreement_container = document.querySelector(
  ".userAgreement_container"
);
const agreebtn = document.querySelector(".agreebtn");

const animalsBar = document.querySelector(".animalsBar");
let animalList = [];
let srcStart = "./assets/images/square-buttons/";

function renderAnimalList(animalsBar, animalList) {
  cleanAniamlList();
  if (animalList.length > 5) {
    for (let i = 0; i < 5; i++) {
      const animal = animalList[i];
      const animalItem = generateAnimalImg(animal);
      animalsBar.appendChild(animalItem);
    }
  } else {
    for (let i = 0; i < animalList.length; i++) {
      const animal = animalList[i];
      const animalItem = generateAnimalImg(animal);
      animalsBar.appendChild(animalItem);
    }
  }
}

function cleanAniamlList() {
  let animalsBar = document.querySelector(".animalsBar");
  while (animalsBar.firstChild) {
    animalsBar.removeChild(animalsBar.firstChild);
  }
}

function generateAnimalImg(item) {
  const img = document.createElement("img");
  img.src = `${srcStart}${item.srcEnd}`;
  return img;
}

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
    getImage("./assets/images/animation-gif/birdAnimation.png"),
    getImage("./assets/images/animation-gif/outOfCoin.gif"),
    getImage(
      "./assets/images/animation-gif/a7e63493c33a7b364f81ed6d71526908.gif"
    ),
    getImage("./assets/images/animation-gif/giphy.gif"),
    getImage("./assets/images/animation-gif/NR7Y.gif"),
  ]).then(() => {
    gameWelcome.style.display = "none";
    loadingBox.style.display = "none";
    gameContainer.style.display = "flex";
  });
}
let menuController = true;
welcomePlay.addEventListener("click", function () {
  bubbleClick.play();
  mainBackgroundSound.play();
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
    mainBackgroundSound.play();
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
    mainBackgroundSound.src = "";
    backGroundSound.src = "";
  } else {
    volumeBtn.firstElementChild.classList = "fa-solid fa-volume-high";
    // startAudio.play();
    isMuted = false;
    mainBackgroundSound.src = "./assets/audios/mainBackgroundSound.mp3";
    backGroundSound.src = "./assets/audios/backgroundSound.wav";
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
  coinDropAudio.volume = value / 100;
  mainBackgroundSound.volume = value / 100;
  backGroundSound.volume = value / 100;
  clockTick.volume = value / 100;
  winSound.volume = value / 100;
  loseSound.volume = value / 100;
  selectSound.volume = value / 100;
  gameSpin.volume = value / 100;
  selectSound.volume = value / 100;

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
aboutBettingSlotsBtn.addEventListener("click", function () {
  bubbleClick.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
    aboutBettingSlots.style.display = "flex";
    settingContainer.style.display = "none";
  }, 210);
});
aboutBettingSlotsBackBtn.addEventListener("click", function () {
  bubbleClick.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
    aboutBettingSlots.style.display = "none";
    settingContainer.style.display = "flex";
  }, 210);
});
privacy.addEventListener("click", function () {
  bubbleClick.play();
  settingContainer.style.display = "none";
  privacyContainer.style.display = "block";
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
  }, 210);
});

privacyBackBtnOne.addEventListener("click", function () {
  bubbleClick.play();
  privacyContainer.style.display = "none";
  settingContainer.style.display = "flex";
});

privacyBackBtnTwo.addEventListener("click", function () {
  bubbleClick.play();
  privacyContainer.style.display = "none";
  settingContainer.style.display = "flex";
});

userAgreement.addEventListener("click", function () {
  bubbleClick.play();
  userAgreement_container.style.display = "block";
  settingContainer.style.display = "none";
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
  }, 210);
});
agreebtn.addEventListener("click", function () {
  bubbleClick.play();
  userAgreement_container.style.display = "none";
  settingContainer.style.display = "flex";
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
  }, 210);
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

okBtn.addEventListener("click", function () {
  bubbleClick.play();
  mainBackgroundSound.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
    playPermission = true;
    warning.style.display = "none";
  }, 100);
});
okBtn2.addEventListener("click", function () {
  bubbleClick.play();
  mainBackgroundSound.play();
  backGroundSound.pause();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
    playPermission = true;
    outOfCoinWarning.style.display = "none";
  }, 100);
});

function betting(i) {
  coinDropAudio.play();
  betBtn[i].classList.add("animalBtnClickAnimation");
  setTimeout(() => {
    coinDropAudio.pause();
    coinDropAudio.currentTime = 0;
    betBtn[i].classList.remove("animalBtnClickAnimation");
  }, 70);
  if (betPermission === false) {
    return;
  } else {
    if (+myOwnCoin.firstElementChild.textContent > 0) {
      myValue[i].firstElementChild.textContent =
        +myValue[i].firstElementChild.textContent + 1;
      myOwnCoin.firstElementChild.textContent =
        +myOwnCoin.firstElementChild.textContent - 1;
      showMenuCoin.textContent = +myOwnCoin.firstElementChild.textContent;
      showCoinInProfile.textContent = +myOwnCoin.firstElementChild.textContent;
      betCoins.firstElementChild.textContent =
        +betCoins.firstElementChild.textContent + 1;
    }
  }
}

for (let i = 0; i < betBtn.length; i++) {
  betBtn[i].addEventListener("click", function () {
    betting(i);
  });

  betBtn[i].addEventListener("mousedown", function () {
    betHold = setInterval(function () {
      betting(i);
    }, 90);
  });

  betBtn[i].addEventListener("mouseup", function () {
    clearInterval(betHold);
  });

  betBtn[i].addEventListener("mouseleave", function () {
    clearInterval(betHold);
  });
}

getCoinBtn.addEventListener("click", function () {
  coinDropAudio.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
  }, 210);
});

let count = setting.bettingTime;
let timerId = 0;
let playPermission = true;
let betPermission = false;
let preAmount;
startBtn.addEventListener("click", function () {
  bubbleClick.play();
  mainBackgroundSound.pause();
  backGroundSound.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
  }, 210);
  if (playPermission === false) {
    return;
  } else {
    quitConfirm.style.display = "none";
    playPermission = false;
    betPermission = true;
    if (+myOwnCoin.firstElementChild.textContent === 0) {
      outOfCoinWarning.style.display = "flex";
    } else {
      count = setting.bettingTime;
      circle.style.display = "block";
      circleEle.style.stroke = "#ff7b01";
      secondSpan.style.color = "#ffe600";
      if (timerId !== 0) return;
      preAmount = +myOwnCoin.firstElementChild.textContent;
      timerId = setInterval(function () {
        let s = count;
        s = s < 10 ? "0" + s : s;
        secondSpan.textContent = s;

        countDown.style.display = "block";
        let radius = circleEle.r.baseVal.value;
        let circumference = radius * 2 * Math.PI;
        let barLength = (count * circumference) / setting.bettingTime;
        circleEle.setAttribute(
          "stroke-dasharray",
          barLength + " " + circumference
        );

        betPermission = true;
        if (count == Math.floor(setting.bettingTime / 3)) {
          backGroundSound.pause();
          clockTick.load();
          clockTick.play();
          circleEle.style.stroke = "red";
          secondSpan.style.color = "red";
        }
        if (count === 0) {
          clockTick.pause();
          secondSpan.textContent = "GO";
        }
        if (count < 0) {
          countingEnd();
          if (+betCoins.firstElementChild.textContent === 0) {
            warning.style.display = "flex";
          } else {
            gameIntervel = 0;
            gameSpin.load();
            gameSpin.play();
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
        count--;
      }, 1000);
    }
  }
});

function countingEnd() {
  clearInterval(timerId);
  timerId = 0;
  clockTick.pause();
  backGroundSound.pause();
  count = setting.bettingTime;
  countDown.style.display = "none";
  circleEle.style.stroke = "#ff7b01";
  secondSpan.style.color = "#ffe600";
  betPermission = false;
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
      myOwnCoin.firstElementChild.textContent =
        +myOwnCoin.firstElementChild.textContent +
        +myValue[i].firstElementChild.textContent;
      showMenuCoin.textContent = +myOwnCoin.firstElementChild.textContent;
      showCoinInProfile.textContent = +myOwnCoin.firstElementChild.textContent;
    }
    for (let i = 0; i < betBtn.length; i++) {
      myValue[i].firstElementChild.textContent = 0;
    }
    betCoins.firstElementChild.textContent = 0;
    countingEnd();
    playPermission = true;
    mainBackgroundSound.play();
  }
});

quitBtn.addEventListener("click", function () {
  bubbleClick.play();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
  }, 210);
  if (!playPermission) return;
  quitConfirm.style.display = "flex";
});

yesBtn.onclick = () => {
  bubbleClick.play();
  menuController = true;
  gameContainer.style.display = "none";
  animalsBar.style.display = "none";
  gameWelcome.style.display = "block";
  quitConfirm.style.display = "none";
};
noBtn.onclick = () => {
  bubbleClick.play();
  quitConfirm.style.display = "none";
};

function check(x) {
  animalsBar.style.display = "flex";
  if (x == 1 || x == 2 || x == 3) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[0].firstElementChild.textContent * 4;
    randomAnimal.style.display = "block";
    randomAnimal.src = "./assets/images/animation-gif/dog.gif";
    const animalItem = { srcEnd: "dog(top corner).png" };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 29 || x == 30 || x == 31) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[1].firstElementChild.textContent * 6;
    randomAnimal.style.display = "block";
    randomAnimal.src = "./assets/images/animation-gif/monkey.gif";
    const animalItem = { srcEnd: "monkey(left side).png" };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 25 || x == 26 || x == 27) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[2].firstElementChild.textContent * 12;
    randomAnimal.style.display = "block";
    randomAnimal.src = "./assets/images/animation-gif/sheep.gif";
    const animalItem = { srcEnd: "sheep(left side).png" };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 21 || x == 22 || x == 23) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[3].firstElementChild.textContent * 24;
    randomAnimal.style.display = "block";
    randomAnimal.src = "./assets/images/animation-gif/elephant.gif";
    const animalItem = { srcEnd: "elephant(bottom).png" };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 5 || x == 6 || x == 7) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[4].firstElementChild.textContent * 4;
    randomAnimal.style.display = "block";
    randomAnimal.src = "./assets/images/animation-gif/seahorse.gif";
    const animalItem = { srcEnd: "seahorse(right side).png" };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 9 || x == 10 || x == 11) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[5].firstElementChild.textContent * 6;
    randomAnimal.style.display = "block";
    randomAnimal.src = "./assets/images/animation-gif/jellyfish.gif";
    const animalItem = { srcEnd: "jellyfish(top corner).png" };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 13 || x == 14 || x == 15) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[6].firstElementChild.textContent * 12;
    randomAnimal.style.display = "block";
    randomAnimal.src = "./assets/images/animation-gif/dolphin.gif";
    const animalItem = { srcEnd: "dolphin(bottom).png" };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 17 || x == 18 || x == 19) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[7].firstElementChild.textContent * 24;
    randomAnimal.style.display = "block";
    randomAnimal.src = "./assets/images/animation-gif/shark.gif";
    const animalItem = { srcEnd: "shark(right side).png" };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 0 || x == 8 || x == 16 || x == 24) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[8].firstElementChild.textContent * 24;
    randomAnimal.style.display = "block";
    randomAnimal.src = "./assets/images/animation-gif/birdAnimation.png";
    const animalItem = { srcEnd: "bird.png" };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 4 || x == 12 || x == 20 || x == 28) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[9].firstElementChild.textContent * 48;
    randomAnimal.style.display = "block";
    randomAnimal.src = "./assets/images/animation-gif/whale.gif";
    const animalItem = { srcEnd: "whale(left+bottom).png" };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (
    x == 5 ||
    x == 6 ||
    x == 7 ||
    x == 9 ||
    x == 10 ||
    x == 11 ||
    x == 13 ||
    x == 14 ||
    x == 15 ||
    x == 17 ||
    x == 18 ||
    x == 19
  ) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[10].firstElementChild.textContent * 2;
  }
  if (
    x == 1 ||
    x == 2 ||
    x == 3 ||
    x == 21 ||
    x == 22 ||
    x == 23 ||
    x == 25 ||
    x == 26 ||
    x == 27 ||
    x == 29 ||
    x == 30 ||
    x == 31
  ) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[11].firstElementChild.textContent * 2;
  }
  finalAmount = +myOwnCoin.firstElementChild.textContent;
  showMenuCoin.textContent = +myOwnCoin.firstElementChild.textContent;
  showCoinInProfile.textContent = +myOwnCoin.firstElementChild.textContent;
}

function winOrLose(x, y) {
  if (x > y || x === y) {
    winSound.load();
    winSound.play();
    showWinOrLose.textContent = "WIN";
    showWinOrLose.style.color = "greenyellow";
    winCount.firstElementChild.textContent = x - y;
    winCount.firstElementChild.style.color = "greenyellow";
    winOne.style.display = "block";
    winTwo.style.display = "block";
    winThree.style.display = "block";
    winFour.style.display = "block";
    celebration.style.display = "block";
  } else {
    loseSound.load();
    loseSound.play();
    showWinOrLose.textContent = "LOSE";
    showWinOrLose.style.color = "rgb(253, 38, 38)";
    winCount.firstElementChild.textContent = y - x;
    winCount.firstElementChild.style.color = "rgb(253, 38, 38)";
    loseGif.style.display = "block";
    loserDolphin.style.display = "block";
  }
}

function getRandomInt(num) {
  return Math.floor(Math.random() * num + 1);
}

let gameIntervel = 0;
let i = 0;

function animationCircle(random, speed) {
  let number = random;
  if (gameIntervel !== 0) {
    return;
  }
  gameIntervel = setInterval(() => {
    if (i == 32) {
      i = 0;
    }
    if (!centerImg[i].className.includes("animate")) {
      centerImg[i].classList.add("animate");
    }
    if (i > 0) {
      centerImg[i - 1].classList.remove("animate");
    } else {
      centerImg[31].classList.remove("animate");
    }
    i++;
    number--;
    if (number == 0) {
      clearInterval(gameIntervel);
      let y = i - 1;
      gameSpin.pause();
      check(y);

      setTimeout(() => {
        selectSound.play();
        centerImg[i - 1].classList.remove("animate");
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.add("animate");
        }, 200);
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.remove("animate");
        }, 400);
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.add("animate");
        }, 600);
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.remove("animate");
        }, 800);
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.add("animate");
        }, 1000);
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.remove("animate");
        }, 1200);
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.add("animate");
        }, 1400);
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.remove("animate");
        }, 1600);
      }, 500);

      setTimeout(() => {
        winOrLose(finalAmount, preAmount);
        setTimeout(() => {
          randomAnimal.style.display = "none";
          loseGif.style.display = "none";
          loserDolphin.style.display = "none";
          winOne.style.display = "none";
          winTwo.style.display = "none";
          winThree.style.display = "none";
          winFour.style.display = "none";
          celebration.style.display = "none";
          winSound.pause();
          loseSound.pause();
        }, 10000);
      }, 2000);

      setTimeout(() => {
        for (let i = 0; i < betBtn.length; i++) {
          myValue[i].firstElementChild.textContent = 0;
        }
        betCoins.firstElementChild.textContent = 0;
        showWinOrLose.textContent = "WIN";
        showWinOrLose.style.color = "white";
        winCount.firstElementChild.textContent = 0;
        winCount.firstElementChild.style.color = "orange";
        playPermission = true;
        // playBackgroundSound();
        mainBackgroundSound.play();
      }, 12500);

      setTimeout(() => {
        if (
          playPermission == true &&
          +myOwnCoin.firstElementChild.textContent == 0
        ) {
          outOfCoinAnimation.style.display = "block";
        }
      }, 13000);
    }
    bubbleClick.play();
  }, speed);
}
