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
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
};

Moon.prototype.move = function() {
  this.x += this.x_speed;
  this.y += this.y_speed;
  if (this.x + this.x_speed > canvas.width || this.x + this.x_speed < 0) {
    this.x_speed *= -1;
    var wall = new Audio("./sounds/ricochet2.mp3");
    wall.play();
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
  var ping = new Audio("./sounds/ricochet.mp3");
  ping.play();
  this.y_speed = this.y_speed * -1;
  this.x_speed += Math.sign(this.x_speed) * Math.abs(second.x_speed) / 2;
  this.y += this.y_speed;
};

Moon.prototype.collideWithPlayer = function(player, moon) {
  var thud = new Audio("./sounds/swipe.mp3");
  thud.play();
  player.decreaseHealth(2);
};

Moon.prototype.offScreen = function(moon) {
  return this.y < 25 || this.y > 575;
};
