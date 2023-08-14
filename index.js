const bubbleClick = document.querySelector('.bubbleClick');
const mainBackgroundSound = document.querySelector('.mainBackgroundSound');
mainBackgroundSound.autoplay = true;
mainBackgroundSound.loop = true;

const coinDropAudio = document.querySelector('.coinDropAudio');
const coinDropAudio2 = document.querySelector('.coinDropAudio2');
const selectSound = document.querySelector('.selectSound');
const backGroundSound = document.querySelector('.backGroundSound');
backGroundSound.loop = true;
const luckySpin = document.querySelector('.luckySpin');
const clockTick = document.querySelector('.clockTick');
const winSound = document.querySelector('.winSound');
const loseSound = document.querySelector('.loseSound');
const gameSpin = document.querySelector('.gameSpin');
gameSpin.loop = true;
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
const welcomePlay = document.querySelector('#welcomePlay');
const loadingBox = document.querySelector('.loadingBox');
const volumeControl = document.querySelector('.volumeControl');
const musicBtn = document.querySelector('.musicBtn');
const bettingTime = document.querySelector('.bettingTime');
const bettingTimePlusBtn = document.querySelector('.bettingTimePlusBtn');
const bettingTimeMinusBtn = document.querySelector('.bettingTimeMinusBtn');
const settingBackBtn = document.querySelector('.settingBackBtn');
const aboutBettingSlotsBtn = document.querySelector('.aboutBettingSlotsBtn');
const aboutBettingSlotsBackBtn = document.querySelector(
  '.aboutBettingSlotsBackBtn'
);

const signInBtn = document.querySelector('.signInBtn');
const name = document.querySelectorAll('.name');
const signOutBtn = document.querySelector('.signOutBtn');
const privacy = document.querySelector('.privacy');
const userAgreement = document.querySelector('.userAgreement');
const aboutBettingSlots = document.querySelector('.aboutBettingSlots');
const volumeBtn = document.querySelector('.volumeBtn');
const gameContainer = document.querySelector('.game__container');
const betBtn = document.querySelectorAll('.animalCircleImg');
const myValue = document.querySelectorAll('.myValue');
const centerImg = document.querySelectorAll('.img');
const betCoins = document.querySelector('.betCoins');
const myOwnCoin = document.querySelector('.myOwnCoin');
const startBtn = document.querySelector('.startBtn');
const removeBetBtn = document.querySelector('.removeBetBtn');
const showWinOrLose = document.querySelector('.showWinOrLose');
const winCount = document.querySelector('.winCount');
const quitBtn = document.querySelector('.quitBtn');
const warning = document.querySelector('.warning');
const okBtn = document.querySelector('.okBtn');
const outOfCoinWarning = document.querySelector('.outOfCoinWarning');
const okBtn2 = document.querySelector('.okBtn2');
const outOfCoinAnimation = document.querySelector('.outOfCoinAnimation');
const countDown = document.getElementById('count-down');
const circleEle = document.getElementById('circle');
const secondSpan = document.querySelector('#count-down span');
const quitConfirm = document.querySelector('.quitConfirm');
const yesBtn = document.querySelector('.yesBtn');
const noBtn = document.querySelector('.noBtn');
const randomAnimal = document.querySelector('.randomAnimal');
const showMenuCoin = document.querySelector('.wellcomeTotal');
const showCoinInProfile = document.querySelector('.showCoinInProfile');
const winOne = document.querySelector('.winning1');
const winTwo = document.querySelector('.winning2');
const winThree = document.querySelector('.winning3');
const winFour = document.querySelector('.winning4');
const loseGif = document.querySelector('.loserGif');
const celebration = document.querySelector('.celebration');
const loserDolphin = document.querySelector('.loserDolphin');
const privacyContainer = document.querySelector('.privacy__container');
const privacyBackBtnOne = document.querySelector('.privacyBack');
const privacyBackBtnTwo = document.querySelector('.privacyBackBtn');
const dailySpin = document.querySelectorAll('.lucky');
const spinBtn = document.querySelector('.spinBtn');
const spinCount = document.querySelector('.spinCount');
const spinCountDown = document.querySelector('.spinCountDown');
const spinHour = document.querySelector('.spinHour');
const SpinMin = document.querySelector('.SpinMin');
const spinSec = document.querySelector('.spinSec');
const spinGO = document.querySelector('.spinGO');
const dailyResult = document.querySelector('.dailyResult');
const dailyResultImg = document.querySelector('.dailyResultImg');
const dailyResultItext = document.querySelector('.dailyResultItext');
const dailyResultPText = document.querySelector('.dailyResultPText');
const getMoreCoin = document.querySelector('.get-coin');
const dailyRewardContainer = document.querySelector('.dailyRewardContainer');
const DailyRewardBackBtn = document.querySelector('.DailyRewardBackBtn');
const dailyRewardSpinHistoryBtn = document.querySelector(
  '.dailyRewardSpinHistoryBtn'
);
const dailyRewardSpinHistory = document.querySelector(
  '.dailyRewardSpinHistory'
);
const noHistoryText = document.querySelector('.noHistoryText');
const dailyRewardSpinHistoryBackBtn = document.querySelector(
  '.dailyRewardSpinHistoryBackBtn'
);
const historyCointainer = document.querySelector('.historyCointainer');
const userAgreement_container = document.querySelector(
  '.userAgreement_container'
);
const agreebtn = document.querySelector('.agreebtn');
const termsBackBtn = document.querySelector('.termsBackBtn');

const circles = document.querySelectorAll('.circles');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
const progressBar = document.getElementById('progress-bar');

const coinCon = document.querySelector('.game__welcome-top-item2-coin');
const profilePhoto = document.querySelectorAll('.profilePhoto');

const signInBtnCon = document.querySelector('.signInBtnCon');
const luckySpinBtn = document.querySelector('.luckySpinBtn');
const luckySpinContainer = document.querySelector('.luckySpinContainer');
const luckySpinBackBtn = document.querySelector('.luckSpinBackBtn');
const achievementTableCon = document.querySelector('.achievementTableCon');

