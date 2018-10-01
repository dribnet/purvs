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

function setup () {
  createCanvas(960, 480, WEBGL);
  c1 = color(100, 0, 125);
  c2 = color(0, 125, 255);
  pg = createGraphics(256,256);

}

function mousePressed() {
  /*
  if(recording == false) {
    recording = true;
    gifRecorder = new p5recorder(frameMax, "wallpaper.gif");
  }*/
}

function draw () {
  //-----------------------scene setup-----------------------//
  background(100);
  translate(0, 0, -600);
  let cur_frame = frameCount % frameMax;
  let cur_frac = map(cur_frame, 0, frameMax, 0, 1);
  orbitControl();
  //-----------------------background graident-----------------------//
  setGradient(-width, -height, width*2, height*2, c1, c2, Y_AXIS);
  translate(0, 0, 600);
  
  //-----------------------Scene Lighting-----------------------//
  //ambientLight(50);
  var locX = height / 2;
  var locY = width;
  ambientMaterial(250);
  directionalLight(255, 0, 255, 0.25, 0.25, 0);
  //directionalLight(250, 0, 200, 700, 400, 0.25);
  directionalLight(0, 150, 250, 0, 0, -10);
  pointLight(0, 0, 255, locX, locY, 250);

  //stroke(0);
  //noStroke();
  //normalMaterial();
  strokeWeight(0.3);
  //Main Torus
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  torus(120, 30);
  //stroke(0, 0, 100);
  //fill (random(255),0, 255);
  
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
        //degree += 0.08;
        pop();
  }

  //-----------------------outer spheres-----------------------//
  for(let i = 0; i < worldSphereCount; i++) {
        push();
        rotateX(degree2);
        //rotateY(degree2);
        rotateZ(degree2);
        translate(0, 0, worldTranslate);
        //torus(10, 5);
        sphere(25);
        degree2 += 0.9;
        pop();
  }

  //-----------------------outer smaller spheres-----------------------//
  for(let i = 0; i < worldSphereCount/2; i++) {
        push();
        //rotateX(degree3);
        rotateY(degree3);
        rotateZ(degree3);
        translate(0, 0, 250);
        //torus(10, 5);
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
      translate(sin(frameCount * 0.02 + j) * 100, sin(frameCount * 0.02 + j) * 100, i * 0.1);
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
        //degree += 0.08;
        pop();
  }
  strokeWeight(1);
  //print(worldSphereCount);


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

  //-----------------------Gif Recorder-----------------------// 
  /*
  if(recording) {
    gifRecorder.addBuffer();
  }*/
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
