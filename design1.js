let num_across = 12;
let n = 25, s;
let degree = 0;
let degree2 = 0;
let degree3 = 0;
let degree4 = 0;
var Y_AXIS = 1;
var X_AXIS = 2;
var worldSphereCount = 5;
var worldTranslate = 135;
var trigger = true;
var Transtrigger = true;
var c1, c2;
var pg;
//GIF RECORDER
const frameMax = 360;
let recording = false;
let gifRecorder = null;
//Camera Control Vars
var zAxis = 900;
var yAxis = 0;
var xAxis = 0;
var AxisModifier = 50;
var mod = 0;
function setup () {
  createCanvas(960, 720, WEBGL);
  c1 = color(100, 0, 125);
  c2 = color(0, 125, 255);
  pg = createGraphics(256,256);

  //button handlers
  //Zoom out 
  var loadButton = createButton('ZoomOut');
  loadButton.mousePressed(ZoomOutX);
  loadButton.parent('button1Container');
  //Zoom in
  var loadButton = createButton('Zoom-In');
  loadButton.mousePressed(ZoomInX);
  loadButton.parent('button1Container');
  //blank
  var loadButton = createButton("....");
  loadButton.mousePressed();
  loadButton.parent('button2Container');
  //Move Up
  var loadButton = createButton("&#8593");
  loadButton.mousePressed(MoveUp);
  loadButton.parent('button2Container');
  //blank
  var loadButton = createButton("....");
  loadButton.mousePressed();
  loadButton.parent('button2Container');
  //Move Right
  var loadButton = createButton('&#8592');
  loadButton.mousePressed(MoveLeft);
  loadButton.parent('button3Container');
   //Move Down
  var loadButton = createButton('&#8595');
  loadButton.mousePressed(MoveDown);
  loadButton.parent('button3Container');
  //Move Left
  var loadButton = createButton('&#8594');
  loadButton.mousePressed(MoveRight);
  loadButton.parent('button3Container');
  //reset Cam
  var loadButton = createButton('ResetCamera');
  loadButton.mousePressed(ResetCam);
  loadButton.parent('button4Container');
  //Screen Zoom Pos
  //Max Zoomed out
  var loadButton = createButton('Positon1');
  loadButton.mousePressed(POS1);
  loadButton.parent('Pos1Container');
  //Middle Zoom
  var loadButton = createButton('Positon2');
  loadButton.mousePressed(POS2);
  loadButton.parent('Pos1Container');
  //Max Zoomed in
  var loadButton = createButton('Positon3');
  loadButton.mousePressed(POS3);
  loadButton.parent('Pos1Container');
}

function mousePressed() {
}

