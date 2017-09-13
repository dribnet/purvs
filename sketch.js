// global variables
var w = 960;
var h = 500;
var curRandomSeed;

//setup
function setup () {
  angleMode(DEGREES);
  createCanvas(w, h);
  curRandomSeed = int(focusedRandom(0, 100));
}


function draw () {

  resetFocusedRandom(curRandomSeed);
   background(155);
  centrePattern(w,h);


}

function centrePattern(xW,yH){
  push();
  translate(xW/2,yH/2);
  rotate(100);
  translate(-xW/2,-yH/2);
  rectMode(CORNER);
  fill(239,235,202);
  noStroke();
rect(0,0,xW,yH);
rect(xW/3,-yH/4,xW,yH);
rect(-xW/3,yH/4,xW,yH);
stroke(0);
fill(0)
  
  wobblyXYLine(xW,yH);
  push();
  translate(0,30);
wobblyXYLine(xW,yH);
pop();
push();
translate(0,-40);
wobblyXYLine(xW,yH);
pop();

//section of 3
push();
translate(0,-150);
  wobblyXYLine(xW,yH);
  push();
  translate(0,30);
wobblyXYLine(xW,yH);
pop();
push();
translate(0,-40);
wobblyXYLine(xW,yH);
pop();
pop();

//section of 3
push();
translate(0,-300);
  wobblyXYLine(xW,yH);
  push();
  translate(0,30);
wobblyXYLine(xW,yH);
pop();
push();
translate(0,-40);
wobblyXYLine(xW,yH);
pop();
pop();

//section of 3
push();
translate(0,300);
  wobblyXYLine(xW,yH);
  push();
  translate(0,30);
wobblyXYLine(xW,yH);
pop();
push();
translate(0,-40);
wobblyXYLine(xW,yH);
pop();
pop();


//section of 3
push();
translate(0,150);
  wobblyXYLine(xW,yH);
  push();
  translate(0,30);
wobblyXYLine(xW,yH);
pop();
push();
translate(0,-40);
wobblyXYLine(xW,yH);
pop();
pop();




//section of 3
push();
translate(0,-450);
  wobblyXYLine(xW,yH);
  push();
  translate(0,30);
wobblyXYLine(xW,yH);
pop();
push();
translate(0,-40);
wobblyXYLine(xW,yH);
pop();
pop();


//section of 3
push();
translate(0,450);
  wobblyXYLine(xW,yH);
  push();
  translate(0,30);
wobblyXYLine(xW,yH);
pop();
push();
translate(0,-40);
wobblyXYLine(xW,yH);
pop();
pop();
pop();
}








//creates a line that deviates but only in the y plane
function wobblyYLine(xW, yH){
  beginShape();
vertex(0,0-focusedRandom(0,0));
vertex(xW/20,yH/20-focusedRandom(-0,0));
vertex(xW/15,yH/15-focusedRandom(-0,0));
vertex(xW/10,yH/10-focusedRandom(-0,0));
vertex(xW/2,yH/2-focusedRandom(-0,0));
vertex(xW/1.9,yH/1.9-focusedRandom(-0,0));
vertex(xW/1.8,yH/1.8-focusedRandom(-0,0));
vertex(xW/1.7,yH/1.7-focusedRandom(-0,0));
vertex(xW/1.6,yH/1.6-focusedRandom(-0,0));
vertex(xW/1.5,yH/1.5-focusedRandom(-0,0));
vertex(xW/1.4,yH/1.4-focusedRandom(-0,0));
vertex(xW/1.3,yH/1.3-focusedRandom(-0,0));
vertex(xW/1.2,yH/1.2-focusedRandom(-0,0));
vertex(xW/1.1,yH/1.1-focusedRandom(-0,0));
vertex(xW,yH-focusedRandom(-0,0));
endShape();
}

//creates a line that deviates in both the x and y directions
function wobblyYLine(xW, yH){
  beginShape();
vertex(0,0-focusedRandom(-0,0));
vertex(xW/20-focusedRandom(-0,0),yH/20-focusedRandom(-0,0));
vertex(xW/15-focusedRandom(-0,0),yH/15-focusedRandom(-0,0));
vertex(xW/10-focusedRandom(-0,0),yH/10-focusedRandom(-0,0));
vertex(xW/2-focusedRandom(-0,0),yH/2-focusedRandom(-0,0));
vertex(xW/1.9-focusedRandom(-3,6),yH/1.9-focusedRandom(-0,0));
vertex(xW/1.8-focusedRandom(-2,2),yH/1.8-focusedRandom(-0,0));
vertex(xW/1.7-focusedRandom(-7,7),yH/1.7-focusedRandom(-0,0));
vertex(xW/1.6-focusedRandom(-3,3),yH/1.6-focusedRandom(-0,0));
vertex(xW/1.5-focusedRandom(-9,2),yH/1.5-focusedRandom(-0,0));
vertex(xW/1.4-focusedRandom(-4,7),yH/1.4-focusedRandom(-0,0));
vertex(xW/1.3-focusedRandom(-7,9),yH/1.3-focusedRandom(-0,0));
vertex(xW/1.2-focusedRandom(-11,4),yH/1.2-focusedRandom(-0,0));
vertex(xW/1.1-focusedRandom(22,11),yH/1.1-focusedRandom(-0,0));
vertex(xW-focusedRandom(-0,0),yH-focusedRandom(-0,0));
endShape();
}