const Days = document.querySelectorAll('.days');
const dateName = document.querySelectorAll('.days p');
const weekName = document.querySelector('.weekName');
const dailyPrize = document.querySelector('.dailyPrize');
const getCoin = document.querySelector('.getCoin');
let getDay = new Date().getDay();

// console.log(Days, Days[getDay]);

let getDate = new Date().getDate();
if (getDate >= 1 && getDate <= 7) {
  weekName.textContent = 'Week 1';
  updateProgressBarWidth(1);
} else if (getDate >= 8 && getDate <= 14) {
  weekName.textContent = 'Week 2';
  updateProgressBarWidth(2);
} else if (getDate >= 14 && getDate <= 21) {
  weekName.textContent = 'Week 3';
  updateProgressBarWidth(3);
} else if (getDate >= 21 && getDate <= 28) {
  weekName.textContent = 'Week 4';
  updateProgressBarWidth(4);
}
function randomCoin(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let euqal = randomCoin(20, 50);

let day = getDay === 0 ? 6 : getDay - 1;
Days.forEach((Day, index) => {
  if (index < day) {
    Day.style.filter = 'grayscale(0.9)';
  }
});
Days[day].className = 'plusClass';

dateName[day].textContent = 'Today';
// dateName[day].className = "bb";
const rewardsDay = Days[day];
let claimed = false;

function updateProgressBarWidth(week) {
  circles.forEach((v, index) => {
    if (week > index) {
      v.className = 'circles active';
    }
  });
  const actives = document.querySelectorAll('.active');
  const currentWidth = ((actives.length - 1) / (circles.length - 1)) * 100;

  progressBar.style.width = currentWidth + '%';

  // if (currentWidth === 0) {
  //   btnPrev.setAttribute('disabled', true);
  // } else if (currentWidth === 100) {
  //   btnNext.setAttribute('disabled', true);
  // } else {
  //   btnPrev.removeAttribute('disabled');
  //   btnNext.removeAttribute('disabled');
  // }
}

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import {
  getFirestore,
  setDoc,
  updateDoc,
  onSnapshot,
  doc,
  getDoc,
  query,
  orderBy,
  limit,
  collection,
  getDocs,
  WriteBatch,
  writeBatch,
} from 'firebase/firestore';
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from 'firebase/storage';
// import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// import { getPerformance } from 'firebase/performance';

const firebaseConfig = {
  apiKey: 'AIzaSyBEiZL9o73Fd5SL9eI7iCJQGQsScCbUWWQ',
  authDomain: 'airplay-77.firebaseapp.com',
  projectId: 'airplay-77',
  storageBucket: 'airplay-77.appspot.com',
  messagingSenderId: '468860823489',
  appId: '1:468860823489:web:579b1491c56f7e92513140',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
// setPersistence(auth, browserLocalPersistence);

const usersRef = collection(db, 'users');
const q = query(usersRef, orderBy('coin', 'desc'));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  achievementTableCon.innerHTML = '';
  const users = [];
  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });
  users.forEach((user, i) => {
    achievementTableCon.append(renderLeaderBoardPerson(user, i, users.length));
  });
});

{
  /* <div class="achievementPerson achievementPersonLastChild">
<p class="achievementName">John Wick</p>
<div class="achievementPoint">1194</div>
</div> */
}

async function resetCoinOfUser() {
  const coinResetStatusRef = doc(db, 'coinResetStatus', 'id');
  const status = await getDoc(coinResetStatusRef);
  const today = new Date(new Date().setUTCHours(0, 0, 0, 0));
  const coinStatusDate = status?.data()?.lastResetFor?.toDate();
  if (
    status.exists() &&
    coinStatusDate &&
    today - coinStatusDate < 1000 * 60 * 60 * 24 * 14
  ) {
    if (coinStatusDate.getUTCDate() == 15) {
      const nextMonthDate = new Date(
        Date.UTC(today.getUTCFullYear(), today.getUTCMonth() + 1, 1)
      );
      if (nextMonthDate.getTime() > today.getTime()) {
        return;
      }
    } else if (coinStatusDate.getUTCDate() == 1) {
      const fifteenDate = new Date(
        Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 15)
      );
      if (fifteenDate.getTime() > today.getTime()) {
        return;
      }
    }
  }
  const querySnapshot = await getDocs(collection(db, 'users'));
  const batch = writeBatch(db);
  querySnapshot.forEach((document) => {
    batch.update(doc(db, 'users', document.id), {
      coin: 500,
    });
  });

  batch.set(coinResetStatusRef, {
    lastResetFor:
      today.getDate() >= 15
        ? new Date(today.setDate(15))
        : new Date(today.setDate(1)),
  });

  await batch.commit();
  // if (user) user.coin = 500;
  // myOwnCoin.firstElementChild.textContent = 500;
  // showMenuCoin.textContent = +myOwnCoin.firstElementChild.textContent;
  // showCoinInProfile.textContent = +myOwnCoin.firstElementChild.textContent;
}

function renderLeaderBoardPerson(person, index, length) {
  const achievementPerson = document.createElement('div');
  achievementPerson.classList.add('achievementPerson');
  if (index === length - 1) {
    achievementPerson.classList.add('achievementPersonLastChild');
  }

  const personName = document.createElement('p');
  personName.classList.add('achievementName');
  personName.textContent = person.name;

  const achievementPoint = document.createElement('div');
  achievementPoint.classList.add('achievementPoint');
  achievementPoint.textContent = person.coin;

  if (index >= 0 && index <= 2) {
    const iElement = document.createElement('i');
    iElement.className =
      index === 0
        ? 'gold'
        : index === 1
        ? 'silver'
        : index === 2
        ? 'copper'
        : '';
    iElement.classList.add('fa-solid', 'fa-trophy');
    achievementPoint.append(iElement);
  }

  achievementPerson.append(personName, achievementPoint);
  return achievementPerson;
}

