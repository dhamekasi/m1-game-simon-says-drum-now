"use strict";

let game;
let splashScreen;
let gameScreen;
let gameOverScreen;

function buildDom(htmlString) {
  const div = document.createElement(`div`);
  div.innerHTML = htmlString;
  return div.children[0];
}

function createSplashScreen() {
  splashScreen = buildDom(`
    <main>
    <h1>Simon Says Drum Now!</h1>
    <button>Play!</button>
  </main>`);

  document.body.appendChild(splashScreen);
  const startButton = splashScreen.querySelector("button");
  startButton.addEventListener("click", function () {
    startGame();
  });
}

// create GameScreen
function createGameScreen() {
  gameScreen = buildDom(`
    <main class="game container">
    <div class="canvas-container">
      <canvas></canvas>
    </div>
    <footer>
      <div class="level">
        <span class="label">Level:</span>
        <span class="value"></span>
      </div>
      <div class="lives">
        <span class="label">Lives:</span>
        <span class="value"></span>
      </div>
    </footer>
  </main>
  `);

  document.body.appendChild(gameScreen);
}

// removeScreen
function removeScreen() {
  document.body.innerHTML = "";
}

function createGameOverScreen(level) {
  gameOverScreen = buildDom(`
  <main>
    <h1>Game over</h1>
    <p>You reached level: <span> ${level} </span></p>
    <button>Restart</button>
  </main>
  `);

  var restartButton = gameOverScreen.querySelector("button");
  restartButton.addEventListener("click", startGame);

  document.body.appendChild(gameOverScreen);
}

function startGame() {
  removeScreen();
  createGameScreen();

  game = new Game();
  game.gameScreen = gameScreen;

  game.start();
}

function endGame(level) {
  removeScreen();
  createGameOverScreen(level);
}

window.addEventListener("load", createSplashScreen);
