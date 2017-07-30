var canvasWidth = 960,
    canvasHeight = 500;

var faces = [];

function setup () {
  // create the drawing canvas,save the canvas element
  var main_canvas = createCanvas(canvasWidth,canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  // array of faces to render
  for(var i=0; i<3; i++) {
    faces.push(new Face(getRandomFaceShapes(),focusedRandom(-2,2),focusedRandom(-6,6,1,3),focusedRandom(-2,2),focusedRandom(-3,3,1.5,2),focusedRandom(-3,3),Math.floor(focusedRandom(1,8,2,3)),focusedRandom(1,5,1.5,3)));
  }

  // rotation in degrees
  angleMode(DEGREES);
}

class Face {
  constructor(face_shape_value,face_randomise_value,mouth_value,nose_value,eye_value,chin_value,cheek_value,opacity_timing_value){
    this.face_shape_value = face_shape_value;
    this.face_randomise_value = face_randomise_value;
    this.mouth_value = mouth_value;
    this.nose_value = nose_value;
    this.eye_value = eye_value;
    this.chin_value = chin_value;
    this.cheek_value = cheek_value;
    this.opacity_timing_value = opacity_timing_value;
  }
}

// timer-specific variables
var duration = 5000,
    timers = [],
    animFuncs = [];

class Timer {
  constructor(startTime, duration, new_face){
    this.startTime = startTime;
    this.duration = duration;
    this.new_face = new_face;
  }

  val(time){
    return map(time, this.startTime, this.startTime+this.duration, 0, 1);
  }
}

function draw() {
  noStroke();

  // set up background
  fill(bg_color);
  rect(0,0,width,height);

  var time = millis();

  var w = canvasWidth/3,
      h = canvasHeight;

  for(var i=0; i<1; i++) {
    for(var j=0; j<3; j++) {
      if(!timers[j] || 1 < timers[j].val(time)){
        if(timers[j]) {
          faces[j] = timers[j].new_face;
        }
        //new timer time
        timers[j] = new Timer(time, duration*faces[j].opacity_timing_value, new Face(getRandomFaceShapes(),focusedRandom(-2,2),focusedRandom(-6,6,1,3),focusedRandom(-2,2),focusedRandom(-3,3,1.5,2),focusedRandom(-3,3),Math.floor(focusedRandom(1,8,2,3)),focusedRandom(1,5,1.5,3)));
      }

      // positioning the face
      var y = h/2 + h*i,
          x = w/2 + w*j;

      var timep = timers[j].val(time),
          old_face = faces[j],
          new_face = timers[j].new_face;

      // drawing the face
      drawFace(x,y,w/1.3,h/1.3,old_face.face_shape_value,old_face.face_randomise_value,old_face.mouth_value,old_face.nose_value,old_face.eye_value,old_face.chin_value,old_face.cheek_value,map(timep*old_face.opacity_timing_value, 0, 0.5, 256, 0));
      drawFace(x,y,w/1.3,h/1.3,new_face.face_shape_value,new_face.face_randomise_value,new_face.mouth_value,new_face.nose_value,new_face.eye_value,new_face.chin_value,new_face.cheek_value,map(timep*new_face.opacity_timing_value, 0.5, 1, 0, 256));
    }
  }
}

// global variables for colors
var bg_color = [245,245,245];

function drawFace(x,y,w,h,face_shape_value,face_randomise_value,mouth_value,nose_value,eye_value,chin_value,cheek_value,opacity) {
  var cheek_color = [],
      stroke_color = [30,30,30,opacity],
      fill_color = [245,245,245,opacity];

  cheek_color.push([224,80,111,opacity]);
  cheek_color.push([212,76,104,opacity]);
  cheek_color.push([199,71,98,opacity]);
  cheek_color.push([173,62,85,opacity]);
  cheek_color.push([135,48,67,opacity]);
  cheek_color.push([147,54,73,opacity]);
  cheek_color.push([83,31,41,opacity]);
  cheek_color.push([71,26,35,opacity]);

  push();
  translate(x,y);

  var extent = 0;
  if (h < w){ extent = h / 2; }
  else { extent = w / 2; }
  var scale = extent / 250.0;

  // cheeks
  fill(cheek_color[cheek_value]);

  rotate(-35);
  ellipse(-123*scale,-15*scale,60*scale,90*scale);

  rotate(55);
  ellipse(83*scale,-3*scale,50*scale,80*scale);

  // reset for main face shapes
  rotate(-20);
  stroke(stroke_color);
  noFill();

  // face shapes
  drawFaceShapes(face_shape_value, face_randomise_value, scale);

  translate(face_randomise_value,-face_randomise_value);
  rotate(face_randomise_value);
  strokeWeight(0.5);

  drawFaceShapes(face_shape_value, face_randomise_value, scale);

  translate(-face_randomise_value,face_randomise_value);
  rotate(-face_randomise_value);
  strokeWeight(1);

  fill(fill_color);

  // nose
  translate(nose_value, nose_value*2);
  triangle(5*scale+nose_value,0*scale-nose_value*5,-10*scale,51*scale,32*scale,51*scale);
  translate(-nose_value, -nose_value*2);

  // mouth
  triangle(8*scale,100*scale-mouth_value,-19*scale,99*scale+mouth_value,27*scale,99*scale+mouth_value);

  // chin
  quad(4*scale,134*scale,-6*scale,140*scale-chin_value,2*scale,162*scale,16*scale,151*scale+chin_value);

  // eye sockets
  fill(fill_color);
  quad(-131*scale,-146*scale,-126*scale,-103*scale,-46*scale,-111*scale,-72*scale,-151*scale);
  quad(43*scale,-118*scale,52*scale,-84*scale,104*scale,-88*scale,99*scale,-129*scale);

  // eyes
  strokeWeight(0.5);
  fill(stroke_color);
  triangle(-126*scale,-118*scale,-84*scale,-108*scale,-54*scale,-123*scale);
  triangle(47*scale,-102*scale,78*scale,-86*scale,103*scale,-100*scale);

  fill(fill_color);
  ellipse(-88*scale,-117*scale,22*scale,14*scale);
  ellipse(73*scale,-97*scale,17*scale,12*scale);

  fill(stroke_color);
  ellipse(-88*scale+eye_value,-118*scale,8*scale,8*scale);
  ellipse(73*scale+eye_value,-98*scale,6*scale,6*scale);

  // eyelids
  fill(fill_color);
  triangle(-126*scale,-118*scale,-84*scale,-144*scale,-54*scale,-122*scale);
  triangle(48*scale,-102*scale,61*scale,-116*scale,101*scale,-100*scale);

  pop();
}

function drawFaceShapes(face_shape_value, face_randomise_value, scale) {
  if (face_shape_value[0] == 1) {
    quad(-91*scale,-192*scale,-58*scale,86*scale,155*scale,14*scale,43*scale,-240*scale);
  }
  else if (face_shape_value[0] == 2) {
    beginShape();
    vertex(89*scale,13*scale);
    vertex(-1*scale,65*scale);
    vertex(-129*scale,-25*scale);
    vertex(-92*scale,-216*scale);
    vertex(99*scale,-239*scale);
    vertex(89*scale,13*scale);
    endShape();
  }
  else if (face_shape_value[0] == 3) {
    beginShape();
    vertex(-140*scale,-190*scale);
    vertex(-131*scale,-18*scale);
    vertex(34*scale,30*scale);
    vertex(68*scale,-134*scale);
    vertex(-60*scale,-239*scale);
    vertex(-140*scale,-190*scale);
    endShape();
  }

  if (face_shape_value[1] == 1) {
    beginShape();
    vertex(-25*scale,-107*scale);
    vertex(-108*scale,-21*scale);
    vertex(-47*scale,193*scale);
    vertex(57*scale,193*scale);
    vertex(140*scale,9*scale);
    vertex(-25*scale,-107*scale);
    endShape();
  }
  else if (face_shape_value[1] == 2) {
    quad(-58*scale,-138*scale,-139*scale,125*scale,32*scale,180*scale,153*scale,-32*scale,-58*scale,-138*scale);
  }
  else if (face_shape_value[1] == 3) {
    beginShape();
    vertex(25*scale,212*scale);
    vertex(-63*scale,168*scale);
    vertex(-105*scale,-161*scale);
    vertex(-53*scale,-196*scale);
    vertex(99*scale,-53*scale);
    vertex(25*scale,212*scale);
    endShape();
  }
}

function getRandomFaceShapes() {
  var randomResult1 = focusedRandom(0,100);
  if (randomResult1 <= 33){
    face_shape1 = 1;
  }
  else if (randomResult1 > 33 && randomResult1 <= 66){
    face_shape1 = 2;
  }
  else if (randomResult1 > 66){
    face_shape1 = 3;
  }

  var randomResult2 = focusedRandom(0,100);
  if (randomResult2 <= 33){
    face_shape2 = 1;
  }
  else if (randomResult2 > 33 && randomResult2 <= 66){
    face_shape2 = 2;
  }
  else if (randomResult2 > 66){
    face_shape2 = 3;
  }

  return [face_shape1, face_shape2];
}

function mouseClicked() {
  changeRandomSeed();
}

function changeRandomSeed() {
  curRandomSeed+=1;
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