let user;
let uId = localStorage.getItem('token');
if (uId) {
  const docSnap = await getDoc(doc(db, 'users', uId));
  if (docSnap.exists()) {
    user = docSnap.data();
  } else {
    signOutUser();
  }
}

let counting;
let spinTimer = 86400;
let spinTimerId = 0;
onAuthStateChanged(auth, async (u) => {
  if (u) {
    uId = u.uid;
    const unsub = onSnapshot(doc(db, 'users', u.uid), (document) => {
      user = document.data();
      localStorage.setItem('token', u.uid);
      signInBtn.style.display = 'none';
      profilePhoto.forEach((v) => (v.src = user.profilePicUrl));
      myOwnCoin.firstElementChild.textContent = user.coin;
      showMenuCoin.textContent = +myOwnCoin.firstElementChild.textContent;
      showCoinInProfile.textContent = +myOwnCoin.firstElementChild.textContent;
      name.forEach((n) => (n.textContent = user.name));
      coinCon.style.display = 'flex';
      profileBtn.style.display = 'flex';
      signInBtnCon.style.display = 'none';
      gameWelcome.classList.remove('gray');
    });
    const docSnap = await getDoc(doc(db, 'users', uId)).then((res) => {
      user = res.data();
      const lastClaimedDay = user.dailyRewardLastClaimedDay?.toDate();
      const nextDate = lastClaimedDay
        ? new Date(
            Date.UTC(
              lastClaimedDay.getUTCFullYear(),
              lastClaimedDay.getUTCMonth(),
              lastClaimedDay.getUTCDate() + 1
            )
          )
        : undefined;
      if (nextDate && nextDate.getTime() > Date.now()) {
        dailyRewardClaimed();
      } else {
        dailyRewardNotClaimed();
      }
      if (user.luckySpin == null) {
        updateDoc(doc(db, 'users', uId), {
          luckySpin: {
            spinCount: 5,
            startTime: null,
          },
        }).then(() => {
          counting = 5;
          spinCountingStop();
        });
        return;
      }
      counting = user.luckySpin.spinCount;
      spinCount.textContent = 'Free Spin : ' + counting;
      if (counting == 0) {
        spinCount.style.display = 'none';
        spinCountDown.style.display = 'block';
        spinGO.style.color = 'red';
        const passedTime = Date.now() / 1000 - user.luckySpin.startTime;
        spinTimer = 86400 - Math.round(passedTime);
        spinCountingStart();
      } else if (counting != 0) {
        spinCountingStop();
      }
    });
  }
  if (!u) {
    uId = null;
    user = null;
    counting = 5;
    spinCountingStop();
    localStorage.removeItem('token');
    gameWelcome.classList.add('gray');
    coinCon.style.display = 'none';
    profileBtn.style.display = 'none';
    signInBtn.style.display = 'flex';
    signInBtnCon.style.display = 'block';
  }
});

async function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

function signOutUser() {
  // Sign out of Firebase.
  signOut(auth);
  uId = null;
}

function isUserSignedIn() {
  return !!auth.currentUser;
}

async function signInUser() {
  signIn().then(async () => {
    const { uid, displayName, email, photoURL } = auth.currentUser;
    uId = uid;
    const docSnap = await getDoc(doc(db, 'users', uid));
    if (!docSnap.exists()) {
      try {
        setDoc(doc(db, 'users', uid), {
          name: displayName,
          email: email,
          profilePicUrl: photoURL,
          coin: 500,
          luckySpin: {
            spinCount: 5,
            startTime: null,
          },
        });
      } catch (error) {
        console.error('Error writing new message to Firebase Database', error);
      }
    } else {
      user = docSnap.data();
    }
  });
}

signInBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    signInUser();
  }, 250);
});

signOutBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    signOutUser();
    settingContainer.style.display = 'none';
    gameWelcome.style.display = 'block';
  }, 250);
});

const animalsBar = document.querySelector('.animalsBar');
let animalList = [];
let srcStart = './assets/images/square-buttons/';

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
  let animalsBar = document.querySelector('.animalsBar');
  while (animalsBar.firstChild) {
    animalsBar.removeChild(animalsBar.firstChild);
  }
}

