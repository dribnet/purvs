function setup () {
  createCanvas(960, 500);
}

function draw () {
  if (mouseIsPressed) {
    fill(0);
  }
  else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
