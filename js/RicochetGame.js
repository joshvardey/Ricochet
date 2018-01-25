function RicochetGame() {
  var victor = new Image();
  victor.src = "./images/VictorGAME.png";
  var pierre = new Image();
  pierre.src = "./images/PierreGAME.png";
  this.player = {
    player1: new Player(5, 250, 130, 230, pierre),
    player2: new Player(1035, 250, 170, 230, victor)
  };
  var second1 = new Image();
  second1.src = "./images/Second1alt.png";
  var second2 = new Image();
  second2.src = "./images/Second2alt.png";
  this.second = {
    second1: new Second(550, 0, 150, 50, second1),
    second2: new Second(550, 550, 150, 50, second2)
  };
}

RicochetGame.prototype.draw = function() {
  this.player.player1.draw();
  this.player.player2.draw();
  this.second.second1.draw();
  this.second.second2.draw();
};

RicochetGame.prototype.p1SecondControls = function() {
  if (k.isPressed(P1_LEFT)) {
    this.second.second1.move(-1);
  } else if (k.isPressed(P1_RIGHT)) {
    this.second.second1.move(1);
  }
};

RicochetGame.prototype.p1PlayerControls = function() {
  if (k.isPressed(P1_UP)) {
    this.player.player1.move(-1);
  } else if (k.isPressed(P1_DOWN)) {
    this.player.player1.move(1);
  } else if (k.isPressed(P1_SHOOT)) {
    this.player.player1.shoot(this.second.second1);
  }
};

RicochetGame.prototype.p2SecondControls = function() {
  if (k.isPressed(P2_LEFT)) {
    this.second.second2.move(-1);
  } else if (k.isPressed(P2_RIGHT)) {
    this.second.second2.move(1);
  }
};

RicochetGame.prototype.p2PlayerControls = function() {
  if (k.isPressed(P2_UP)) {
    this.player.player2.move(-1);
  } else if (k.isPressed(P2_DOWN)) {
    this.player.player2.move(1);
  } else if (k.isPressed(P2_SHOOT)) {
    this.player.player2.shoot(this.second.second2);
  }
};

RicochetGame.prototype.checkAllCollisions1 = function() {
  var p1 = g.player.player1;
  var s1 = g.second.second1;
  var p2 = g.player.player2;
  var s2 = g.second.second2;
  if (p1.moon.isColliding(s1)) {
    p1.moon.collideWithSecond(s1);
  } else if (p1.moon.isColliding(s2)) {
    p1.moon.collideWithSecond(s2);
  } else if (p1.moon.isColliding(p2)) {
    p1.moon.collideWithPlayer(p2, p1.moon);
    p1.moon = null;
    // } else if (p1.moon.isColliding(p1)) {
    //   p1.moon.collideWithPlayer(p1, p1.moon);
    //   p1.moon = null;
  } else if (p1.moon.offScreen()) {
    p1.moon = null;
  }
};

RicochetGame.prototype.checkAllCollisions2 = function() {
  var p1 = g.player.player1;
  var s1 = g.second.second1;
  var p2 = g.player.player2;
  var s2 = g.second.second2;
  if (p2.moon.isColliding(s1)) {
    p2.moon.collideWithSecond(s1);
  } else if (p2.moon.isColliding(s2)) {
    p2.moon.collideWithSecond(s2);
  } else if (p2.moon.isColliding(p1)) {
    p2.moon.collideWithPlayer(p1, p2.moon);
    p2.moon = null;
    // } else if (p2.moon.isColliding(p2)) {
    //   p2.moon.collideWithPlayer(p2, p2.moon);
    //   p2.moon = null;
  } else if (p2.moon.offScreen()) {
    p2.moon = null;
  }
};

RicochetGame.prototype.checkIfGameOver = function(p1Health, p2Health) {
  if (p1Health <= 0) {
    gameOver("victor");
  } else if (p2Health <= 0) {
    gameOver("pierre");
  }
};
