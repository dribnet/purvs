var slider1, slider2, slider3;
var inc = 0.50;
var scl = 40;
var cols, rows;
var zoff = 0;

var mode = true;

var particles = [];
var flowfield;

function setup () {
  createCanvas(960, 500);
  cols = floor(width / scl);
  rows = floor(height / scl);
  pixelDensity(1);

  flowfield = new Array(cols * rows);

  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(10, 50, 25);
  slider3 = createSlider(0, 255, 255);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');

  for (var i = 0; i < 500; i++){
    particles[i] = new Particle();
  }

  background(0);
}

function draw() {
  if (mode == true){ 
    Landscape();
  }
  else if (mode == false){
    Wallpaper();
  }
}

function Wallpaper() {

  //WALLPAPER

  var s1v = slider1.value();
  var s2v = slider2.value();
  var s3v = slider3.value();


  strokeWeight(2);
  stroke(s3v, 198, 203);
  fill(255);
  
  ellipseMode(CENTER);

  var x = 0;
  var y = 0;

  for (var x = 0; x <= width; x += 10) {
    for (var y = 0; y <= height; y += 10) {
     ellipse(x, y, s1v/5, s1v/5);  
    }     
  }

  var i = 0;
  
  stroke(255, 100);
  strokeWeight(75);
  for (var i = 0; i <= width + width/2; i += 200) {
    line(i - width/2, -50, 0 + i, height+50);   
  }

  for (var i = 0; i <= width + width/2; i += 200) {
    line(i, -50, -width/2 + i, height+50);   
  }

  stroke(255);
  strokeWeight(s2v);
  for (var i = 0; i <= width + width/2; i += 200) {
    line(i - width/2, -50, 0 + i, height+50);   
  }

  for (var i = 0; i <= width + width/2; i += 200) {
    line(i, -50, -width/2 + i, height+50);   
  }

  // noLoop();
}

function Landscape () {
  //GENERATIVE LANDSCAPE
  //Code based on tutorials from The Coding Train by Daniel Shiffman https://www.patreon.com/codingtrain
  
  var yoff = 0;

  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * (TWO_PI * 4);
      var v = p5.Vector.fromAngle(angle);
      v.setMag(5);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
    }
    yoff += inc;
    zoff += 0.0003;
  }  

  for (var i = 0; i <particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
    
  }

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }

  if (key == 'l'){
    background(0);
    mode = true;
  }

  else if (key == 'w'){
    background(255);
    mode = false;
  }


}
