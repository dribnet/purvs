//globle variables
var startX = 0, startY = 0, radio, slider1, slider2, slider3, slider4;

function setup () {
  var main_canvas = createCanvas(960, 500);
  main_canvas.parent('canvas-container');
  
  // create radio
  radio = createRadio();
  radio.option('rect');
  radio.option('ellipse');
  radio.option('hexa');
  radio.option('octa');
  radio.value('rect');
  radio.parent('shape-selector-holder');
  radio.changed(randomizeTranslationValue);
  
  randomizeTranslationValue();
  frameRate(1);
}

function draw () {
  var to = color('#EF4623');
  var to = color('#f5ec25');
  var from = color('#1878B3');
  
  //angleMode(DEGREES);
  fill(255, 255, 255, 1);
  
  strokeWeight(0.1);
  translate(startX, startY);  
  // /print(width/12);
  var x = 0;
  var count = 0.05;
  var shape = radio.value();
  while(x < width){
    var colour = lerpColor(from, to, count);
    stroke(colour);
    for (var i = 0; i < 16; i ++) {
      var rand = random(0,100);
      if(rand < 20){
        stroke(random(255), random(255), random(255));
      }
      window[shape](x, 20, 10, 1 * x);
      rotate(PI/8);
    }
    x = x + width/24;
    count = count + 0.05;
  }
}

function randomizeTranslationValue(){
  startX = random(0, width); 
  startY = random(0, height);
}

/*
 * function to draw a hexagon shape
 * adapted from: https://p5js.org/examples/form-regular-polygon.html
 * not included in the above object as it is a function that should be available globally
 * @param {Number} x        - x-coordinate of the hexagon
 * @param {Number} y      - y-coordinate of the hexagon
 * @param {Number} radius   - radius of the hexagon
 */
function hexa(x, y, radius) {
  angleMode(RADIANS);
  var angle = TWO_PI / 6;
  beginShape();
  for (var a = TWO_PI/12; a < TWO_PI + TWO_PI/12; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

/*
 * function to draw a octagon shape
 * adapted from: https://p5js.org/examples/form-regular-polygon.html
 * @param {Number} x        - x-coordinate of the octagon
 * @param {Number} y      - y-coordinate of the octagon
 * @param {Number} radius   - radius of the octagon
 */
function octa(x, y, radius) {
  angleMode(RADIANS);
  var angle = TWO_PI / 8;
  beginShape();
  for (var a = TWO_PI/16; a < TWO_PI + TWO_PI/16; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}


