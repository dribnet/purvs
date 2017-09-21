// global variables
var w = 960;
var h = 500;
var curRandomSeed;
var strandColours;
var sliders = [];
var NUM_SLIDERS = 7;
var vals;
 var wobbleCol;


//setup
function setup () {
  //sliders and selecters are based on code from earlier projects by Tom
   faceSelector = createSelect();
  faceSelector.option('Pattern1');
  faceSelector.option('Pattern2');
  faceSelector.option('Pattern3');
  faceSelector.option('Landscape');
  faceSelector.value('Landscape');
  faceSelector.parent('selector1Container');
    /* create the sliders */
  for(i=1; i<=NUM_SLIDERS; i++) {
    var slider = createSlider(0, 100, 50);
    var parentStr = 'slider' + i + 'Container';
    slider.parent(parentStr);
    sliders.push(slider);
  }

  //creates a new value scaler and adds the sliders to it
  vals = new ValueScaler();
  vals.setSliders(sliders[0],sliders[1],sliders[2],sliders[3],sliders[4],sliders[5],sliders[6]);

//basic canvas setup
  angleMode(DEGREES);
  createCanvas(w, h);
  strandColours = [[156,16,18],[179,14,19],[187,16,18],[206,16,62]];
  curRandomSeed = int(focusedRandom(0, 100));

  //setup the randoms in the sliders
  resetFocusedRandom(curRandomSeed);
  vals.setFocusableRandoms(focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100));
  vals.setUnfocusedRandoms();
}


function draw () {
  resetFocusedRandom(curRandomSeed);

   background(100);
  centrePattern(w,h);
}

function centrePattern(xW,yH){
  wobbleCol = vals.scaleVals(21,1,2,true);
  push();
  translate(xW/2,yH/2);
  rotate(100);
  translate(-xW/2,-yH/2);
  rectMode(CORNER);
  fill(200);
  //fill(strandColours[0][0],strandColours[0][1],strandColours[0][2]);
  //fill(239,235,202);
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

//creates a line that deviates on only the y plane
function wobblyXYLine(xW, yH){
var col = null;
  if(wobbleCol == 2){col = [0,0,0]}
    else{
  col = strandColours[0];
  var colCheck = focusedRandom(0,100);
  if(colCheck > 25 && colCheck < 50){
col = strandColours[1];
  }
  else if(colCheck>49 && colCheck < 75){
    col = strandColours[2];
  }
   else if(colCheck>74){
    col = strandColours[3];
  }}
  fill(col[0],col[1],col[2]);
  stroke(col[0],col[1],col[2]);
  beginShape();
  //draws down from point (0,0) to point (xW, yH)
curveVertex(0,0-focusedRandom(-0,0));
curveVertex(xW/20-focusedRandom(-2,1),yH/20-focusedRandom(-0,0));
curveVertex(xW/17-focusedRandom(-5,7),yH/17-focusedRandom(-13,23));
curveVertex(xW/15-focusedRandom(-3,1),yH/15-focusedRandom(-12,11));
curveVertex(xW/13-focusedRandom(-2,4),yH/13-focusedRandom(-26,18));
curveVertex(xW/10-focusedRandom(-5,7),yH/10-focusedRandom(-13,28));
curveVertex(xW/7-focusedRandom(-3,5),yH/7-focusedRandom(-27,28));
curveVertex(xW/5-focusedRandom(-1,7),yH/5-focusedRandom(-23,18));
curveVertex(xW/4-focusedRandom(-8,4),yH/4-focusedRandom(-37,28));
curveVertex(xW/3-focusedRandom(-2,6),yH/3-focusedRandom(-44,38));
curveVertex(xW/2-focusedRandom(-8,2),yH/2-focusedRandom(-37,12));
curveVertex(xW/1.9-focusedRandom(-8,9),yH/1.9-focusedRandom(-49,50));
curveVertex(xW/1.8-focusedRandom(-2,2),yH/1.8-focusedRandom(-11,22));
curveVertex(xW/1.7-focusedRandom(-7,7),yH/1.7-focusedRandom(-54,33));
curveVertex(xW/1.6-focusedRandom(-3,3),yH/1.6-focusedRandom(-44,64));
curveVertex(xW/1.5-focusedRandom(-9,2),yH/1.5-focusedRandom(-74,44));
curveVertex(xW/1.4-focusedRandom(-4,7),yH/1.4-focusedRandom(-32,77));
curveVertex(xW/1.3-focusedRandom(-7,9),yH/1.3-focusedRandom(-70,50));
curveVertex(xW/1.2-focusedRandom(-11,4),yH/1.2-focusedRandom(-55,65));
curveVertex(xW/1.1-focusedRandom(22,11),yH/1.1-focusedRandom(-66,54));
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


//creates a line that deviates on only the y plane
function spikyXYLine(xW, yH){
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
  resetFocusedRandom(curRandomSeed);
  vals.setFocusableRandoms(focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100));
  vals.setUnfocusedRandoms();
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
