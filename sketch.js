var bgColor = [242,240,241],
    strokeColor = [53,53,53];

var img;

function setup() {
  createCanvas(960, 500);
}

function draw() {
  // set up background
  noStroke();
  fill(bgColor);
  rect(0,0,width,height);

  translate(width/2, height/2);

  noFill();
  strokeWeight(4);
  stroke(strokeColor);
  drawCube();
}

function drawCube() {
  // draw base hexagon
  rotate(PI/6.0);

  push();
  beginShape();
  for(var i=0; i<6; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*200,sin(angle)*200);
    pop();
  }
  endShape(CLOSE);
  pop();

  // draw inner lines to make cube
  push();
  for(var i=1; i<6; i+=2) {
    var angle = PI*i/3;
    line(0,0,cos(angle)*200,sin(angle)*200);
  }
  pop();

  // draw left cube face inner
  push();
  translate(-15, 25);

  beginShape();
  for(var i=1; i<4; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*145,sin(angle)*145);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  beginShape();
  for(var i=1; i<4; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*120,sin(angle)*120);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  var angle = PI*2/3;
  line(0,0,cos(angle)*145,sin(angle)*145);

  push();
  translate(-30,0);
  line(0,0,cos(angle)*90,sin(angle)*90);
  pop();

  push();
  translate(15,25);
  line(0,0,cos(angle)*90,sin(angle)*90);
  pop();

  pop();


  // draw top cube face inner
  push();
  translate(-15, -25);
  beginShape();
  for(var i=3; i<6; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*145,sin(angle)*145);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  beginShape();
  for(var i=3; i<6; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*120,sin(angle)*120);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  var angle = PI*4/3;
  line(0,0,cos(angle)*145,sin(angle)*145);

  push();
  translate(15,-25);
  line(0,0,cos(angle)*90,sin(angle)*90);
  pop();

  push();
  translate(-30,0);
  line(0,0,cos(angle)*90,sin(angle)*90);
  pop();
  pop();

  // draw right cube face inner
  push();
  translate(30, 0);
  beginShape();
  for(var i=5; i<8; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*145,sin(angle)*145);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  beginShape();
  for(var i=5; i<8; i++) {
    push();
    var angle = PI*i/3;
    vertex(cos(angle)*120,sin(angle)*120);
    pop();
  }
  vertex(0,0);
  endShape(CLOSE);

  var angle = PI*6/3;
  line(0,0,cos(angle)*145,sin(angle)*145);

  push();
  translate(15,-25);
  line(0,0,cos(angle)*90,sin(angle)*90);
  pop();

  push();
  translate(15,25);
  line(0,0,cos(angle)*90,sin(angle)*90);
  pop();

  pop();
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
