var curRandomSeed;
var colorValue = 0.0;
var positionX = 0.0;

var spacing = 2;
var WaveWidth;
var angle = 0.0;
var WaveHeight = 15.0;
var period;
var dx;
var yPosition;


var wallpaperMode = true;

function setup () {
  createCanvas(960, 500);
  frameRate(60);
  curRandomSeed = int(focusedRandom(0, 100));
  smooth();
  angleMode(DEGREES);
  colorMode(HSL);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}

function cloudCurve (x, y, size, degrees) {
	push();
	translate(x, y);
	scale(size);
	rotate(degrees);
	fill(0, 0, 0);
	stroke(0, 0, 100);
	strokeJoin(ROUND);
	strokeWeight(0.5);
	
	beginShape();
	vertex(0, 0);
	bezierVertex(7, -8, 8, -3, 10, -3);
	endShape();
	 
	beginShape();	
	vertex(0, 0);
	bezierVertex(10, -7, 10, 7, 20, 0);
	
	vertex(20, 0);
	bezierVertex(25, -5, 20, -10, 17, -10);
	
	vertex(17, -10);
	bezierVertex(10, -11, 9, 0, 17, -1);
	
	vertex(17, -1);
	bezierVertex(23, -3, 19, -10, 15, -7);
	
	vertex(15, -7);
	bezierVertex(12, -4, 16, -2, 17, -4);	
	endShape();	
	pop();
}

function middleClouds (x, y, size, degrees) {
  push();
  translate(x, y);
  scale(size);
  rotate(degrees);
  stroke(0, 0, 100, 0.8);
  strokeJoin(ROUND);
  strokeWeight(0.3);

  beginShape();
  vertex(0, 0);
  bezierVertex(3, 2, 7, 2, 10, 0);

  vertex(10, 0);
  bezierVertex(10, -3, 12, -6, 15, -4);

  vertex(15, -4);
  bezierVertex(19, 0, 15, 4, 12.5, 2);

  vertex(12.5, 2);
  bezierVertex(17, 5, 21, -1, 18, -6);

  vertex(18, -6);
  bezierVertex(20, -7, 21, -7, 23, -5);

  vertex(23, -5);
  bezierVertex(28, -5, 29, -5, 30, 0);

  vertex(30, 0);
  bezierVertex(34, -2, 36, 6, 40, 4);

  vertex(40, 4);
  bezierVertex(37, 6, 35, 7, 32, 6);

  vertex(32, 6);
  bezierVertex(32, 6, 33, 12, 26, 12);

  vertex(26, 12);
  bezierVertex(20, 10, 23, 2, 27, 5);

  vertex(27, 5);
  bezierVertex(23, 0, 17, 7, 20, 11);

  vertex(20, 11);
  bezierVertex(13, 13, 11, 8, 9, 6);

  vertex(9, 6);
  bezierVertex(3, 5, 3, 4, 0, 0);

  endShape();
  pop();
}

function birds (x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noFill();
  stroke(0, 0, 0);
  strokeJoin(MITER);
	strokeWeight(1.5);

  beginShape();
  vertex(0, 0);
  bezierVertex(6, 0, 7, 0, 10, 5);
  vertex(10, 5);
  bezierVertex(12, 0, 16, 0, 20, 0);
  endShape();
  pop();
}

function waves (x, y, size, WaveWidth, period) {
  push();
  translate(x, y);
  scale(size);
  noStroke();
  fill(0, 0, 0);

  dx = (TWO_PI / period) * spacing;
  yPosition = new Array(floor(WaveWidth/spacing));
  
  angle += 1;
  var a = angle;
  for (var i=0; i<yPosition.length; i++) {
    yPosition[i] = sin(a)*WaveHeight;
    a += dx;
  }

  for (var j=0; j<yPosition.length; j++) {
    ellipse(j*spacing, yPosition[j], spacing);
  }
  pop();

}

function island (x, y, size) {
  push();
  translate(x, y);
  scale(size);  
  noStroke();
  fill(120, 60, 25);
  ellipse(0, -15, 20, 40);
  fill(40, 100, 80);
  ellipse(0, 0, 50, 15);
  for (var i=0; i<15; i++){
    stroke(60, 100, 85);
    strokeWeight(0.5);
    point(focusedRandom(-10, 10), focusedRandom(-5, 5));
  }

  pop();
}

