function Player(x, y, width, height, playerImage) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.x_speed = 0;
  this.y_speed = 10;
  this.moon = null;
  this.health = 10;
  this.image = playerImage;
}

Player.prototype.draw = function() {
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  if (this.moon) {
    this.moon.move();
    this.moon.draw();
  }
};

Player.prototype.move = function(direction) {
  direction = direction || 1;
  this.y += direction * this.y_speed;

  if (this.y < 0) {
    this.y = 0;
  } else if (this.y + this.height > 600) {
    this.y = 600 - this.height;
  }
};

Player.prototype.shoot = function(target) {
  if (this.moon) return;
  var moonPosition = this.midpoint();
  var angle = Math.atan2(
    target.y + target.height / 2 - moonPosition.y,
    target.x + target.width / 2 - moonPosition.x
  );

  this.moon = new Moon(
    moonPosition.x,
    moonPosition.y,
    Math.cos(angle),
    Math.sin(angle)
  );
};

Player.prototype.midpoint = function() {
  return {
    x: this.x,
    y: this.y + this.height / 2
  };
};

Player.prototype.decreaseHealth = function(e) {
  this.health -= e;
};
