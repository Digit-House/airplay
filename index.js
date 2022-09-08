const loadingScreen = document.querySelector('.loading-screen');
const gameWelcome = document.querySelector('.game__welcome');

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
