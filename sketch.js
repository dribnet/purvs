var canvasWidth = 960;
var canvasHeight = 500;
var slider1, slider2, slider3, slider4, slider5;
var drawFaceSelector;
var curRandomSeed = 0;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');

  randButton = createButton('randomize');
  randButton.mousePressed(changeRandomSeed);
  randButton.parent('selector1Container');

  // rotation in degrees
  angleMode(DEGREES);
  rectMode(CENTER);
  colorMode(HSB);
  noStroke();

  bert_drawFace = color(45, 90, 95)
  bert_nose = color(29, 96, 94)

  ernie_drawFace = color(30, 90, 92)
  ernie_drawEars = color(30, 90, 75);

  mouth = color(351, 100, 55)

  oscar_drawFace = color(75, 80, 50)
  oscar_brow = color(23, 80, 30)

  elmo_face_color = color(0, 100, 80);
  changeRandomSeed()
}

function mouseClicked() {
  changeRandomSeed();
}

// global variables for colors
var bg_color = "#ffffff";
var stroke_color = "#c78a5b";

var ernie_drawFace; //orange
var ernie_drawEars;
var ernie_nose = "rgb(218, 10, 31)" //red

var bert_drawFace //yellow
var bert_nose //orange

var oscar_drawFace;
var oscar_brow;

var elmo_face_color;


// global variables for colors
var bg_color1 = [225, 206, 187];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];

function drawErnie(x, y, w, h, tilt_value, eye_value, mouth_value) {
  // move to position1, rotate, draw "head" ellipse
  push();
  translate(x, y);
  rotate(-tilt_value/2);
  scale(0.5);

  //ears
  var rotation = -30;
  fill(ernie_drawEars);
  translate(-290/2, -10);
  rotate(rotation)
  ellipse(0, 0, 60, 70);
  rotate(-rotation)
  translate(290, 0);
  rotate(-rotation)
  ellipse(0, 0, 60, 70);
  rotate(rotation)
  translate(-290/2, 10);

  fill(ernie_drawFace);
  ellipse(0, 0, 290, 230);

  drawMouthEllipse(0, 30, 230, 50, 0.8-0.4*mouth_value/100, mouth, ernie_drawFace);

  // set fill to match background color
  var rotation = -40;

  fill("white");
  // draw two eyes
  rotate(rotation)
  ellipse(-10, -50, 60, 50);
  rotate(-rotation*2)
  ellipse(10, -50, 60, 50);
  rotate(rotation)

  // set fill back to black for eyeballs
  fill("black");
  rotate(rotation)
  ellipse(-eye_value/100*10, -50, 25, 25);
  rotate(-rotation*2)
  ellipse(eye_value/100*10, -50, 25, 25);
  rotate(rotation)

  fill(ernie_nose)
  ellipse(0, 5, 65, 70);
  pop();
}

function drawBert(x, y, w, h, tilt_value, eye_value, mouth_value) {
  // move to position2, rotate, draw "head" ellipse
  push();
  translate(x, y);
  rotate(tilt_value/2);
  scale(0.5);
  fill(bert_drawFace);
  ellipse(0, 0, 240, 370);

  translate(0, 30)

  var bert_mouth_h = 54;
  // mouth-hole with background color
  drawMouthArc(0, 30, 200, 5+50*mouth_value/100, mouth);

  // set fill to match background color
  var diff = map(eye_value, 0, 100, 0, 10);
  fill("white");
  // draw two eyes
  ellipse(-50, -80+diff, 70);
  ellipse( 50, -80+diff, 70);

  // set fill back to foreground for eyeballs
  fill("black");
  ellipse(-40, -80+diff, 30);
  ellipse( 40, -80+diff, 30);

  //bert eyebrows
  fill("black")
  rect(0, -130, 180, 10+eye_value/100*30)

  fill(bert_nose);
  ellipse(0, -10, 80, 110)
  pop();
}

