const loadingScreen = document.querySelector(".loading-screen");
const gameWelcome = document.querySelector(".game__welcome");
const profileBtn = document.querySelector(".game__welcome-top-item2");
const profileContainer = document.querySelector(".profileContainer");
const profilebackBtn = document.querySelector(".profilebackBtn");

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

profileBtn.addEventListener("click", function () {
  // playBubbleSound();
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
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
    gameWelcome.style.display = "none";
    profileContainer.style.display = "flex";
  }, 100);
});
profilebackBtn.addEventListener("click", function () {
  // playBubbleSound();
  this.classList.add("zoomoutAnimate");
  setTimeout(() => {
    this.classList.remove("zoomoutAnimate");
    gameWelcome.style.display = "block";
    profileContainer.style.display = "none";
  }, 100);
});
