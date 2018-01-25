$(document).ready(function() {});

function drawScore(p1, p2) {
  $("#pierre-score").text("Pierre health: " + p1);
  $("#victor-score").text("Victor health: " + p2);
}

function gameOver(winner) {
  if (winner === "victor") {
    console.log("victor");
  } else if (winner === "pierre") {
    console.log("pierre");
  }
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var g;
var k = new KeyboardHandler();

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};

function startGame() {
  g = new RicochetGame();

  updateCanvas();
}

// this is where animation happens
function updateCanvas() {
  ctx.fillStyle = "white";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  g.draw();
  g.p1SecondControls();
  g.p2SecondControls();
  g.p1PlayerControls();
  g.p2PlayerControls();
  if (g.player.player1.moon !== null) {
    g.checkAllCollisions1();
  }
  if (g.player.player2.moon !== null) {
    g.checkAllCollisions2();
  }
  drawScore(g.player.player1.health, g.player.player2.health);
  g.checkIfGameOver(g.player.player1.health, g.player.player2.health);

  // this is always last
  requestAnimationFrame(updateCanvas);
}