function draw () {
   //-----------------------scene setup-----------------------//
  background(80);
  translate(0, 0, -600);
  let cur_frame = frameCount % frameMax;
  let cur_frac = map(cur_frame, 0, frameMax, 0, 1);
  camera(xAxis, yAxis, zAxis, xAxis, yAxis, 0, 0.0, 1.0, 0.0);
  //-----------------------background graident-----------------------//
  //setGradient(-width, -height, width*2, height*2, c1, c2, Y_AXIS);
  translate(0, 0, 600);
  
  //-----------------------Scene Lighting-----------------------//
  var locX = height / 2;
  var locY = width;
  ambientMaterial(250);
  directionalLight(255, 0, 255, 0.25, 0.25, 0);
  directionalLight(0, 150, 250, 0, 0, -10);
  pointLight(0, 0, 255, locX, locY, 250);

  //-----------------------central Torus-----------------------//
  strokeWeight(0.3);
  rotateZ(frameCount * 0.0035);
  rotateX(frameCount * 0.0035);
  rotateY(frameCount * 0.0035);
  torus(120, 30);
  //sphere(2500);
  //-----------------------inner core anticlockwise-----------------------//
  for(let i = 0; i < 10; i++) {
        push();
        rotateX(degree);
        rotateY(degree);
        rotateX(degree);
        translate(0, 0, 0);
        stroke(0);
        ellipsoid(45, 45, 15);
        ellipsoid(45, 15, 45);
        ellipsoid(15, 45, 45);
        degree4 += 0.02;
        pop();
  }

  //-----------------------outer spheres-----------------------//
  for(let i = 0; i < worldSphereCount; i++) {
        push();
        rotateX(degree2);
        rotateZ(degree2);
        translate(0, 0, worldTranslate);
        sphere(25);
        degree2 += 0.9;
        pop();
  }

  //-----------------------outer smaller spheres-----------------------//
  for(let i = 0; i < worldSphereCount/2; i++) {
        push();
        rotateY(degree3);
        rotateZ(degree3);
        translate(0, 0, 250);
        sphere(10);
        degree3 += 0.7;
        pop();
  }

  //-----------------------seccondary Color Lighting-----------------------//
  directionalLight(125, 125, 125, 0.25, 0.25, 0);
  directionalLight(125, 125, 125, 0, 0, -10);
  ambientMaterial(0);

  //-----------------------ball scatter middle-----------------------//
  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 10; i++){
      translate(sin(frameCount * 0.001 + j) * 100, sin(frameCount * 0.001 + j) * 100, i * 0.1);
      rotateZ(frameCount * 0.002);
      push();
      specularMaterial(255, 125, 255);
      sphere(5); 
      pop();
    }
    pop();
  }

  //-----------------------inner cube core-----------------------//
  for(let i = 0; i < 10; i++) {
        push();
        rotateX(degree);
        rotateY(degree);
        rotateX(degree);
        translate(0, 0, 0);
        box(70, 70, 70);
        degree += 0.01;
        pop();
  }
  strokeWeight(1);

  //-----------------------Movement Triggers-----------------------//
  //bal count triggers
  if(trigger == true){
    worldSphereCount++
  }
  if(worldSphereCount == 100 || trigger == false){
    trigger = false;
    if(worldSphereCount == 5){
      trigger = true;
    }
    worldSphereCount--;
  }
  if(worldSphereCount <= 1){worldSphereCount =1} 
  //translation triggers
  if(Transtrigger == true){
    worldTranslate++
  }
  if(worldTranslate == 300 || Transtrigger == false){
    Transtrigger = false;
    if(worldTranslate == 135){
      Transtrigger = true;
    }
    worldTranslate--;
  }
  if(worldTranslate <= 1){worldTranslate =1} 
}
function keyPressed(){
  //print("zoomed");
  if (key === '+') {
    zAxis = zAxis - AxisModifier;
    print(zAxis);
  }
  else if (key === '-') {
    zAxis = zAxis + AxisModifier;
    print(zAxis);
  }
  else if (keyCode === LEFT_ARROW) {
    xAxis = xAxis - AxisModifier; 
  }
  else if (keyCode === RIGHT_ARROW) {
    xAxis = xAxis + AxisModifier; 
  }
  else if (keyCode === UP_ARROW) {
    yAxis = yAxis - AxisModifier; 
  }
  else if (keyCode === DOWN_ARROW) {
    yAxis = yAxis + AxisModifier; 
  }
}
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function setGradient(x, y, w, h, c1, c2, axis) {

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}


//Input panel methods
function ZoomOutX(){
  zAxis = zAxis + AxisModifier;
}
function ZoomInX(){
  zAxis = zAxis - AxisModifier;
}
function MoveLeft(){
  xAxis = xAxis - AxisModifier; 
}
function MoveRight(){
  xAxis = xAxis + AxisModifier; 
}
function MoveUp(){
  yAxis = yAxis - AxisModifier;  
}
function MoveDown(){
  yAxis = yAxis + AxisModifier;  
}
function ResetCam(){
  zAxis = 1000;
  yAxis = 0;
  xAxis = 0;
}
function POS1(){  //fully zoomed out
  zAxis = 800;
  yAxis = 0;
  xAxis = 0; 
}
function POS2(){  //middle zoom
  zAxis = 1200;
  yAxis = 0;
  xAxis = 0; 
}
function POS3(){  //fully zoomed in
  zAxis = 1800;
  yAxis = 0;
  xAxis = 0; 
}