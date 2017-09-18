function setup () {
  createCanvas(960, 500);


}

function draw () {
  if (mouseIsPressed) {
    fill(0);
  }
  else {
    noFill();
  }

  beginShape();
  vertex(mouseX, mouseY);
  vertex(mouseX + random(5), mouseY + random(50));
  vertex(mouseX + random(5), mouseY + random(50));
  vertex(mouseX - random(10), mouseY - random(100));
  vertex(mouseX, mouseY);
  endShape();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
