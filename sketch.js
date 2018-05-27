var sourceImg;
var time = 0;

var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

var particles = [];
var flowfield = [];

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  background(20);
  sourceImg.loadPixels();
  maskImg.loadPixels();

  pixelDensity(1)
  cols = floor(width / scl);
  rows = floor(height / scl);

  flowfield = new Array(cols * rows);

  for (var i = 0 ; i < 1000; i++){
  particles[i] = new Particle();
  }
}

function draw() {
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
      strokeWeight(1);
      stroke(255,50);
      pop();
    }
    yoff += inc;

    zoff += 0.0003;
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


// function draw () {
//   for(let i=0;i<100;i++) {
//     let x = floor(random(sourceImg.width));
//     let y = floor(random(sourceImg.height));
//     let pix = sourceImg.get(x, y);
//     let mask = maskImg.get(x, y);
//     let pointSize = 100;
//     let halfSize = 50;
//     fill(pix);
//     if(mask[0] > 128) {
//       ellipse(x, y, pointSize, pointSize);
//     }
//     else {
//       rect(x-halfSize, y-halfSize, pointSize, pointSize);    
//     }
//   }
