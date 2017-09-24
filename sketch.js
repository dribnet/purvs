var canvasWidth = 960;
var canvasHeight = 500;

var slider1;

var bgColor = [242,240,241],
    strokeColor = [53,53,53];

function setup() {
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create sliders
  slider1 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
}

function draw() {
  // set up background
  noStroke();
  fill(bgColor);
  rect(0,0,width,height);

  var s1 = slider1.value();
  // var gapSize = map(s1, 0, 100, -90, 90);
  var gapSize = map(s1,0,100,0,1);

  var w = width/8,
      h = height/5;

  for(var i=0; i<6; i++) {
    for(var j=0; j<10; j++) {
      // positioning the cube
      var y = h/2 + h*i,
          x = w/2 + w*j;

      // drawing the cube
      drawCube(x,y,w,h,gapSize);
    }
  }
}

function drawCube(x,y,w,h,gapSize) {
  push();
  translate(x,y);

  var extent = 0;
  if (h < w){ extent = h / 2; }
  else { extent = w / 2; }
  var scale = extent / 250.0;

  // drawing style
  noFill();
  strokeWeight(4*scale);
  stroke(strokeColor);

  // draw base hexagon
  rotate(PI/6.0);

  push();
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

  beginShape();
  for(var i=1; i<4; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*145*scale,sin(angle)*145*scale);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  beginShape();
  for(var i=1; i<4; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*120*scale,sin(angle)*120*scale);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  var angle = PI*2/3;
  line(0,0,cos(angle)*145*scale,sin(angle)*145*scale);

  push();
  translate(-30*scale,0);
  line(0,0,cos(angle)*90*scale,sin(angle)*90*scale);
  pop();

  push();
  translate(15*scale,25*scale);
  line(0,0,cos(angle)*90*scale,sin(angle)*90*scale);
  pop();

  pop();


  // draw top cube face inner
  push();
  translate(-15*scale, -25*scale);
  beginShape();
  for(var i=3; i<6; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*145*scale,sin(angle)*145*scale);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  beginShape();
  for(var i=3; i<6; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*120*scale,sin(angle)*120*scale);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  var angle = PI*4/3;
  line(0,0,cos(angle)*145*scale,sin(angle)*145*scale);

  push();
  translate(15*scale,-25*scale);
  line(0,0,cos(angle)*90*scale,sin(angle)*90*scale);
  pop();

  push();
  translate(-30*scale,0);
  line(0,0,cos(angle)*90*scale,sin(angle)*90*scale);
  pop();

  pop();

  // draw right cube face inner
  push();
  translate(30*scale, 0);
  beginShape();
  for(var i=5; i<8; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*145*scale,sin(angle)*145*scale);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  beginShape();
  for(var i=5; i<8; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*120*scale,sin(angle)*120*scale);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  var angle = PI*6/3;
  line(0,0,cos(angle)*145*scale,sin(angle)*145*scale);

  push();
  translate(15*scale,-25*scale);
  line(0,0,cos(angle)*90*scale,sin(angle)*90*scale);
  pop();

  push();
  translate(15*scale,25*scale);
  line(0,0,cos(angle)*90*scale,sin(angle)*90*scale);
  pop();

  pop();

  pop();
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