function draw () {
  background(0, 0, 0);
  resetFocusedRandom(curRandomSeed);
  noiseSeed(curRandomSeed);

  if (wallpaperMode) {
    for(i=0; i<width; i+=25){
      for(j=0; j<height; j+=30){
        var size = focusedRandom(-3, 4);
        var degrees = focusedRandom(0, 360);
        cloudCurve(i, j, size, degrees);
      }
    }

    push();
    fill(0, 0, 0);  
    noStroke();
    blendMode(SOFT_LIGHT);
    ellipse(width/2, height/2, width*1.3);
    pop();

    push();
    noFill();
    stroke(60, 100, 55);
    strokeWeight(60);
    blendMode(SOFT_LIGHT);
    ellipse(width/2, height/2, width);
    pop();

    push();
    noFill();
    stroke(60, 100, 55);
    strokeWeight(40);
    blendMode(SOFT_LIGHT);
    ellipse(width/2, height/2, width/1.3);
    pop();

    push();
    noFill();
    stroke(60, 100, 55);
    strokeWeight(20);
    blendMode(SOFT_LIGHT);
    ellipse(width/2, height/2, width/2.2);
    pop();
  
    push();
    fill(0, 0, 100);
    noStroke();
    ellipse(width/2, height/2, width/3);
    pop();

    push();
    var size1 = focusedRandom(5, 6);
    var size2 = focusedRandom(3, 4);
    var size3 = focusedRandom(-5, -4);
    var size4 = focusedRandom(2, 3);

    var fromColor0 = color(105, 100, 80, 0.9);
    var toColor0 = color(285, 100, 80, 0.9);

    var fromColor1 = color(0, 100, 80, 0.9);
    var toColor1 = color(345, 100, 80, 0.9);
  
    var fromColor2 = color(270, 100, 80, 0.9);
    var toColor2 = color(60, 100, 80, 0.9);

    var fromColor3 = color(165, 100, 80, 0.9);
    var toColor3 = color(0, 100, 80, 0.9);

    colorValue = colorValue + 0.02;
    if (colorValue >= 1.0) {
      colorValue = 0.0;
    }

    var colorTransit0 = lerpColor(fromColor0, toColor0, colorValue); 
    var colorTransit1 = lerpColor(fromColor1, toColor1, colorValue);
    var colorTransit2 = lerpColor(fromColor2, toColor2, colorValue);
    var colorTransit3 = lerpColor(fromColor3, toColor3, colorValue); 
  
    positionX = positionX + .01;
    var noiseX = noise(positionX) * width;
    var consX1 = constrain(noiseX, width/3, width/1.9);
    var consX2 = constrain(noiseX, width/1.9, width/1.6);
  

    fill(colorTransit3);
    middleClouds(consX1, height/2.1, size4, -3);

    fill(colorTransit2);
    middleClouds(width/2.5, height/3, size2, 8);

    fill(colorTransit1);
    middleClouds(width/2.8, height/2.1, size1, 0);

    fill(colorTransit0);
    middleClouds(consX2, height/1.5, size3, 1);
	  pop();
  }

  else {
    fill(0, 0, 100);
    stroke(0, 0, 100);
    rect(0, 0, width, height);

    for(var i=0; i<80; i+=focusedRandom(1, 3)) {
      push();
      fill(0, 0, 0);
      middleClouds(focusedRandom(0, width/1.2), focusedRandom(0, 90), focusedRandom(1, 3), focusedRandom(0, 5));
      cloudCurve(focusedRandom(0, width/1.2), focusedRandom(0, 90), focusedRandom(-3, 3), 0);
      pop();
    }

    for(var i=0; i<4; i+=random(1,4)){
      birds(random(100, width/1.2), random(100, height/2.2), random(1, 3));
    }    

    waves(0, height/2, 1, width, 10.0);
    for(var num=0; num<4; num+=int(focusedRandom(1, 4))) {
      waves(focusedRandom(0, width/1.5), focusedRandom(height/1.7, height/1.1), 1, focusedRandom(width/5, width/3), focusedRandom(3, 10));
    }

    for(var i=0; i<2; i+=focusedRandom(1,2)){
      island(focusedRandom(100, width/1.5), focusedRandom(height/1.7, height/1.1), focusedRandom(1, 2));
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == ' ') {
    wallpaperMode = !wallpaperMode;
  }
}
