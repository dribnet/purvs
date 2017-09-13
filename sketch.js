function setup() {
  createCanvas(960, 500);
  background(57, 33, 21);
  smooth();

  var xstart = random(100),
      xnoise = xstart,
      ynoise = random(100);

  for (var y = 0; y <= height; y+=5) {
    ynoise += 0.1;
    xnoise  = xstart;
    for (var x = 0; x <= width; x+=5) {
      xnoise += 0.1;
      drawPoint(x, y, noise(xnoise, ynoise));
    }
  }
}

function draw (){

  fill(57, 33, 21, 20);
  noStroke();
  ellipse(120, 120, 200, 200);
  
  fill(57, 33, 21, 40);
  ellipse(200, 180, 150, 150);
  
  noFill();
  stroke(191, 100, 27);
  //strokeWeight(2);
  ellipse(150, 230, 150, 150);
  ellipse(220, 110, 50, 50);
}

function drawPoint(x, y, noiseFactor) {
  push();
  translate(x, y);
  rotate(noiseFactor * radians(360));
  //colorMode(HSB);
  stroke(x*0.1 + 191, 100, 27, 90);
  line(0, 0, 7, 0);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
