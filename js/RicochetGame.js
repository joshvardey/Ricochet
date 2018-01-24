function RicochetGame() {
  this.player = {
    player1: new Player(50, 250, 10, 100),
    player2: new Player(1150, 250, 10, 100)
  };

  this.second = {
    second1: new Second(550, 50, 100, 10),
    second2: new Second(550, 550, 100, 10)
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
    this.player.player1.shoot();
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
    this.player.player2.shoot();
  }
};

RicochetGame.prototype.pointsCounter = function() {};

RicochetGame.prototype.handleCollisions = function() {};

RicochetGame.prototype.checkAllCollisions = function() {
  var p1 = g.player.player1;
  var p2 = g.player.player2;
  var s1 = g.second.second1;
  var s2 = g.second.second2;
  if (p1.moonBullet[i].isColliding(s1)) {
    p1.moonBullet[i].collideWithSecond(s1);
  } else if (p1.moonBullet[i].isColliding(s2)) {
    p1.moonBullet[i].collideWithSecond(s2);
  } else if (p1.moonBullet[i].isColliding(p1)) {
    p1.moonBullet[i].collideWithPlayer(p1);
  } else if (p1.moonBullet[i].isColliding(p2)) {
    p1.moonBullet[i].collideWithPlayer(p2);
  } else if (p2.moonBullet[i].isColliding(s1)) {
    p2.moonBullet[i].collideWithSecond(s1);
  } else if (p2.moonBullet[i].isColliding(s2)) {
    p2.moonBullet[i].collideWithSecond(s2);
  } else if (p2.moonBullet[i].isColliding(p1)) {
    p2.moonBullet[i].collideWithPlayer(p1);
  } else if (p2.moonBullet[i].isColliding(p2)) {
    p2.moonBullet[i].collideWithPlayer(p2);
  }
};