function drawOscar(x, y, w, h, tilt_value, eye_value, mouth_value) {
  // move to position1, rotate, draw "head" ellipse
  push();
  translate(x, y);
  rotate(tilt_value*1.5);
  scale(0.5);
  //squeeze oscar
  fill(oscar_drawFace);
  ellipse(0, 0, 290, 200);

  drawMouthArc(0, 20, 260, 20+30*mouth_value/100, 'black');

  // set fill to match background color
  fill("white");
  // draw two eyes
  ellipse(-40, -20, 60, 45);
  ellipse( 40, -20, 60, 45);

  // set fill back to black for eyeballs
  fill("black");
  ellipse(-40, -20, 30);
  ellipse( 40, -20, 30);

  //oscar eyebrows
  fill(oscar_brow)
  rect(0, map(eye_value, 0, 100, -65, -40), 180, 20)

  pop();
}

function drawElmo(x, y, w, h, tilt_value, eye_value, mouth_value) {
  // move to position1, rotate, draw "head" ellipse
  push();
  translate(x, y);
  rotate(tilt_value);
  scale(0.5);
  //squeeze oscar
  fill(elmo_face_color);
  ellipse(0, 0, 260, 230);

  drawMouthArc(0, 10, 220, 20+60*mouth_value/100, 'black');

  // set fill to match background color
  fill("white");
  // draw two eyes
  ellipse(-40, -110, 70);
  ellipse( 40, -110, 70);

  // set fill back to black for eyeballs
  fill("black");
  ellipse(-37, -110, 25);
  ellipse( 37, -110, 25);

  fill(bert_nose)
  ellipse(0, -60, 70, 80);

  pop();
}

function drawMouthArc(x, y, width, height, mouthColor, inverse){
  //default to 0
  inverse |= false

  fill(mouthColor);
  if(inverse)
    arc(x, y+height, width, height*2, 180, 180, CHORD)
  else
    arc(x, y, width, height*2, 0, 180, CHORD)
}

function drawMouthEllipse(x, y, width, height, ellipseMod, mouthColor, faceColor){
  var ellipseHeight = height*2*ellipseMod;
  var ellipseY = y-height+ellipseHeight/2
  // mouth-hole with background color
  fill(mouth);
  ellipse(x, y, width, height*2);

  //cut out mouth
  fill(ernie_drawFace);
  ellipse(x, ellipseY, width*1.1, ellipseHeight*1.1);
}

var drawFuncs = [drawErnie, drawBert, drawOscar, drawElmo];

function changeRandomSeed() {
  var startPositions = [createVector(0.25*canvasWidth, 0.25*canvasHeight),
    createVector(0.25*canvasWidth, 0.75*canvasHeight),
    createVector(0.75*canvasWidth, 0.75*canvasHeight),
    createVector(0.75*canvasWidth, 0.25*canvasHeight),
    createVector(0.5*canvasWidth, 0.5*canvasHeight)]

  curRandomSeed = curRandomSeed + 1;
  drawFuncs = shuffle(drawFuncs);

  drawFuncs.forEach(function(val, i){
    objects[i] = new PhysicsObject(startPositions[i], p5.Vector.fromAngle(focusedRandom(0, TAU)), drawFuncs[i]);
  })
}

var buffer = 60;
var minHappy = buffer*8;

class PhysicsObject{
  constructor(startPos, startVel, drawFunc){
    this.position = startPos.copy();
    this.velocity = startVel.copy();
    this.draw = drawFunc;
  }

  updatePhysics(){
    //if outta bounds
    if(this.withinBufferDistance())
      this.velocity.rotate(180);
    
    this.position.add(this.velocity)
  }

  withinBufferDistance(){
    var minDist = buffer*2;
    var pos = this.position;
    objects.forEach(function(object){
      if(pos != object.position)
        minDist = min(pos.dist(object.position), minDist);
    })

    if(minDist < buffer*2)
      this.smile = new Lerper(millis(), 1500, function(val){
        return 50+50*sin(val*360*6);
      })
    

    return this.position.x <= buffer || this.position.y <= buffer || 
      canvasWidth-buffer <= this.position.x || canvasHeight-buffer <= this.position.y ||
      minDist < buffer*2;
  }

