function setup() {
  createCanvas(960, 500);
  background(248, 198, 207);
  smooth();

  var xstart = random(0),
      xnoise = xstart,
      ynoise = random(0);

  for (var y = 0; y <= height; y+=5) {
    ynoise += 1;
    xnoise  = xstart;
    for (var x = 0; x <= width; x+=5) {
      xnoise += 0.01;
      drawPoint(x, y, noise(xnoise, ynoise));
    }
  }
}

function draw (){

  fill(248, 198, 207, 30);
  noStroke();
  ellipse(100, 100, 170, 170);
  ellipse(260, 210, 20, 20);
  
  fill(248, 198, 207, 50);
  ellipse(180, 160, 130, 130);
  ellipse(280, 110, 10, 10);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(130, 210, 120, 120);
  ellipse(200, 90, 20, 20);
  ellipse(210, 250, 5, 5);
  arc(50, 50, 80, 80, 50, PI+QUARTER_PI);
}

function drawPoint(x, y, noiseFactor) {
  push();
  translate(x, y);
  rotate(noiseFactor * radians(360));
  stroke(x*0.1 + 255, 255, 255, 90);
  line(0, 0, 7, 0);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