function generateAnimalImg(item) {
  const img = document.createElement('img');
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
    resetCoinOfUser(),
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
function gamePreloader() {
  return Promise.all([
    getImage('./assets/images/square-buttons/sea-bg.png'),
    getImage('./assets/images/btn/play.png'),
    getImage('./assets/images/btn/cross.png'),
    getImage('./assets/images/round-buttons/dog.png'),
    getImage('./assets/images/round-buttons/monkey.png'),
    getImage('./assets/images/round-buttons/sheep.png'),
    getImage('./assets/images/round-buttons/elephant.png'),
    getImage('./assets/images/round-buttons/seahorse.png'),
    getImage('./assets/images/round-buttons/jellyfish.png'),
    getImage('./assets/images/round-buttons/dolphin.png'),
    getImage('./assets/images/round-buttons/shark.png'),
    getImage('./assets/images/square-buttons/bird.png'),
    getImage('./assets/images/round-buttons/whale.png'),
    getImage('./assets/images/round-buttons/sea.png'),
    getImage('./assets/images/round-buttons/land.png'),
    getImage('./assets/images/square-buttons/dog(top corner).png'),
    getImage('./assets/images/square-buttons/whale(top corner).png'),
    getImage('./assets/images/square-buttons/seahorse(right side).png'),
    getImage('./assets/images/square-buttons/jellyfish(top corner).png'),
    getImage('./assets/images/square-buttons/whale(right side).png'),
    getImage('./assets/images/square-buttons/dolphin(bottom).png'),
    getImage('./assets/images/square-buttons/shark(right side).png'),
    getImage('./assets/images/square-buttons/elephant(bottom).png'),
    getImage('./assets/images/round-buttons/bird.png'),
    getImage('./assets/images/square-buttons/sheep(left side).png'),
    getImage('./assets/images/square-buttons/monkey(left side).png'),
    getImage('./assets/images/animation-gif/dog.gif'),
    getImage('./assets/images/animation-gif/sheep.gif'),
    getImage('./assets/images/animation-gif/elephant.gif'),
    getImage('./assets/images/animation-gif/seahorse.gif'),
    getImage('./assets/images/animation-gif/jellyfish.gif'),
    getImage('./assets/images/animation-gif/dolphin.gif'),
    getImage('./assets/images/animation-gif/shark.gif'),
    getImage('./assets/images/animation-gif/whale.gif'),
    getImage('./assets/images/animation-gif/monkey.gif'),
    getImage('./assets/images/animation-gif/birdAnimation.png'),
    getImage('./assets/images/animation-gif/outOfCoin.gif'),
    // getImage("./assets/images/btn/tick.png"),
    getImage(
      './assets/images/animation-gif/a7e63493c33a7b364f81ed6d71526908.gif'
    ),
    getImage('./assets/images/animation-gif/giphy.gif'),
    getImage('./assets/images/animation-gif/NR7Y.gif'),
  ]).then(() => {
    gameWelcome.style.display = 'none';
    loadingBox.style.display = 'none';
    gameContainer.style.display = 'flex';
  });
}
let menuController = true;
welcomePlay.addEventListener('click', function () {
  bubbleClick.play();
  mainBackgroundSound.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    if (!isUserSignedIn()) {
      signInUser();
    } else {
      menuController = false;
      loadingBox.style.display = 'flex';
      gamePreloader();
    }
  }, 210);
});

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
    mainBackgroundSound.play();
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
    mainBackgroundSound.src = '';
    backGroundSound.src = '';
  } else {
    volumeBtn.firstElementChild.classList = 'fa-solid fa-volume-high';
    // startAudio.play();
    isMuted = false;
    mainBackgroundSound.src = './assets/audios/mainBackgroundSound.mp3';
    backGroundSound.src = './assets/audios/backgroundSound.wav';
  }
  setting.isMusicOff = musicBtn.checked;
  localStorage.setItem('setting', JSON.stringify(setting));
}

volumeBtn.addEventListener('click', () => {
  gtag('event', 'click', {
    event_category: 'Button Click',
    event_label: 'My Button',
  });
});

function volumeBarFunction(value) {
  volumeControl.style.backgroundSize = value + '% 100%';
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
  localStorage.setItem('setting', JSON.stringify(setting));
  // if (isMuted) {
  //   startAudio.pause();
  // }
}

settingBtn.addEventListener('click', function () {
  bubbleClick.play();
  if (menuController == false) {
    return;
  }
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
aboutBettingSlotsBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    aboutBettingSlots.style.display = 'flex';
    settingContainer.style.display = 'none';
  }, 210);
});
aboutBettingSlotsBackBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    aboutBettingSlots.style.display = 'none';
    settingContainer.style.display = 'flex';
  }, 210);
});
privacy.addEventListener('click', function () {
  bubbleClick.play();
  settingContainer.style.display = 'none';
  privacyContainer.style.display = 'block';
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
  }, 210);
});

privacyBackBtnOne.addEventListener('click', function () {
  bubbleClick.play();
  privacyContainer.style.display = 'none';
  settingContainer.style.display = 'flex';
});

privacyBackBtnTwo.addEventListener('click', function () {
  bubbleClick.play();
  privacyContainer.style.display = 'none';
  settingContainer.style.display = 'flex';
});

userAgreement.addEventListener('click', function () {
  bubbleClick.play();
  userAgreement_container.style.display = 'block';
  settingContainer.style.display = 'none';
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
  }, 210);
});
agreebtn.addEventListener('click', function () {
  bubbleClick.play();
  userAgreement_container.style.display = 'none';
  settingContainer.style.display = 'flex';
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
  }, 210);
});
termsBackBtn.addEventListener('click', function () {
  bubbleClick.play();
  userAgreement_container.style.display = 'none';
  settingContainer.style.display = 'flex';
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
  }, 210);
});
profileBtn.addEventListener('click', function () {
  bubbleClick.play();
  if (menuController == false) {
    return;
  }
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
  if (menuController == false) {
    return;
  }
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

// InGameScreen----------------------------------------

okBtn.addEventListener('click', function () {
  bubbleClick.play();
  mainBackgroundSound.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    playPermission = true;
    warning.style.display = 'none';
  }, 100);
});
okBtn2.addEventListener('click', function () {
  bubbleClick.play();
  mainBackgroundSound.play();
  backGroundSound.pause();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    playPermission = true;
    outOfCoinWarning.style.display = 'none';
  }, 100);
});

