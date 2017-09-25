var canvasWidth = 960;
var canvasHeight = 500;
var curRandomSeed;

var slider1, slider2;

var bgColor = [246,104,85],
    strokeColor = [52,93,116],
    cubeColor = [255,169,79];

function setup() {
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  // create sliders
  slider1 = createSlider(0, 1, 0);
  slider2 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
}


function changeRandomSeed() {
  curRandomSeed += 1;
}

function mouseClicked(){
	// if(mode == 'LandScape'){
	// 	setupGrid();
	// 	drawLandscape();
	// }
	// else {
  	changeRandomSeed();
	// 	drawShapes();
  // }
}

function draw() {
  resetFocusedRandom(curRandomSeed);

  // set up background
  noStroke();
  fill(bgColor);
  rect(0,0,width,height);

  var s1 = slider1.value();
  var s2 = slider2.value();

  var rotationState = s1;
  var cubeSize = map(s2,0,100,.75,1.25);

  var w = width/6,
      h = height/3;

  // drawCube(width/2,height/2,width,height,rotationState);

  for(var i=0; i<4; i++) {
    for(var j=0; j<6; j++) {
      // positioning the cube
      var y = h/2 + h*i,
          x = w/2 + w*j;

      // drawing the cube
      drawCube(x,y,w*cubeSize,h*cubeSize,rotationState);
    }
  }
}

