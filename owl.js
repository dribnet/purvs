function setup () {
  createCanvas(960, 500);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

function draw() {
  background(204);
  owl(110, 110);
  owl(180, 110);
  owl(400, 110);
}

function owl(x, y) {
  push();
  translate(x, y);
  stroke(0,255,0);
  strokeWeight(7);
  line(0, -35, 0, -65); // Body
  noStroke();
  fill(255);
  rect(-17.5, -65, 35, 35); // Left eye dome
  rec(17.5, -65, 35, 35);  // Right eye dome
  arc(0, -65, 70, 70, 0, PI);  // Chin
  fill(0);
  rec(-14, -65, 8, 8); // Left eye
  rec(14, -65, 8, 8);  // Right eye
  quad(0, -58, 4, -51, 0, -44, -4, -51); // Beak
  pop();
}
