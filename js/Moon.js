function Moon(x, y) {
  this.x = x;
  this.y = y;
  this.x_speed = 3;
  this.y_speed = 3;
  this.width = 10;
  this.height = 10;
}

Moon.prototype.draw = function() {
  ctx.fillStyle = "black";
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

Moon.prototype.move = function() {
  this.x += this.x_speed;
  this.y += this.y_speed;
  if (this.x + this.x_speed > canvas.width || this.x + this.x_speed < 0) {
    this.x_speed *= -1;
  }
};

Moon.prototype.isColliding = function(object) {
  return (
    this.x < object.x + object.width &&
    this.x + this.width > object.x &&
    this.y < object.y + object.height &&
    this.height + this.y > object.y
  );
};

Moon.prototype.collideWithSecond = function(second) {
  this.y_speed = this.y_speed * -1;
  this.x_speed += second.x_speed / 2;
  this.y += this.y_speed;
};

Moon.prototype.collideWithPlayer = function(player) {
  //reset moon ?? pop??
  this.player.health = this.player.health - 5;
};

Moon.prototype.offScreen = function() {
  if (this.y < 0) {
    g.player.player1.health = g.player.player1.health - 2;
  } else if (this.y > 600) {
    g.player.player2.health = g.player.player2.health - 2;
  }
};
