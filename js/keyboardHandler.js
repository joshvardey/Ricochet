class KeyboardHandler {
  constructor() {
    this.keys = {};
    this.init();
  }

  init() {
    document.addEventListener("keydown", this.keydown.bind(this));
    document.addEventListener("keyup", this.keyup.bind(this));
  }

  keydown(event) {
    this.keys[event.keyCode] = true;
  }

  keyup(event) {
    this.keys[event.keyCode] = false;
  }

  isPressed(keyCode) {
    return this.keys[keyCode];
  }
}

var P1_LEFT = 65;
var P1_RIGHT = 68;
var P1_UP = 87;
var P1_DOWN = 83;
var P1_SHOOT = 69;

var P2_LEFT = 75;
var P2_RIGHT = 186;
var P2_UP = 79;
var P2_DOWN = 76;
var P2_SHOOT = 73;