//creates a line that deviates on only the y plane
function wobblyXYLine(xW, yH){
  beginShape();
  //draws down from point (0,0) to point (xW, yH)
vertex(0,0-focusedRandom(-0,0));
vertex(xW/20-focusedRandom(-2,1),yH/20-focusedRandom(-0,0));
vertex(xW/17-focusedRandom(-5,7),yH/17-focusedRandom(-13,23));
vertex(xW/15-focusedRandom(-3,1),yH/15-focusedRandom(-12,11));
vertex(xW/13-focusedRandom(-2,4),yH/13-focusedRandom(-26,18));
vertex(xW/10-focusedRandom(-5,7),yH/10-focusedRandom(-13,28));
vertex(xW/7-focusedRandom(-3,5),yH/7-focusedRandom(-27,28));
vertex(xW/5-focusedRandom(-1,7),yH/5-focusedRandom(-23,18));
vertex(xW/4-focusedRandom(-8,4),yH/4-focusedRandom(-37,28));
vertex(xW/3-focusedRandom(-2,6),yH/3-focusedRandom(-44,38));
vertex(xW/2-focusedRandom(-8,2),yH/2-focusedRandom(-37,12));
vertex(xW/1.9-focusedRandom(-8,9),yH/1.9-focusedRandom(-49,50));
vertex(xW/1.8-focusedRandom(-2,2),yH/1.8-focusedRandom(-11,22));
vertex(xW/1.7-focusedRandom(-7,7),yH/1.7-focusedRandom(-54,33));
vertex(xW/1.6-focusedRandom(-3,3),yH/1.6-focusedRandom(-44,64));
vertex(xW/1.5-focusedRandom(-9,2),yH/1.5-focusedRandom(-74,44));
vertex(xW/1.4-focusedRandom(-4,7),yH/1.4-focusedRandom(-32,77));
vertex(xW/1.3-focusedRandom(-7,9),yH/1.3-focusedRandom(-70,50));
vertex(xW/1.2-focusedRandom(-11,4),yH/1.2-focusedRandom(-55,65));
vertex(xW/1.1-focusedRandom(22,11),yH/1.1-focusedRandom(-66,54));
vertex(xW-focusedRandom(-0,0),yH-focusedRandom(-0,0));
//heads back up to point 0,0!
vertex(xW/1.15-focusedRandom(22,11),yH/1.15-focusedRandom(-66,54));
vertex(xW/1.25-focusedRandom(-11,4),yH/1.25-focusedRandom(-55,65));
vertex(xW/1.35-focusedRandom(-7,9),yH/1.35-focusedRandom(-70,50));
vertex(xW/1.45-focusedRandom(-4,7),yH/1.45-focusedRandom(-32,77));
vertex(xW/1.55-focusedRandom(-9,2),yH/1.55-focusedRandom(-74,44));
vertex(xW/1.65-focusedRandom(-3,3),yH/1.65-focusedRandom(-44,64));
vertex(xW/1.75-focusedRandom(-7,7),yH/1.75-focusedRandom(-54,33));
vertex(xW/1.8-focusedRandom(-2,2),yH/1.8-focusedRandom(-11,22));
vertex(xW/1.9-focusedRandom(-8,9),yH/1.9-focusedRandom(-49,50));
vertex(xW/2-focusedRandom(-8,2),yH/2-focusedRandom(-37,12));
vertex(xW/3-focusedRandom(-2,6),yH/3-focusedRandom(-44,38));
vertex(xW/4-focusedRandom(-8,4),yH/4-focusedRandom(-37,28));
vertex(xW/5-focusedRandom(-1,7),yH/5-focusedRandom(-23,18));
vertex(xW/7-focusedRandom(-3,5),yH/7-focusedRandom(-27,28));
vertex(xW/10-focusedRandom(-5,7),yH/10-focusedRandom(-13,28));
vertex(xW/13-focusedRandom(-2,4),yH/13-focusedRandom(-26,18));
vertex(xW/15-focusedRandom(-3,1),yH/15-focusedRandom(-12,11));
vertex(xW/17-focusedRandom(-5,7),yH/17-focusedRandom(-13,23));
vertex(xW/20-focusedRandom(-2,1),yH/20-focusedRandom(-0,0));

endShape();
}

function mouseClicked() {
  changeRandomSeed();
}
function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  //lastSwapTime = millis();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
    else if (key == '@') {
    saveBlocksImages(true);
  }

}
