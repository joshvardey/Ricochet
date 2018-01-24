var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var g;
var k = new KeyboardHandler();

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    g = new RicochetGame();

    updateCanvas();
  }
};

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
  g.checkAllCollisions();

  // this is always last
  requestAnimationFrame(updateCanvas);
}
