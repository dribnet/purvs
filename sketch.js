var img, mask;

var inc = 0.1;
var scl = 10; //vector every 10 pixels
var cols, rows; //flowfield grid

var zoff = 0; //3rd dimension(time)

var particles = [];
var flowfield = [];

function preload() {
  img = loadImage("input_1.jpg");
  mask = loadImage("mask_1.png");
}


function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  background(20);
  pixelDensity(1)
  
  //generate flowfield grid
  cols = floor(width / scl);
  rows = floor(height / scl);
  flowfield = new Array(cols * rows);

  //generate particle array
  for ( var i = 0 ; i < 5000; i++){
  particles[i] = new Particle();
  }
}

function draw() {
  //flowfield simulation that controls particles
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;

      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      pop();
    }
    yoff += inc;

    zoff += 0.0003; //time variable 
  }
  for (var i = 0; i < particles.length; i++){
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
}
