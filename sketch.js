var canvasWidth = 960;
var canvasHeight = 500;
var curRandomSeed;
var mode = false;

var slider1, slider2;

var colors = [];
colors.push([[246,104,85],[52,93,116],[255,169,79]]);
colors.push([[71,194,166],[103,43,74],[200,205,0]]);
colors.push([[109,197,227],[198,61,141],[58,61,122]]);
colors.push([[255,131,111],[244,81,64],[137,191,168]]);
colors.push([[27,46,61],[254,125,143],[52,107,137]]);
colors.push([[251,179,107],[119,150,168],[243,209,128]]);
colors.push([[255,181,170],[127,110,116],[255,221,199]]);
colors.push([[178,192,179],[166,185,63],[74,68,84]]);

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
	changeRandomSeed();
}

function draw() {
  resetFocusedRandom(curRandomSeed);
  if(mode) {
    drawWallpaper();
  } else {
    drawLandscape();
  }
}

function drawWallpaper() {
  var colorPalette = colors[focusedRandom(0,7).toFixed(0)];

  var bgColor = colorPalette[0],
      strokeColor = colorPalette[1],
      cubeColor = colorPalette[2];

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

  // draw singular cube (for testing)
  // drawCube(width/2,height/2,width,height,rotationState,bgColor,strokeColor,cubeColor);

  for(var i=0; i<4; i++) {
    for(var j=0; j<6; j++) {
      // positioning the cube
      var y = h/2 + h*i,
          x = w/2 + w*j;

      // drawing the cube
      drawCube(x,y,w*cubeSize,h*cubeSize,rotationState,bgColor,strokeColor,cubeColor);
    }
  }
}

