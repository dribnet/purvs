let num_across = 12;
let n = 25, s;
let degree = 0;
let degree2 = 0;
let degree3 = 0;
let degree4 = 0;
let degree5 = 0;
let degree6 = 0;
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
var zAxis = 10000;
var yAxis = 0;
var xAxis = 0;
var AxisModifier = 50;
var mod = 0;
var StrokeColor = 1;
var StrokeTrigger = false;
var tourTrigger = false;
var resetLock = false;
let zAxisCamera = 1000;
let yAxisCamera = 0;
let xAxisCamera = 0;

let zAxisCameraLast = 1000;
let yAxisCameraLast = 0;
let xAxisCameraLast = 0;

let curCameraFrame = 0;
let maxCameraFrames = 60;

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
  var loadButton = createButton("...");
  loadButton.parent('button2Container');
  //Move Up
  var loadButton = createButton("&#8593");
  loadButton.mousePressed(MoveUp);
  loadButton.parent('button2Container');
  //blank
  var loadButton = createButton("...");
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
  //Pos 1
  var loadButton = createButton('Positon1');
  loadButton.mousePressed(POS1);
  loadButton.parent('Pos1Container');
  //Pos 2
  var loadButton = createButton('Positon2');
  loadButton.mousePressed(POS2);
  loadButton.parent('Pos1Container');
  //Pos 3
  var loadButton = createButton('Positon3');
  loadButton.mousePressed(POS3);
  loadButton.parent('Pos2Container');
  //Pos 4
  var loadButton = createButton('Positon4');
  loadButton.mousePressed(POS4);
  loadButton.parent('Pos2Container');
  //Pos 5
  var loadButton = createButton('Positon5');
  loadButton.mousePressed(POS5);
  loadButton.parent('Pos3Container');
  //full tour
  var loadButton = createButton('FullTour');
  loadButton.mousePressed(FullTour);
  loadButton.parent('Pos3Container');
}

function mousePressed() {
}