function betting(i) {
  coinDropAudio.play();
  betBtn[i].classList.add('animalBtnClickAnimation');
  setTimeout(() => {
    coinDropAudio.pause();
    coinDropAudio.currentTime = 0;
    betBtn[i].classList.remove('animalBtnClickAnimation');
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
  let betHold;
  betBtn[i].addEventListener('click', function () {
    betting(i);
  });

  betBtn[i].addEventListener('mousedown', function () {
    betHold = setInterval(function () {
      betting(i);
    }, 90);
  });

  betBtn[i].addEventListener('mouseup', function () {
    clearInterval(betHold);
  });

  betBtn[i].addEventListener('mouseleave', function () {
    clearInterval(betHold);
  });
}
let count = setting.bettingTime;
let timerId = 0;
let playPermission = true;
let betPermission = false;
let preAmount;
startBtn.addEventListener('click', function () {
  bubbleClick.play();
  mainBackgroundSound.pause();
  backGroundSound.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
  }, 210);
  if (playPermission === false) {
    return;
  } else {
    quitConfirm.style.display = 'none';
    playPermission = false;
    betPermission = true;
    if (+myOwnCoin.firstElementChild.textContent === 0) {
      outOfCoinWarning.style.display = 'flex';
    } else {
      count = setting.bettingTime;
      circle.style.display = 'block';
      circleEle.style.stroke = '#ff7b01';
      secondSpan.style.color = '#ffe600';
      if (timerId !== 0) return;
      preAmount = +myOwnCoin.firstElementChild.textContent;
      timerId = setInterval(async function () {
        let s = count;
        s = s < 10 ? '0' + s : s;
        secondSpan.textContent = s;

        countDown.style.display = 'block';
        let radius = circleEle.r.baseVal.value;
        let circumference = radius * 2 * Math.PI;
        let barLength = (count * circumference) / setting.bettingTime;
        circleEle.setAttribute(
          'stroke-dasharray',
          barLength + ' ' + circumference
        );

        betPermission = true;
        if (count == Math.floor(setting.bettingTime / 3)) {
          backGroundSound.pause();
          clockTick.load();
          clockTick.play();
          circleEle.style.stroke = 'red';
          secondSpan.style.color = 'red';
        }
        if (count === 0) {
          clockTick.pause();
          secondSpan.textContent = 'GO';
        }
        if (count < 0) {
          countingEnd();
          updateDoc(doc(db, 'users', uId), {
            coin: +myOwnCoin.firstElementChild.textContent,
          });
          if (+betCoins.firstElementChild.textContent === 0) {
            warning.style.display = 'flex';
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
  countDown.style.display = 'none';
  circleEle.style.stroke = '#ff7b01';
  secondSpan.style.color = '#ffe600';
  betPermission = false;
}

removeBetBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
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

quitBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
  }, 210);
  if (!playPermission) return;
  quitConfirm.style.display = 'flex';
});

yesBtn.onclick = () => {
  bubbleClick.play();
  menuController = true;
  gameContainer.style.display = 'none';
  animalsBar.style.display = 'none';
  gameWelcome.style.display = 'block';
  quitConfirm.style.display = 'none';
};
noBtn.onclick = () => {
  bubbleClick.play();
  quitConfirm.style.display = 'none';
};

let finalAmount;
function check(x) {
  animalsBar.style.display = 'flex';
  if (x == 1 || x == 2 || x == 3) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[0].firstElementChild.textContent * 4;
    randomAnimal.style.display = 'block';
    randomAnimal.src = './assets/images/animation-gif/dog.gif';
    const animalItem = { srcEnd: 'dog(top corner).png' };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 29 || x == 30 || x == 31) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[1].firstElementChild.textContent * 6;
    randomAnimal.style.display = 'block';
    randomAnimal.src = './assets/images/animation-gif/monkey.gif';
    const animalItem = { srcEnd: 'monkey(left side).png' };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 25 || x == 26 || x == 27) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[2].firstElementChild.textContent * 12;
    randomAnimal.style.display = 'block';
    randomAnimal.src = './assets/images/animation-gif/sheep.gif';
    const animalItem = { srcEnd: 'sheep(left side).png' };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 21 || x == 22 || x == 23) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[3].firstElementChild.textContent * 24;
    randomAnimal.style.display = 'block';
    randomAnimal.src = './assets/images/animation-gif/elephant.gif';
    const animalItem = { srcEnd: 'elephant(bottom).png' };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 5 || x == 6 || x == 7) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[4].firstElementChild.textContent * 4;
    randomAnimal.style.display = 'block';
    randomAnimal.src = './assets/images/animation-gif/seahorse.gif';
    const animalItem = { srcEnd: 'seahorse(right side).png' };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 9 || x == 10 || x == 11) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[5].firstElementChild.textContent * 6;
    randomAnimal.style.display = 'block';
    randomAnimal.src = './assets/images/animation-gif/jellyfish.gif';
    const animalItem = { srcEnd: 'jellyfish(top corner).png' };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 13 || x == 14 || x == 15) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[6].firstElementChild.textContent * 12;
    randomAnimal.style.display = 'block';
    randomAnimal.src = './assets/images/animation-gif/dolphin.gif';
    const animalItem = { srcEnd: 'dolphin(bottom).png' };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 17 || x == 18 || x == 19) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[7].firstElementChild.textContent * 24;
    randomAnimal.style.display = 'block';
    randomAnimal.src = './assets/images/animation-gif/shark.gif';
    const animalItem = { srcEnd: 'shark(right side).png' };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 0 || x == 8 || x == 16 || x == 24) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[8].firstElementChild.textContent * 24;
    randomAnimal.style.display = 'block';
    randomAnimal.src = './assets/images/animation-gif/birdAnimation.png';
    const animalItem = { srcEnd: 'bird.png' };
    animalList.unshift(animalItem);
    renderAnimalList(animalsBar, animalList);
  }
  if (x == 4 || x == 12 || x == 20 || x == 28) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent +
      +myValue[9].firstElementChild.textContent * 48;
    randomAnimal.style.display = 'block';
    randomAnimal.src = './assets/images/animation-gif/whale.gif';
    const animalItem = { srcEnd: 'whale(left+bottom).png' };
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
    showWinOrLose.textContent = 'WIN';
    showWinOrLose.style.color = 'greenyellow';
    winCount.firstElementChild.textContent = x - y;
    winCount.firstElementChild.style.color = 'greenyellow';
    winOne.style.display = 'block';
    winTwo.style.display = 'block';
    winThree.style.display = 'block';
    winFour.style.display = 'block';
    celebration.style.display = 'block';
  } else {
    loseSound.load();
    loseSound.play();
    showWinOrLose.textContent = 'LOSE';
    showWinOrLose.style.color = 'rgb(253, 38, 38)';
    winCount.firstElementChild.textContent = y - x;
    winCount.firstElementChild.style.color = 'rgb(253, 38, 38)';
    loseGif.style.display = 'block';
    loserDolphin.style.display = 'block';
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
    if (!centerImg[i].className.includes('animate')) {
      centerImg[i].classList.add('animate');
    }
    if (i > 0) {
      centerImg[i - 1].classList.remove('animate');
    } else {
      centerImg[31].classList.remove('animate');
    }
    i++;
    number--;
    if (number == 0) {
      clearInterval(gameIntervel);
      let y = i - 1;
      gameSpin.pause();
      check(y);
      updateDoc(doc(db, 'users', uId), {
        coin: +myOwnCoin.firstElementChild.textContent,
      });
      setTimeout(() => {
        selectSound.play();
        centerImg[i - 1].classList.remove('animate');
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.add('animate');
        }, 200);
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.remove('animate');
        }, 400);
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.add('animate');
        }, 600);
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.remove('animate');
        }, 800);
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.add('animate');
        }, 1000);
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.remove('animate');
        }, 1200);
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.add('animate');
        }, 1400);
        setTimeout(() => {
          selectSound.play();
          centerImg[i - 1].classList.remove('animate');
        }, 1600);
      }, 500);

      setTimeout(() => {
        winOrLose(finalAmount, preAmount);
        setTimeout(() => {
          randomAnimal.style.display = 'none';
          loseGif.style.display = 'none';
          loserDolphin.style.display = 'none';
          winOne.style.display = 'none';
          winTwo.style.display = 'none';
          winThree.style.display = 'none';
          winFour.style.display = 'none';
          celebration.style.display = 'none';
          winSound.pause();
          loseSound.pause();
        }, 10000);
      }, 2000);

      setTimeout(() => {
        for (let i = 0; i < betBtn.length; i++) {
          myValue[i].firstElementChild.textContent = 0;
        }
        betCoins.firstElementChild.textContent = 0;
        showWinOrLose.textContent = 'WIN';
        showWinOrLose.style.color = 'white';
        winCount.firstElementChild.textContent = 0;
        winCount.firstElementChild.style.color = 'orange';
        playPermission = true;
        // playBackgroundSound();
        mainBackgroundSound.play();
      }, 12500);

      setTimeout(() => {
        if (
          playPermission == true &&
          +myOwnCoin.firstElementChild.textContent == 0
        ) {
          outOfCoinAnimation.style.display = 'block';
        }
      }, 13000);
    }
    bubbleClick.play();
  }, speed);
}