function drawCube(x,y,w,h,rotationState,bgColor,strokeColor,cubeColor) {
  push();
  translate(x,y);

  var extent = 0;
  if (h < w){ extent = h / 2; }
  else { extent = w / 2; }
  var scale = extent / 250.0;

  // drawing style
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


function drawLandscape() {
  var bgColor = [225,225,225],
      bgColorTop = color(217,138,121),
      bgColorBottom = color(50,201,182),
      starColor = [250,250,250];

  var mtColor1 = [47,175,173],
      mtColor2 = [43,168,167],
      mtColor3 = [6,160,163],
      mtColor4 = [3,135,142],
      mtColor5 = [0,120,125],
      mtColor6 = [1,111,120];

  var columnLeftColor = color(235,137,107),
      columnRightColor = color(232,114,112),
      columnTopColor = color(248,172,142),
      columnLeftColor2 = color(83,130,137),
      columnRightColor2 = color(89,123,136),
      columnTopColor2 = color(239,155,133);

  smooth();
  noStroke();
  fill(bgColor);
  rect(0,0,width,height);

  // gradient sky
  for (var i=0; i<=height/1.25; i++) {
    var inter = map(i, 0, height/2, 0, 1);
    var c = lerpColor(bgColorTop, bgColorBottom, inter);
    stroke(c);
    line(0, i, width, i);
  }

  noStroke();

  var w = width/10,
      h = height/8;

  // stars
  for (var i=0; i<5; i++) {
    for (var j=0; j<10; j++) {
      // positioning the stars
      var starX = w/2 + w*j,
          starY = h/2 + h*i,
          starSize = focusedRandom(2,4),
          positionRandX = focusedRandom(-40,40),
          positionRandY = focusedRandom(-40,40);

      fill(starColor);
      ellipse(starX+positionRandX,starY+positionRandY,starSize,starSize);
    }
  }

  // mountains

  // mts 1
  var mtX = focusedRandom(150,250);
  var mtY = height/2.5;

  fill(mtColor1);
  triangle(mtX,mtY,mtX-width/2,height,mtX+width/2,height);
  triangle(width-mtX,mtY,width-mtX-width/2,height,width-mtX+width/2,height);

  // mts 2
  mtX = focusedRandom(100,200);
  mtY += focusedRandom(25,50);

  fill(mtColor2);
  triangle(mtX,mtY,mtX-width/2.75,height*1.25,mtX+width/2.75,height*1.25);
  triangle(width-mtX,mtY,width-mtX-width/2.75,height*1.25,width-mtX+width/2.75,height*1.25);

  // mts 3
  mtX = focusedRandom(0,50);
  mtY += focusedRandom(25,50);

  fill(mtColor3);
  triangle(mtX,mtY,mtX-width/2.5,height*1.25,mtX+width/2.5,height*1.25);
  triangle(width-mtX,mtY,width-mtX-width/2.5,height*1.25,width-mtX+width/2.5,height*1.25);

  // mts 4
  mtX = focusedRandom(50,100);
  mtY += focusedRandom(25,50);

  fill(mtColor4);
  triangle(mtX,mtY,mtX-width/3,height*1.25,mtX+width/3,height*1.25);
  triangle(width-mtX,mtY,width-mtX-width/3,height*1.25,width-mtX+width/3,height*1.25);

  // mts 5
  mtX = focusedRandom(0,50);
  mtY += focusedRandom(25,50);

  fill(mtColor5);
  triangle(mtX,mtY,mtX-width/3.5,height*1.25,mtX+width/3.5,height*1.25);
  triangle(width-mtX,mtY,width-mtX-width/3.5,height*1.25,width-mtX+width/3.5,height*1.25);

  // mts 6
  mtX = focusedRandom(50,100);
  mtY += focusedRandom(25,50);

  fill(mtColor6);
  triangle(mtX,mtY,mtX-width/3.75,height*1.25,mtX+width/3.75,height*1.25);
  triangle(width-mtX,mtY,width-mtX-width/3.75,height*1.25,width-mtX+width/3.75,height*1.25);


  // columns
  for(var i=0; i<focusedRandom(3,6); i++) {
    for (var j=0; j<focusedRandom(3,6); j++) {
      var xOffset = focusedRandom(-200,200),
          yOffset = focusedRandom(75,150),
          scaleOffset = focusedRandom(.2,.5),
          colorChange = map(yOffset,75,150,0,1);

      var leftColor = lerpColor(columnLeftColor,columnLeftColor2,colorChange),
          rightColor = lerpColor(columnRightColor,columnRightColor2,colorChange),
          topColor = lerpColor(columnTopColor,columnTopColor2,colorChange);

      push();
      translate(width/2+xOffset,height/2+yOffset);
      drawColumn(xOffset,yOffset,scaleOffset,w,h,leftColor,rightColor,topColor);
      pop();
    }
  }

  push();
  translate(width/2,height/2);
  drawColumn(0,0,1,w,h,columnLeftColor,columnRightColor,columnTopColor);
  pop();
}

function drawColumn(xOffset,yOffset,scaleOffset,w,h,columnLeftColor,columnRightColor,columnTopColor) {
  push();

  var extent = 0;
  if (h < w){ extent = h / 2; }
  else { extent = w / 2; }
  var scale = extent / 100.0 * scaleOffset;

  // draw base hexagon
  push();
  translate(0,(height/2)-focusedRandom(100,200));
  rotate(PI/6.0);

  // top square
  stroke(columnTopColor);
  fill(columnTopColor);

  beginShape();
  vertex(0,0);
  vertex(cos(PI)*200*scale,sin(PI)*200*scale);
  vertex(cos(PI*4/3)*200*scale,sin(PI*4/3)*200*scale);
  vertex(cos(PI*5/3)*200*scale,sin(PI*5/3)*200*scale);
  endShape(CLOSE);

  // left square
  stroke(columnLeftColor);
  fill(columnLeftColor);

  beginShape();
  vertex(0,0);
  vertex(cos(PI*1/3)*7500*scale,sin(PI*1/3)*7500*scale);
  vertex(cos(PI)*200*scale,sin(PI)*200*scale);
  endShape(CLOSE);

  // right square
  stroke(columnRightColor);
  fill(columnRightColor);

  beginShape();
  vertex(0,0);
  vertex(cos(PI*5/3)*200*scale,sin(PI*5/3)*200*scale);
  vertex(cos(PI*1/3)*7500*scale,sin(PI*1/3)*7500*scale);
  endShape(CLOSE);

  pop();

  pop();
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  if (key == ' ') {
    mode = !mode;
  }
}
