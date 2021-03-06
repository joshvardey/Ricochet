function Second(x, y, width, height, secondImage) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.x_speed = 10;
  this.y_speed = 0;
  this.image = secondImage;
}

Second.prototype.draw = function() {
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
};

Second.prototype.move = function(direction) {
  direction = direction || 1;
  this.x += direction * this.x_speed;

  if (this.x < 0) {
    this.x = 0;
  } else if (this.x + this.width > 1200) {
    this.x = 1200 - this.width;
  }
};