function drawCube(x,y,w,h,rotationState) {
  push();
  translate(x,y);

  var extent = 0;
  if (h < w){ extent = h / 2; }
  else { extent = w / 2; }
  var scale = extent / 250.0;

  // drawing style
  // noFill();
  strokeWeight(4*scale);
  stroke(strokeColor);

  // draw base hexagon
  var cubeRotation = focusedRandom(0,100)*rotationState;
  if (cubeRotation == 0) {
    rotate(PI/6.0);
  } else {
    rotate(PI/6.0*cubeRotation);
  }

  push();
  fill(cubeColor);
  beginShape();
  for(var i=0; i<6; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*200*scale,sin(angle)*200*scale);
    pop();
  }
  endShape(CLOSE);
  pop();

  // draw inner lines to make cube
  push();
  for(var i=1; i<6; i+=2) {
    var angle = PI*i/3;
    line(0,0,cos(angle)*200*scale,sin(angle)*200*scale);
  }
  pop();

  // draw left cube face inner
  push();
  translate(-15*scale, 25*scale);

  fill(bgColor);

  // first cutout
  beginShape();
  for(var i=1; i<4; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*145*scale,sin(angle)*145*scale);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  fill(cubeColor);

  // outer top
  beginShape();
  vertex(cos(PI)*120*scale,sin(PI)*120*scale);
  vertex(cos(PI)*145*scale,sin(PI)*145*scale);
  vertex(cos(PI*2/3)*145*scale,sin(PI*2/3)*145*scale);
  vertex(cos(PI*2/3)*120*scale,sin(PI*2/3)*120*scale);
  endShape(CLOSE);

  // outer bottom
  beginShape();
  vertex(cos(PI*2/3)*145*scale,sin(PI*2/3)*145*scale);
  vertex(cos(PI*2/3)*120*scale,sin(PI*2/3)*120*scale);
  vertex(cos(PI*1/3)*120*scale,sin(PI*1/3)*120*scale);
  vertex(cos(PI*1/3)*145*scale,sin(PI*1/3)*145*scale);
  endShape(CLOSE);

  // inner top
  beginShape();
  vertex(0,0);
  vertex(cos(PI)*25*scale,sin(PI)*25*scale);
  vertex(cos(PI*2/2.75)*110*scale,sin(PI*2/2.75)*110*scale);
  vertex(cos(PI*2/3)*120*scale,sin(PI*2/3)*120*scale);
  endShape(CLOSE);

  // inner bottom
  beginShape();
  vertex(0,0);
  vertex(cos(PI*1/3)*25*scale,sin(PI*1/3)*25*scale);
  vertex(cos(PI*2/3.3)*110*scale,sin(PI*2/3.3)*110*scale);
  vertex(cos(PI*2/3)*120*scale,sin(PI*2/3)*120*scale);
  endShape(CLOSE);

  pop();


  // draw top cube face inner
  push();
  translate(-15*scale, -25*scale);

  fill(bgColor);

  // first cutout
  beginShape();
  for(var i=3; i<6; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*145*scale,sin(angle)*145*scale);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  fill(cubeColor);

  // outer left
  beginShape();
  vertex(cos(PI)*120*scale,sin(PI)*120*scale);
  vertex(cos(PI)*145*scale,sin(PI)*145*scale);
  vertex(cos(PI*4/3)*145*scale,sin(PI*4/3)*145*scale);
  vertex(cos(PI*4/3)*120*scale,sin(PI*4/3)*120*scale);
  endShape(CLOSE);

  // outer right
  beginShape();
  vertex(cos(PI*4/3)*145*scale,sin(PI*4/3)*145*scale);
  vertex(cos(PI*4/3)*120*scale,sin(PI*4/3)*120*scale);
  vertex(cos(PI*5/3)*120*scale,sin(PI*5/3)*120*scale);
  vertex(cos(PI*5/3)*145*scale,sin(PI*5/3)*145*scale);
  endShape(CLOSE);

  // inner left
  beginShape();
  vertex(0,0);
  vertex(cos(PI)*25*scale,sin(PI)*25*scale);
  vertex(cos(PI*4/3.15)*110*scale,sin(PI*4/3.15)*110*scale);
  vertex(cos(PI*4/3)*120*scale,sin(PI*4/3)*120*scale);
  endShape(CLOSE);

  // inner right
  beginShape();
  vertex(0,0);
  vertex(cos(PI*5/3)*25*scale,sin(PI*5/3)*25*scale);
  vertex(cos(PI*4/2.86)*110*scale,sin(PI*4/2.86)*110*scale);
  vertex(cos(PI*4/3)*120*scale,sin(PI*4/3)*120*scale);
  endShape(CLOSE);

  pop();

  // draw right cube face inner
  push();
  translate(30*scale, 0);

  fill(bgColor);

  // first cutout
  beginShape();
  for(var i=5; i<8; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*145*scale,sin(angle)*145*scale);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  fill(cubeColor);

  // outer top
  beginShape();
  vertex(cos(PI*5/3)*120*scale,sin(PI*5/3)*120*scale);
  vertex(cos(PI*5/3)*145*scale,sin(PI*5/3)*145*scale);
  vertex(cos(PI*6/3)*145*scale,sin(PI*6/3)*145*scale);
  vertex(cos(PI*6/3)*120*scale,sin(PI*6/3)*120*scale);
  endShape(CLOSE);

  // outer bottom
  beginShape();
  vertex(cos(PI*6/3)*145*scale,sin(PI*6/3)*145*scale);
  vertex(cos(PI*6/3)*120*scale,sin(PI*6/3)*120*scale);
  vertex(cos(PI*1/3)*120*scale,sin(PI*1/3)*120*scale);
  vertex(cos(PI*1/3)*145*scale,sin(PI*1/3)*145*scale);
  endShape(CLOSE);

  // inner top
  beginShape();
  vertex(0,0);
  vertex(cos(PI*5/3)*25*scale,sin(PI*5/3)*25*scale);
  vertex(cos(PI*1.94)*110*scale,sin(PI*1.94)*110*scale);
  vertex(cos(PI*6/3)*120*scale,sin(PI*6/3)*120*scale);
  endShape(CLOSE);

  // inner bottom
  beginShape();
  vertex(0,0);
  vertex(cos(PI*1/3)*25*scale,sin(PI*1/3)*25*scale);
  vertex(cos(PI*2.06)*110*scale,sin(PI*2.06)*110*scale);
  vertex(cos(PI*6/3)*120*scale,sin(PI*6/3)*120*scale);
  endShape(CLOSE);

  pop();

  pop();
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