function draw () {
  if(tourTrigger == false){curCameraFrame = curCameraFrame + 1;}    
  if(tourTrigger == true){
    if(zAxisCamera <= 1800){
      curCameraFrame = curCameraFrame + 0.03;
    }
    if(zAxisCamera >= 1800){
      curCameraFrame = curCameraFrame + 0.25;
    }
  }
  if(curCameraFrame > maxCameraFrames) {
    xAxisCamera = xAxis;
    yAxisCamera = yAxis;
    zAxisCamera = zAxis;
  }
  else {
    xAxisCamera = map(curCameraFrame, 0, maxCameraFrames, xAxisCameraLast, xAxis)
    yAxisCamera = map(curCameraFrame, 0, maxCameraFrames, yAxisCameraLast, yAxis)
    zAxisCamera = map(curCameraFrame, 0, maxCameraFrames, zAxisCameraLast, zAxis)
  }

   //-----------------------scene setup-----------------------//
  background(80);
  translate(0, 0, -600);
  let cur_frame = frameCount % frameMax;
  let cur_frac = map(cur_frame, 0, frameMax, 0, 1);
  camera(xAxisCamera, yAxisCamera, zAxisCamera, xAxisCamera, yAxisCamera, 0, 0.0, 1.0, 0.0);

  //-----------------------background graident-----------------------//
  translate(0, 0, 600);
  setGradient(-width, -height, width*2, height*2, c1, c2, Y_AXIS);
  
  //-----------------------Scene Lighting-----------------------//
  var locX = height / 2;
  var locY = width;
  ambientMaterial(250);
  directionalLight(255, 0, 255, 0.25, 0.25, 0);
  directionalLight(0, 150, 250, 0, 0, -10);
  pointLight(0, 0, 255, locX, locY, 250);
  specularMaterial(100, 900, 100);
  //-----------------------Area Covers-----------------------//
  rotateZ(frameCount * 0.0005);
  rotateX(frameCount * 0.0005);
  rotateY(frameCount * 0.0005);
  strokeWeight(1);
  torus(90, 3);
  torus(1225, 45);
  rotateZ(frameCount * 0.0015);
  rotateX(frameCount * 0.0015);
  rotateY(frameCount * 0.0015);
  strokeWeight(1);
  torus(90, 3);
  torus(1225, 45);
  rotateZ(frameCount * 0.0035);
  rotateX(frameCount * 0.0035);
  rotateY(frameCount * 0.0035);
  strokeWeight(1);
  torus(1225, 45);
  torus(90, 3);
  torus(360, 30);
  sphere(4000);
  rotateZ(frameCount * 0.0055);
  rotateX(frameCount * 0.0055);
  rotateY(frameCount * 0.0055);
  strokeWeight(1);
  torus(1225, 45);
  torus(360, 30);
  sphere(350);
  rotateZ(frameCount * 0.0095);
  rotateX(frameCount * 0.0095);
  rotateY(frameCount * 0.0095);
  strokeWeight(1);
  torus(90, 3);
  torus(1225, 45);
  torus(360, 30);
  sphere(1200);
  strokeWeight(0.3);

  //-----------------------Scene Stroke Controller-----------------------//
  stroke(0,StrokeColor,StrokeColor);
  if(StrokeColor == 255){StrokeTrigger = false;}
  if(StrokeColor == 0){StrokeTrigger = true;}
  if(StrokeColor >= 255){StrokeColor = 255;}
  if(StrokeColor <= 0){StrokeColor = 0;}
  if(StrokeTrigger == true){StrokeColor++;}
  if(StrokeTrigger == false){StrokeColor--;}
  //--------------------------------------------Stage 1--------------------------------------------//
  //-----------------------inner core anticlockwise-----------------------//
  for(let i = 0; i < 10; i++) {
        push();
        sphere(85);
        rotateX(degree);
        rotateY(degree);
        rotateX(degree);
        translate(0, 0, 0);
        ellipsoid(45, 45, 15);
        ellipsoid(45, 15, 45);
        ellipsoid(15, 45, 45);
        degree4 += 0.02;
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
 //-----------------------ball scatter middle-----------------------//
  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 10; i++){
      translate(sin(frameCount * 0.001 + j) * 50, sin(frameCount * 0.001 + j) * 50, i * 0.1);
      rotateZ(frameCount * 0.002);
      push();
      specularMaterial(100, 500, 500);
      torus(10,3); 
      pop();
    }
    pop();
  }
  //--------------------------------------------Stage 2--------------------------------------------//
  //-----------------------seccondary Color Lighting-----------------------//
  directionalLight(125, 125, 125, 0.25, 0.25, 0);
  directionalLight(125, 125, 125, 0, 0, -10);

   //-----------------------outer spheres-----------------------//
  for(let i = 0; i < worldSphereCount; i++) {
        push();
        rotateX(degree2);
        rotateZ(degree2);
        translate(0, 0, worldTranslate);
        sphere(25);
        degree2 += 59;
        pop();
  }

  //-----------------------outer smaller spheres-----------------------//
  for(let i = 0; i < worldSphereCount/2; i++) {
        push();
        rotateY(degree3/2);
        rotateZ(degree3/2);
        translate(0, 0, 250);
        sphere(10);
        degree3 += 0.7;
        pop();
  }
  stroke(0,StrokeColor/2,StrokeColor/2);
  //--------------------------------------------Stage 3--------------------------------------------//
  specularMaterial(100, 100, 100);
  //-----------------------sphere ring-----------------------//
  for(let i = 0; i < 250; i++) {
        push();
        rotateX(degree5/4);
        rotateY(degree5/4);
        translate(0, 0, 1000);
        sphere(30);
        degree5 += 0.1;
        pop();
  }
   //-----------------------(anti)sphere ring-----------------------//
  for(let i = 0; i < 250; i++) {
        push();
        rotateX(-degree/-4);
        rotateY(degree5/2);
        translate(0, 0, 1000);
        sphere(90);
        degree5 -= 0.1;
        pop();
  }
  for(let i = 0; i < 250; i++) {
        push();
        rotateX(degree5/2);
        rotateZ(-degree/-4);
        translate(0, 0, 1000);
        sphere(30);
        degree5 -= 0.1;
        pop();
  }

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
  if(zAxis >= 10000){ zAxis = 10000;}

  //axis camera lock check
  if(zAxisCamera >= 10000){
    resetLock = true;
  }
  if(zAxisCamera < 9900){
    resetLock = false;
  }
  //-------Debug Prints--------//
  //print(zAxis);
  //print(tourTrigger);
  //print(resetLock);
  //print(StrokeColor);
    
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
function mouseWheel(event) {
  zAxis += event.delta;
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
    for (var i = y; i <= y+h; i = i +2) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i = i +2) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}


//----------------------Input panel methods--------------------//
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
function startCameraAnimation() {
  curCameraFrame = 0;
  xAxisCameraLast = xAxis;
  yAxisCameraLast = yAxis;
  zAxisCameraLast = zAxis;
}
function ResetCam(){
  tourTrigger = false;
  startCameraAnimation();
  yAxis = 0;
  xAxis = 0;
}
function POS1(){ 
  tourTrigger = false;
  startCameraAnimation();
  zAxis = 10000;
  yAxis = 0;
  xAxis = 0; 
}
function POS2(){ 
  tourTrigger = false;
  startCameraAnimation();
  zAxis = 3700;
  yAxis = 0;
  xAxis = 0; 
}
function POS3(){ 
  tourTrigger = false;
  startCameraAnimation();
  zAxis = 1800;
  yAxis = 0;
  xAxis = 0; 
}
function POS4(){ 
  tourTrigger = false;
  startCameraAnimation();
  zAxis = 958;
  yAxis = 0;
  xAxis = 0; 
}
function POS5(){  
  tourTrigger = false;
  startCameraAnimation();
  zAxis = 736;
  yAxis = 0;
  xAxis = 0; 
}
function FullTour(){  
  POS1();
  if(resetLock == true){
    tourTrigger = true;
    startCameraAnimation();
    zAxis = 736;
    yAxis = 0;
    xAxis = 0; 
  }
}