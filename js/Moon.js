function Moon(x, y, x_speed, y_speed) {
  this.x = x;
  this.y = y;
  this.x_speed = x_speed * 3;
  this.y_speed = y_speed * 3;
  this.width = 30;
  this.height = 30;
  this.image = moonImage;
}

var moonImage = new Image();
moonImage.src = "./images/creepymoon.png";

Moon.prototype.draw = function() {
  // ctx.fillStyle = "black";
  // ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
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
  this.x_speed += Math.sign(this.x_speed) * Math.abs(second.x_speed) / 2;
  this.y += this.y_speed;
};

Moon.prototype.collideWithPlayer = function(player, moon) {
  player.decreaseHealth(2);
  console.log(player);
};

Moon.prototype.offScreen = function(moon) {
  return this.y < 0 || this.y > 600;
};