  getHappiness(){
    var minDist = buffer*6;
    var pos = this.position;
    objects.forEach(function(object){
      if(pos != object.position)
        minDist = min(pos.dist(object.position), minDist);
    })

    var returnVal = constrain(map(minDist, buffer*6, buffer*2, 0, 1), 0, 1);
    return returnVal*returnVal;
  }
}

(function doPhysicsUpdate(){
  setTimeout(doPhysicsUpdate, 20);
  if(objects)
    objects.forEach(function(object){
      object.updatePhysics();
    });
})();

Math.mod = function(x, y){
  return x - y * floor(x / y)
}

var objects = []

class Lerper{
  constructor(startTime, duration, from, to){
    this.startTime = startTime;
    this.duration = duration;
    if(typeof from == "number"){
      this.from = from;
      this.to = to;
    } else if(from instanceof Function)
      this.func = from;
  }

  getVal(time){
    //slerp time to 0..1, slerped 0..1 mapped on from..to
    if(this.from)
      return this.doLerp(time)*(this.to-this.from)+this.from;
    else if(this.func)
      return this.func(this.doLerp(time));
    else
      return this.doLerp(time);
  }

  doLerp(time){
    return (time-this.startTime)/this.duration;
  }

  isFinished(time){
    return (this.startTime+this.duration) < time;
  }
}

class Slerper extends Lerper{
  getVal(time){
    //slerp time to 0..1, slerped 0..1 mapped on from..to
    if(this.from)
      return this.doSlerp(time)*(this.to-this.from)+this.from;
    else if(this.func)
      return this.func(this.doSlerp(time));
    else
      return this.doSlerp(time);
  }

  doSlerp(time){
    return slerp((time-this.startTime)/this.duration);
  }
}

function slerp(val){
  val = constrain(val, 0, 1);
  return (cos(180+180*val)+1)/2;
}

var alwaysRand = new Math.seedrandom(focusedRandom())

function draw () {
  resetFocusedRandom(curRandomSeed);

  noStroke();
  background(210, 75, 100);

  // draw 1st drawFace
  fill(bg_color1);

  var w = canvasWidth / 5;
  var h = canvasHeight / 3;

  objects.forEach(function(object, i){
    var time = millis();

    var x = object.position.x;
    var y = object.position.y;

    if(!object.push || object.push.isFinished(time)){
      var div = 20
      let delta = focusedRandom(-PI/div, PI/div, 10, 0, alwaysRand);
      var duration = focusedRandom(2000, 5000, 1, 3000, alwaysRand)

      if(object.speed)
        var fromSpeed = object.speed.to;
      else
        var fromSpeed = 1;

      let toSpeed = focusedRandom(4, 0.2, 2, 1, alwaysRand);

      object.speed = new Slerper(time, duration, fromSpeed, toSpeed);
      object.push = new Lerper(time, duration, function(val){
        return p5.Vector.fromAngle(object.velocity.heading()+delta);
      })
    }
    object.velocity = object.push.getVal(time).mult(object.speed.getVal(time));

    if(!object.tilt || object.tilt.isFinished(time)){
      if(object.tilt)
        var from = object.tilt.to;
      else
        var from = 0;

      var duration = focusedRandom(500, 2000, 1, 1000, alwaysRand)
      var to = focusedRandom(-90, 90, 4, from/3, alwaysRand)
      object.tilt = new Slerper(time, duration, from, to)
    }

    if(!object.smile || object.smile.isFinished(time)){
      if(object.smile && typeof object.smile.to == "number")
        var from = object.smile.to;
      else
        var from = 50

      var duration = focusedRandom(100, 3000, 2, 600, alwaysRand)
      if(focusedRandom(null, null, null, null, alwaysRand) < 0.3)
        var to = from
      else
        var to = focusedRandom(40, 100, 1, 60, alwaysRand)
      object.smile = new Slerper(time, duration, from, to)
    }

    var eye_value = focusedRandom(0, 100);

    object.draw(x, y, w, h, object.tilt.getVal(time), eye_value, max(object.smile.getVal(time), 100*object.getHappiness()));
  })
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
