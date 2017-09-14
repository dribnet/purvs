
var curRandomSeed;

function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function draw () {
  // if (mouseIsPressed) {
  //   fill(0);
  // }
  // else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);

  background(255);

  if (mouseIsPressed) {
    changeRandomSeed();
  }
  resetFocusedRandom(curRandomSeed);

  var x_steps = width / 30;
  var y_steps = height / 30;

  // for(var i=0;i<x_steps;i+=2) {
  //   var shift = focusedRandom(-20, 20, 6);
  //   var cur_x = i * 30 + shift;
  //   line(cur_x, 0, cur_x, height);
  // }

  for(var j=0;j<y_steps;j+=2) {
    var shift = focusedRandom(-10, 10, 6);
    var cur_y = j * 30 + shift;
    line(0, cur_y, width, cur_y);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