getMoreCoin.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    if (!playPermission) return;
    gameContainer.style.display = 'none';
    dailyRewardContainer.style.display = 'flex';
  }, 210);
});

DailyRewardBackBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    if (dailyIntervel) {
      return;
    }
    dailyRewardContainer.style.display = 'none';
    gameContainer.style.display = 'flex';
  }, 210);
});

dailyRewardSpinHistoryBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    dailyRewardContainer.style.display = 'none';
    dailyRewardSpinHistory.style.display = 'flex';
  }, 210);
});

dailyRewardSpinHistoryBackBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    luckySpinContainer.style.display = 'flex';
    dailyRewardSpinHistory.style.display = 'none';
  }, 210);
});

luckySpinBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    dailyRewardContainer.style.display = 'none';
    luckySpinContainer.style.display = 'flex';
  }, 210);
});

luckySpinBackBtn.addEventListener('click', function () {
  bubbleClick.play();
  this.classList.add('zoomoutAnimate');
  setTimeout(() => {
    this.classList.remove('zoomoutAnimate');
    if (dailyIntervel) {
      return;
    }
    luckySpinContainer.style.display = 'none';
    dailyRewardContainer.style.display = 'flex';
  }, 210);
});

let dailyIntervel = 0;
let d = 0;
let dailyNumber = true;
// let counting = 5;
// spinCount.textContent = 'Free Spin : ' + counting;

function dailySpinCircle(random, speed) {
  let number = random;
  if (dailyIntervel !== 0) {
    return;
  }
  dailyIntervel = setInterval(() => {
    if (d == 8) {
      d = 0;
    }
    if (!dailySpin[d].className.includes('luckyInimate')) {
      dailySpin[d].classList.add('luckyInimate');
    }
    if (d > 0) {
      dailySpin[d - 1].classList.remove('luckyInimate');
    } else {
      dailySpin[7].classList.remove('luckyInimate');
    }
    d++;
    number--;
    if (number == 0) {
      clearInterval(dailyIntervel);
      win(d - 1);
      setTimeout(() => {
        selectSound.play();
        dailySpin[d - 1].classList.remove('luckyInimate');
        setTimeout(() => {
          selectSound.play();
          dailySpin[d - 1].classList.add('luckyInimate');
        }, 200);
        setTimeout(() => {
          selectSound.play();
          dailySpin[d - 1].classList.remove('luckyInimate');
        }, 400);
        setTimeout(() => {
          selectSound.play();
          dailySpin[d - 1].classList.add('luckyInimate');
        }, 600);
        setTimeout(() => {
          selectSound.play();
          dailySpin[d - 1].classList.remove('luckyInimate');
        }, 800);
        setTimeout(() => {
          selectSound.play();
          dailySpin[d - 1].classList.add('luckyInimate');
        }, 1000);
        setTimeout(() => {
          selectSound.play();
          dailySpin[d - 1].classList.remove('luckyInimate');
        }, 1200);
        setTimeout(() => {
          selectSound.play();
          dailySpin[d - 1].classList.add('luckyInimate');
        }, 1400);
        setTimeout(() => {
          dailySpin[d - 1].classList.remove('luckyInimate');
        }, 1600);
      }, 500);
      setTimeout(() => {
        resultWinOrDraw(d - 1);
        dailyResult.style.display = 'flex';
      }, 1000);
      setTimeout(() => {
        dailyResult.style.display = 'none';
        dailyResultImg.src = '';
        dailyResultItext.classList.remove('fa-face-sad-tear');
        dailyNumber = true;
        dailyIntervel = 0;
      }, 5000);
    }
    luckySpin.load();
    luckySpin.play();
  }, speed);
}

