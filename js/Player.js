function Player(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.x_speed = 0;
  this.y_speed = 10;
  this.moonBullets = [];
  this.health = 10;
}

Player.prototype.draw = function() {
  ctx.fillStyle = "black";
  ctx.fillRect(this.x, this.y, this.width, this.height);
  if (this.moonBullets) {
    for (let i = 0; i < this.moonBullets.length; i++) {
      this.moonBullets[i].draw();
      this.moonBullets[i].move();
    }
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

Player.prototype.shoot = function() {
  var moonPosition = this.midpoint();
  this.moonBullets.push(new Moon(moonPosition.x, moonPosition.y));
};

Player.prototype.midpoint = function() {
  return {
    x: this.x,
    y: this.y + this.height / 2
  };
};
