function setup () {
  createCanvas(960, 500);
}

function draw () {
  if (mouseIsPressed) {
    stroke(191, 100, 27);
    fill(57, 33, 21);
  }
  else {
    stroke(168, 133, 95);
    fill(57, 33, 21);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