spinBtn.addEventListener('click', function () {
  bubbleClick.play();
  if (counting == 0) {
    return;
  } else {
    if (!dailyNumber) {
      return;
    } else {
      counting--;
      updateDoc(doc(db, 'users', uId), {
        luckySpin: {
          spinCount: counting,
          startTime: null,
        },
      });
      spinCount.textContent = 'Free Spin : ' + counting;
      dailyNumber = false;
      let random = getRandomInt(25);
      dailySpinCircle(null, 100);
      setTimeout(() => {
        clearInterval(dailyIntervel);
        dailyIntervel = 0;
        dailySpinCircle(null, 150);
      }, 2000);
      setTimeout(() => {
        clearInterval(dailyIntervel);
        dailyIntervel = 0;
        dailySpinCircle(null, 180);
      }, 2500);
      setTimeout(() => {
        clearInterval(dailyIntervel);
        dailyIntervel = 0;
        dailySpinCircle(random, 350);
      }, 4000);
      if (counting == 0) {
        updateDoc(doc(db, 'users', uId), {
          luckySpin: {
            spinCount: counting,
            startTime: Date.now() / 1000,
          },
        });
        spinCount.style.display = 'none';
        spinCountDown.style.display = 'block';
        spinGO.style.color = 'red';
        spinCountingStart();
      }
    }
  }
});

function win(x) {
  if (x == 0) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent + 48;
    showMenuCoin.textContent = +myOwnCoin.firstElementChild.textContent;
    showCoinInProfile.textContent = +myOwnCoin.firstElementChild.textContent;
  }
  if (x == 1) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent + 24;
    showMenuCoin.textContent = +myOwnCoin.firstElementChild.textContent;
    showCoinInProfile.textContent = +myOwnCoin.firstElementChild.textContent;
  }
  if (x == 2 || x == 6) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent + 12;
    showMenuCoin.textContent = +myOwnCoin.firstElementChild.textContent;
    showCoinInProfile.textContent = +myOwnCoin.firstElementChild.textContent;
  }
  if (x == 3 || x == 7) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent + 4;
    showMenuCoin.textContent = +myOwnCoin.firstElementChild.textContent;
    showCoinInProfile.textContent = +myOwnCoin.firstElementChild.textContent;
  }
  if (x == 4 || x == 5) {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent + 0;
    showMenuCoin.textContent = +myOwnCoin.firstElementChild.textContent;
    showCoinInProfile.textContent = +myOwnCoin.firstElementChild.textContent;
  }
  updateDoc(doc(db, 'users', uId), {
    coin: +myOwnCoin.firstElementChild.textContent,
  });
}

function spinCountingStart() {
  if (spinTimerId !== 0) {
    return;
  }
  spinTimerId = setInterval(function () {
    spinTimer--;
    updateText(spinTimer);
    if (spinTimer < 0) {
      spinCountingStop();
    }
  }, 1000);
}

function spinCountingStop() {
  clearInterval(spinTimerId);
  spinTimerId = 0;
  spinTimer = 86400;
  if (counting == 0) {
    counting = 5;
    updateDoc(doc(db, 'users', uId), {
      luckySpin: {
        spinCount: 5,
        startTime: null,
      },
    });
  }
  spinGO.style.color = '#00ff2a';
  spinCountDown.style.display = 'none';
  spinCount.style.display = 'block';
  spinCount.textContent = 'Free Spin : ' + counting;
  updateText(spinTimer);
}

function updateText(timer) {
  const hour = Math.floor(timer / 3600);
  const min = Math.floor(timer / 60) % 60;
  const sec = timer % 60;
  spinHour.textContent = hour < 10 ? '0' + hour.toString() : hour;
  SpinMin.textContent = min < 10 ? '0' + min.toString() : min;
  spinSec.textContent = sec < 10 ? '0' + sec.toString() : sec;
}

