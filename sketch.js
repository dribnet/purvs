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
	fill(0);
	stroke(255);
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

function draw () {
  background(0);
  resetFocusedRandom(curRandomSeed);

  for(i=0; i<width; i+=20){
    for(j=0; j<height; j+=25){
      var size = focusedRandom(-3, 4);
      var degrees = focusedRandom(0, 360);
      cloudCurve(i, j, size, degrees);
    }
  }

  push();
  fill(0, 0, 0);
  blendMode(SOFT_LIGHT);
  noStroke();
  ellipse(width/2, height/2, width*1.5);
  pop();

  push();
  fill(0, 0, 25);
  noStroke();
  blendMode(SOFT_LIGHT);
  ellipse(width/2, height/2, width);
  pop();

  push();
  fill(0, 0, 50);
  noStroke();
  blendMode(SOFT_LIGHT);
  ellipse(width/2, height/2, width/1.5);
  pop();

  push();
  noFill();
  stroke(0, 0, 0);
  strokeWeight(3);
  ellipse(width/2, height/2, width/2.5);
  pop();
  
  push();
  fill(0, 0, 100);
  noStroke();
  ellipse(width/2, height/2, width/3);
  pop();
	

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
