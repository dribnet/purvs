let angle = Math.PI * 2 * Math.random();
let level = 0;
const maxLevel = 4;
const branches = 2;

function setup () {
  createCanvas(960, 500);
  // angle = Math.PI * 2 * Math.random();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

function drawLine(level) {
  if (level > maxLevel) {
    return;
  }

  stroke(255);
  strokeWeight(3);
  line(0, 0, 200, 0);
  // noStroke();

  for (let i = 1; i < branches + 1; i++) {
    push();
    translate(200 * i / (branches + 1), 0);
    scale(0.5, 0.5);

    push();
    rotate(angle);
    drawLine(level + 1);
    pop();

    push();
    rotate(-angle);
    drawLine(level + 1);
    pop(); 
    pop(); 
  }

}

function draw() {
  background(204);
  push();
  translate(width/2, height/2);
  for (let i = 0; i < 6; i++) {
      drawLine(0);
      rotate(Math.PI * 2 / 6);
  }
  pop();
 
}