function resultWinOrDraw(x) {
  if (x == 0) {
    dailyResultImg.src = './assets/images/square-buttons/whale(top corner).png';
    dailyResultPText.textContent = 'You Win : 48 Coins';
    var currentdate = new Date();
    spinHistoryList.unshift({
      src: './assets/images/square-buttons/whale(top corner).png',
      time:
        currentdate.getHours() +
        ':' +
        currentdate.getMinutes() +
        ':' +
        currentdate.getSeconds(),
      date:
        currentdate.getDate() +
        '/' +
        (currentdate.getMonth() + 1) +
        '/' +
        currentdate.getFullYear(),
    });
    renderSpinHistoryList(historyCointainer, spinHistoryList);
  }
  if (x == 1) {
    dailyResultImg.src = './assets/images/square-buttons/bird.png';
    dailyResultPText.textContent = 'You Win : 24 Coins';
    var currentdate = new Date();
    spinHistoryList.unshift({
      src: './assets/images/square-buttons/bird.png',
      time:
        currentdate.getHours() +
        ':' +
        currentdate.getMinutes() +
        ':' +
        currentdate.getSeconds(),
      date:
        currentdate.getDate() +
        '/' +
        (currentdate.getMonth() + 1) +
        '/' +
        currentdate.getFullYear(),
    });
    renderSpinHistoryList(historyCointainer, spinHistoryList);
  }
  if (x == 2) {
    dailyResultImg.src = './assets/images/square-buttons/dolphin(bottom).png';
    dailyResultPText.textContent = 'You Win : 12 Coins';
    var currentdate = new Date();
    spinHistoryList.unshift({
      src: './assets/images/square-buttons/dolphin(bottom).png',
      time:
        currentdate.getHours() +
        ':' +
        currentdate.getMinutes() +
        ':' +
        currentdate.getSeconds(),
      date:
        currentdate.getDate() +
        '/' +
        (currentdate.getMonth() + 1) +
        '/' +
        currentdate.getFullYear(),
    });
    renderSpinHistoryList(historyCointainer, spinHistoryList);
  }
  if (x == 3) {
    dailyResultImg.src =
      './assets/images/square-buttons/seahorse(right side).png';
    dailyResultPText.textContent = 'You Win : 4 Coins';
    var currentdate = new Date();
    spinHistoryList.unshift({
      src: './assets/images/square-buttons/seahorse(right side).png',
      time:
        currentdate.getHours() +
        ':' +
        currentdate.getMinutes() +
        ':' +
        currentdate.getSeconds(),
      date:
        currentdate.getDate() +
        '/' +
        (currentdate.getMonth() + 1) +
        '/' +
        currentdate.getFullYear(),
    });
    renderSpinHistoryList(historyCointainer, spinHistoryList);
  }
  if (x == 6) {
    dailyResultImg.src = './assets/images/square-buttons/sheep(left side).png';
    dailyResultPText.textContent = 'You Win : 12 Coins';
    var currentdate = new Date();
    spinHistoryList.unshift({
      src: './assets/images/square-buttons/sheep(left side).png',
      time:
        currentdate.getHours() +
        ':' +
        currentdate.getMinutes() +
        ':' +
        currentdate.getSeconds(),
      date:
        currentdate.getDate() +
        '/' +
        (currentdate.getMonth() + 1) +
        '/' +
        currentdate.getFullYear(),
    });
    renderSpinHistoryList(historyCointainer, spinHistoryList);
  }
  if (x == 7) {
    dailyResultImg.src = './assets/images/square-buttons/dog(top corner).png';
    dailyResultPText.textContent = 'You Win : 4 Coins';
    var currentdate = new Date();
    spinHistoryList.unshift({
      src: './assets/images/square-buttons/dog(top corner).png',
      time:
        currentdate.getHours() +
        ':' +
        currentdate.getMinutes() +
        ':' +
        currentdate.getSeconds(),
      date:
        currentdate.getDate() +
        '/' +
        (currentdate.getMonth() + 1) +
        '/' +
        currentdate.getFullYear(),
    });
    renderSpinHistoryList(historyCointainer, spinHistoryList);
  }
  if (x == 4 || x == 5) {
    dailyResultItext.classList = 'fa-solid fa-face-sad-tear';
    dailyResultPText.textContent = 'Good Luck Next Time';
    var currentdate = new Date();
    spinHistoryList.unshift({
      src: './assets/images/square-buttons/thankYou.png',
      time:
        currentdate.getHours() +
        ':' +
        currentdate.getMinutes() +
        ':' +
        currentdate.getSeconds(),
      date:
        currentdate.getDate() +
        '/' +
        (currentdate.getMonth() + 1) +
        '/' +
        currentdate.getFullYear(),
    });
    renderSpinHistoryList(historyCointainer, spinHistoryList);
  }
}

let spinHistoryList = [];

function renderSpinHistoryList(historyCointainer, spinHistoryList) {
  if (spinHistoryList.length == 0) {
    noHistoryText.style.display = 'block';
  } else {
    noHistoryText.style.display = 'none';
  }
  cleanHistoryList();
  if (spinHistoryList.length > 5) {
    for (let i = 0; i < 5; i++) {
      const animal = spinHistoryList[i];
      const animalItem = generateHistoryList(animal);
      historyCointainer.appendChild(animalItem);
    }
  } else {
    for (let i = 0; i < spinHistoryList.length; i++) {
      const animal = spinHistoryList[i];
      const animalItem = generateHistoryList(animal);
      historyCointainer.appendChild(animalItem);
    }
  }
}

function cleanHistoryList() {
  let historyCointainer = document.querySelector('.historyCointainer');
  while (historyCointainer.firstChild) {
    historyCointainer.removeChild(historyCointainer.firstChild);
  }
}

function generateHistoryList(item) {
  const rewardSpinHistoryList = document.createElement('div');
  rewardSpinHistoryList.className = 'rewardSpinHistoryList';
  const randomImg = document.createElement('img');
  randomImg.className = 'randomImg';
  randomImg.src = item.src;
  const currentTime = document.createElement('p');
  currentTime.className = 'currentTime';
  currentTime.innerText = item.time;
  const currentDate = document.createElement('p');
  currentDate.className = 'currentDate';
  currentDate.innerText = item.date;

  rewardSpinHistoryList.append(randomImg, currentTime, currentDate);
  return rewardSpinHistoryList;
}

function dailyRewardClaimed() {
  claimed = true;
  rewardsDay.className = 'days';
  const Tick = document.createElement('img');
  Tick.src = './assets/images/btn/tick.png';
  rewardsDay.appendChild(Tick);
  Tick.className = 'Tick';
}

function dailyRewardNotClaimed() {
  claimed = false;
  rewardsDay.className = 'plusClass';
  const Tick = rewardsDay.querySelector('.Tick');
  if (Tick) {
    Tick.remove();
  }
}

rewardsDay.addEventListener('click', function () {
  if (claimed) return;
  bubbleClick.play();
  dailyRewardClaimed();
  dailyPrize.style.display = 'flex';
  setTimeout(() => {
    dailyPrize.style.display = 'none';
  }, '5000');
  if (day === 6) {
    myOwnCoin.firstElementChild.textContentt =
      +myOwnCoin.firstElementChild.textContent + euqal;
    getCoin.textContent = euqal;
  } else {
    myOwnCoin.firstElementChild.textContent =
      +myOwnCoin.firstElementChild.textContent + 20;
    getCoin.textContent = 20;
  }
  showMenuCoin.textContent = +myOwnCoin.firstElementChild.textContent;
  showCoinInProfile.textContent = +myOwnCoin.firstElementChild.textContent;
  updateDoc(doc(db, 'users', uId), {
    coin: +myOwnCoin.firstElementChild.textContent,
    dailyRewardLastClaimedDay: new Date(),
  });
});
