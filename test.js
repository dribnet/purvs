function setup() {
  createCanvas(800, 800);
  background(255, 255, 255);

  // translucent stroke using alpha value
  stroke(0, 0, 0, 5);
}

var circleWidth = 400;
var circleWidth2 = 200;
var pos = 1;

function draw() {
  // draw two random chords each frame
  noFill();
  randomChord(2);
  randomChord(2);
  randomChord(4);
  randomChord(4);
  randomChord(4);
  randomChord(4);

  if (frameCount % 1 == 0) {
    pos += 0.01
    if (pos > 13) {
      pos = 1;
    }
  }
}

function randomChord(mat) {
  // find a random point on a circle


  var angle1 = random(0, 2 * PI);
  var angle2 = random(0, 2 * PI);
  var angle3 = random(0, 2 * PI);
  var angle4 = random(0, 2 * PI);

  if (mat == 1) {
    var xpos1 = circleWidth + circleWidth * cos(angle1);
    var ypos1 = circleWidth2 + circleWidth2 * tan(angle1);
    var xpos2 = circleWidth + circleWidth * cos(angle2);
    var ypos2 = circleWidth2 + circleWidth2 * tan(angle2);
  } else if (mat == 2) {
    var xpos1 = circleWidth + circleWidth * cos(angle1);
    var ypos1 = circleWidth2 + circleWidth2 * sin(angle1);
    var xpos2 = circleWidth + circleWidth * cos(angle2);
    var ypos2 = circleWidth2 + circleWidth2 * sin(angle2);
  } else if (mat == 3) {
    var xpos1 = circleWidth + circleWidth * tan(angle1);
    var ypos1 = circleWidth2 + circleWidth2 * cos(angle1);
    var xpos2 = circleWidth + circleWidth * tan(angle2);
    var ypos2 = circleWidth2 + circleWidth2 * cos(angle2);
  } else if (mat == 4) {
    var xpos1 = circleWidth + circleWidth * cos(angle1);
    var ypos1 = circleWidth2 + circleWidth2 * tan(angle1);
    var xpos2 = circleWidth + circleWidth * cos(angle2);
    var ypos2 = circleWidth2 + circleWidth2 * sin(angle2);
    var xpos3 = circleWidth + circleWidth * cos(angle3);
    var ypos3 = circleWidth2 + circleWidth2 * sin(angle3);
    var xpos4 = circleWidth + circleWidth * cos(angle4);
    var ypos4 = circleWidth2 + circleWidth2 * tan(angle4);
  }


  // find another random point on the circle



  // draw a line between them
  if(mat!=4)
    line(xpos1, ypos1, xpos2, ypos2);
  else
    bezier(xpos1, ypos1, xpos2, ypos2, xpos3, ypos3, xpos4, ypos4)
}