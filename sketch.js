var canvasWidth = 960;
var canvasHeight = 500;
var slider1, slider2, slider3, slider4, slider5;
var faceSelector;
var counter 
var facesList = []; // array of objects

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create sliders
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

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('1');
  faceSelector.option('1');
  faceSelector.option('1');
  faceSelector.value('1');
  faceSelector.parent('selector1Container');

  // rotation in degrees
  angleMode(DEGREES);

  for (var i=0; i<8; i++) {
    facesList.push(new drawFace(i * 160-160+random(0,40),150,random(0,100),random(0,100),random(0,10)));
  }
  for (var i=0; i<8; i++) {
    facesList.push(new drawFace(i * 160-160+random(0,40),300,random(0,100),random(0,100),random(0,10)));
  }
  for (var i=0; i<8; i++) {
    facesList.push(new drawFace(i * 160-160+random(0,40),450,random(0,100),random(0,100),random(0,10)));
  }
}

// global variables for colors
var bg_color1 = [0, 0, 0];
var bg_color2 = [47, 59, 64];
var bg_color3 = [70, 70, 120];

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [20, 20, 0];

function drawFace(x, y, tilt_value, eye_value, chain_scale) {
  this.x = x;
  this.y = y;

  this.scale_b = 100;
  this.tilt_value = tilt_value;
  this.eye_value = eye_value;
  this.chain_scale = chain_scale;
  this.colour_random = random(-50,30);

  this.clothing = random(0,3);

  this.tilt_direction = false;
  this.eye_direction = false;
  this.chain_direction = false;

  this.create = function(){
    push();
    this.x +=1;
    if (this.x > 1120){
      this.x -= 1280;
      this.clothing = random(0,3);
    }
    translate(this.x, this.y);
    translate(0,-70);
    //rotate(tilt_value);
    var extent = 0;
    //map size to location
    if (this.x < 100){
      this.scale_b = map(this.x,0,100,1,80);
    }else if (this.x > 900){
      this.scale_b = map(this.x,900,960,80,1);
    }else{
      this.scale_b = map(this.x,900,960,80,80);
    }
    /*
    if (this.tilt_value < 0){
        this.tilt_direction = true;
    }else if (this.tilt_value > 100){
        this.tilt_direction = false;
    }
    if (this.eye_value < 0){
        this.eye_direction = true;
    }else if (this.eye_value > 100){
        this.eye_direction = false;
    }
    if (this.chain_scale <= 0){
        this.chain_direction = true;
    }else if (this.chain_scale > 18){
        this.chain_direction = false;
    }
    //
    if (this.tilt_direction == true){
      this.tilt_value += .4;
    }else{
      this.tilt_value -= .4;
    }
    if (this.eye_direction == true){
      this.eye_value += .6;
    }else{
      this.eye_value -= .6;
    }
    if (this.chain_direction == true){
      this.chain_scale += .1;
    }else{
      this.chain_scale -= .1;
    }
    */
    var scale = this.scale_b / 250.0;
    var chain_value = this.chain_scale * scale;

    bg_color1 = [map(this.tilt_value,0,100,91,150),map(this.eye_value,0,100,45,65),map(this.eye_value,0,100,12,120)];
    //ellipse(0, 0, 300 * scale, 400 * scale);
    fill(137 + this.colour_random, 108 + this.colour_random, 78 + this.colour_random);
    beginShape();
    vertex(0, -125* scale);
    bezierVertex(-84* scale, -122* scale,-130* scale, -31* scale, -128* scale, 46* scale);
    bezierVertex(-127* scale, 105* scale, -75* scale, 131* scale, 0, 130* scale);
    bezierVertex(75* scale, 131* scale,127* scale, 105* scale,128* scale, 46* scale);
    bezierVertex(130* scale, -31* scale,84* scale, -122* scale,0, -125* scale);
    endShape();

    beginShape();
    vertex(80* scale,100* scale);
    vertex(-80* scale,100* scale);
    vertex(0,170* scale);
    endShape();

    ellipse(-95* scale,-105* scale,60* scale,60* scale);
    ellipse(95* scale,-105* scale,60* scale,60* scale);
    fill( 211 +(this.colour_random/1.5), 191+(this.colour_random/1.5), 180+(this.colour_random/1.5));
    ellipse(-97* scale,-105* scale,48* scale,48* scale);
    ellipse(97* scale,-105* scale,48* scale,48* scale);

    beginShape();
    vertex(0, 20* scale);
    bezierVertex(-22* scale, 20* scale, -64* scale, 49* scale, -63* scale, 88* scale);
    bezierVertex(-65* scale, 104* scale, -36* scale, 128* scale, 0, 128* scale);
    bezierVertex(36* scale, 128* scale,65* scale, 104* scale,63* scale, 88* scale);
    bezierVertex(64* scale, 49* scale,22* scale, 20* scale,0, 20* scale);
    endShape();

    fill('#5f4c2c');
    beginShape();
    vertex(-14* scale, 37* scale);
    bezierVertex(-14* scale, 39* scale, -6* scale, 47* scale, 0* scale, 48* scale);
    bezierVertex(6* scale, 47* scale, 14* scale, 39* scale, 14* scale, 37* scale);
    vertex(0,34* scale);
    endShape();

    // eyes
    translate(-60* scale,-10* scale);
    rotate(10);
    //EYE1
    fill('#ffffff');
    ellipse(0,0,60* scale,120* scale);
    //PUPIL1
    fill(map(this.tilt_value,0,100,247,0),map(this.eye_value,0,100,193,0),map(this.eye_value,0,100,61,0));
    ellipse(5* scale,-9* scale,35* scale,75* scale);
    fill(map(this.tilt_value,0,100,0,208),map(this.eye_value,0,100,0,29),map(this.eye_value,0,100,0,95));
    ellipse(5* scale,-4* scale,30* scale,60* scale);
    fill(map(this.tilt_value,0,100,255,244),map(this.eye_value,0,100,255,241),map(this.eye_value,0,100,255,88));
    rotate(-20);
    ellipse(4* scale,-19* scale,13* scale,21* scale);
    fill('#FFFFFF');
    ellipse(7* scale,-6* scale,6* scale,12* scale);
    fill('#FFFFFF');
    ellipse(7* scale,14* scale,11* scale,17* scale);
    rotate(10);
    translate(120* scale,0);
    rotate(-10);
    //EYE2
    fill('#ffffff');
    ellipse(0,0,60* scale,120* scale);
    //PUPIL2
    fill(map(this.tilt_value,0,100,247,0),map(this.eye_value,0,100,193,161),map(this.eye_value,0,100,61,186));
    ellipse(-5* scale,-9* scale,35* scale,75* scale);
    fill('#000000');
    ellipse(-5* scale,-4* scale,30* scale,60* scale);
    fill(map(this.tilt_value,0,100,255,212),map(this.eye_value,0,100,255,29),map(this.eye_value,0,100,255,96));
    ellipse(-8* scale,-21* scale,13* scale,21* scale);
    fill('#ffffff');
    ellipse(-6* scale,-8* scale,6* scale,12* scale);
    fill(map(this.tilt_value,0,100,255,244),map(this.eye_value,0,100,255,241),map(this.eye_value,0,100,255,88));
    ellipse(-3* scale,14* scale,11* scale,17* scale);
    rotate(10);
    translate(-60* scale,10* scale);

    //Suit
    if(this.clothing < 1.2){
      fill(map(this.tilt_value,0,100,247,0),map(this.eye_value,0,100,193,0),map(this.eye_value,0,100,61,0));
      beginShape();
      vertex(90* scale,165* scale);
      vertex(50* scale,126* scale);
      vertex(0* scale,170* scale);
      vertex(-50* scale,126* scale);
      vertex(-90* scale,165* scale);
      vertex(0,300* scale);
      endShape();


      fill('#c1c1c1');
      beginShape();
      vertex(60* scale,155* scale);
      vertex(0,170* scale);
      vertex(-60* scale,155* scale);
      vertex(0,map(this.eye_value,0,100,170* scale,300* scale));
      endShape();
      
      fill('#440044');
      beginShape();
      vertex(60* scale,155* scale);
      vertex(0,170* scale);
      vertex(-60* scale,155* scale);
      vertex(0,map(this.eye_value,0,100,170* scale,200* scale));
      endShape();
      beginShape();
      vertex(20* scale,map(this.eye_value,0,100,170* scale,255* scale));
      vertex(0,map(this.eye_value,0,100,170* scale,180* scale));
      vertex(-20* scale,map(this.eye_value,0,100,170* scale,255* scale));
      vertex(0,map(this.eye_value,0,100,170* scale,300* scale));
      endShape();

      fill(map(this.tilt_value,0,100,255,193),map(this.eye_value,0,100,255,193),map(this.eye_value,0,100,255,193));
      beginShape();
      vertex(map(this.tilt_value,0,100,45* scale,32* scale),220* scale);
      vertex(60* scale,155* scale);
      vertex(50* scale,126* scale);
      vertex(0,170* scale);
      vertex(-50* scale,126* scale);
      vertex(-60* scale,155* scale);
      vertex(map(this.tilt_value,0,100,-45* scale,-32* scale),220* scale);
      vertex(0,170* scale);
      endShape();

      //glasses
      fill(0,0,0,chain_value*10);
      strokeWeight(chain_value/2);
      stroke(map(this.tilt_value,100,0,247,100),map(this.eye_value,0,100,193,100),map(this.eye_value,0,100,61,100));
      rect(30* scale,10* scale,50* scale,20* scale);
      rect(-30* scale,10* scale,-50* scale,20* scale);
      line(-30* scale,20* scale,30* scale,20* scale);
      noStroke();
    }else if (this.clothing < 2){
      fill(map(this.tilt_value,0,100,247,0),0,map(this.tilt_value,0,100,61,0));
      beginShape();
      vertex(90* scale,165* scale);
      vertex(50* scale,126* scale);
      vertex(0* scale,170* scale);
      vertex(-50* scale,126* scale);
      vertex(-90* scale,165* scale);
      vertex(0,300* scale);
      endShape();
      

      fill(2555,255,255);
      beginShape();
      vertex(50* scale,222* scale);
      vertex(50* scale,126* scale);
      vertex(0* scale,170* scale);
      vertex(-50* scale,126* scale);
      vertex(-50* scale,222* scale);
      vertex(0,300* scale);
      endShape();

      fill(137 + this.colour_random, 108 + this.colour_random, 78 + this.colour_random);
      beginShape();
      vertex(49* scale,126* scale);
      vertex(0,169* scale);
      vertex(-49* scale,126* scale);
      vertex(0,map(this.eye_value,0,100,170* scale,300* scale));
      endShape();

      fill(212,175,55);
      ellipse(55* scale,133* scale,chain_value,chain_value);
      ellipse(47* scale,154* scale,chain_value,chain_value);
      ellipse(35* scale,172* scale,chain_value,chain_value);
      ellipse(22* scale,185* scale,chain_value,chain_value);
      ellipse(11* scale,195* scale,chain_value,chain_value);
      ellipse(0,200* scale,chain_value,chain_value);
      ellipse(-11* scale,195* scale,chain_value,chain_value);
      ellipse(-22* scale,185* scale,chain_value,chain_value);
      ellipse(-35* scale,172* scale,chain_value,chain_value);
      ellipse(-47* scale,154* scale,chain_value,chain_value);
      ellipse(-55* scale,133* scale,chain_value,chain_value);
    }else{
      fill(map(this.tilt_value,0,100,247,0),map(this.eye_value,0,100,193,0),map(this.eye_value,0,100,61,0));
      beginShape();
      vertex(90* scale,165* scale);
      vertex(50* scale,126* scale);
      vertex(0* scale,170* scale);
      vertex(-50* scale,126* scale);
      vertex(-90* scale,165* scale);
      vertex(0,300* scale);
      endShape();

      fill('#c1c1c1');
      beginShape();
      vertex(60* scale,155* scale);
      vertex(0,170* scale);
      vertex(-60* scale,155* scale);
      vertex(0,170* scale);
      endShape();
      fill(map(this.eye_value,0,100,247,0),map(this.tilt_value,0,100,193,0),map(this.eye_value,0,100,61,0));
      beginShape();
      vertex(0, -81* scale);
      bezierVertex(90* scale, -81* scale,84* scale, -122* scale, 0, -125* scale);
      endShape();
      beginShape();
      vertex(0, -81* scale);
      bezierVertex(-90* scale, -81* scale,-84* scale, -122* scale, 0, -125* scale);
      endShape();
      fill(map(this.eye_value,0,100,247,31)-31,map(this.eye_value,0,100,193,31)-30,map(this.tilt_value,0,100,61,30)-30);
      beginShape();
      vertex(-65* scale,-104* scale);
      bezierVertex(-65* scale,-104* scale,-65* scale, -150* scale, 0, -150* scale);
      vertex(0, -150* scale);
      bezierVertex(0, -150* scale,65* scale, -150* scale, 65* scale,-104* scale);
      vertex(65* scale,-104* scale);
      endShape();
      rect(10*scale,176*scale,45*scale,25*scale);

    }
    pop();
    }
}

function draw () {
  noStroke();

  var mode = faceSelector.value();

  background(bg_color1);

  var s1 = slider1.value();
  var s2 = slider2.value();
  var s3 = slider3.value();
  var s4 = slider4.value();
  var s5 = slider5.value();

  // use same size / y_pos for all faces
  var face_w = canvasWidth / 4;
  var face_h = face_w;
  var face_y = height / 2 - 100;
  var face_x = width / 2;
  var scale_b = 200;

  // draw 1st face
  fill(bg_color1);
  rect(0, 0, width/3, height);

  for (var i=0; i<facesList.length; i++) {
    facesList[i].create();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
