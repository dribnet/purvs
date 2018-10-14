/*
 * This is the function to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */


/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512],
  [5, 768, 512],
  [10, 512, 776],
  [12, 512, 776]
]

var inc = .01;
var scl = 100;
var cols, rows;
var zoff = 0;
var fr;
var particles = [];
var flowfield;
var a;
var s;

function setup() {
  p5.colorMode(HSB, 255);
  p5.blendMode(BLEND);
  cols = floor(100 / scl);
  rows = floor(100 / scl);
  fr = createP('');
  flowfield = new Array(cols * rows);

  for (var i = 0; i < 1; i++) {
    particles[i] = new Particle();
  }
}

function drawPart(p5, x1, x2, y1, y2, z, zoom) {

  var yoff = 0;

  //direction of particles
  var dir = 5;

  p5.stroke(100);
  p5.fill(0,120,240,80);

  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = p5.noise(xoff, yoff, zoff) * TWO_PI * 3 ;
      var v = angle;
      
      flowfield[index] = v;

      xoff += inc;

    }

    yoff += inc;

    zoff += 0.03;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

}




// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

  p5.background(255);

  // Two ellipses with a radius of 50 units are then added.

 	p5.rect(2,2, 251, 251); 
  
  // debug - show border
  p5.noFill();
  p5.stroke(0)
  
  p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  let sizex = x2 - x1;
  p5.text("width: " + sizex, 10, 40);


  drawPart(p5);

}


