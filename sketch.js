var curRandomSeed;

function setup () {
  createCanvas(960, 500);
  curRandomSeed = int(focusedRandom(0, 100));
  smooth();
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

function middleClouds (x, y, size, degrees, hue) {
  push();
  translate(x, y);
  scale(size);
  rotate(degrees);
  fill(hue, 100, 75);
  stroke(0, 0, 100);
  strokeJoin(ROUND);
  strokeWeight(0.5);

  beginShape();
  vertex(0, 0);
  bezierVertex(3, 2, 7, 2, 10, 0);

  vertex(10, 0);
  bezierVertex(10, -3, 12, -6, 15, -4);

  vertex(15, -4);
  bezierVertex(19, 0, 15, 4, 12.5, 2);

  endShape();
  pop();
}

function draw () {
  background(0, 0, 0);
  resetFocusedRandom(curRandomSeed);

  for(i=0; i<width; i+=25){
    for(j=0; j<height; j+=30){
      var size = focusedRandom(-3, 4);
      var degrees = focusedRandom(-90, 90);
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
  fill(0, 0, 0);
  noStroke();
  ellipse(width/2, height/2, width/3);
  pop();

  // for(d=0; d<width/3; d+=20) {
  //   for(f=0; f<height/3; f+=20){
  //     var size = 10;
  //     var degrees = 0;
  //     var hue = focusedRandom(0, 345);

  //     middleClouds(d, f, size, degrees, hue);
  //   }
  // }

  middleClouds(width/2, height/2, 8, 0, 0);
	

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
