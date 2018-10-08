function setup() {
  createCanvas(800, 800);
  background(255, 255, 255);
  frameRate(60);

  // translucent stroke using alpha value
  stroke(123, 36, 242, 5);
}


var ON = true;
var circleWidth1 = 400;
var circleWidth2 = 200;
var circleWidth3 = 100;
var globalYOffset = 200;
var pos = 1;
var seconds = 0;

function draw() {
  // draw two random chords each frame
  noFill();
  
  // if(ON){
    // randomChord(2);
    // randomChord(2);
    // randomChord(3);
    // randomChord(3);
    // randomChord(4);
    // randomChord(4);
    // randomChord(5);
    // randomChord(5);
    randomChord(6);
    randomChord(6);
    randomChord(7);
    randomChord(7);
  // }
  
  if (frameCount % (60*1) == 0 ) {
    seconds++;
    console.log(seconds);
  }
  
  if (seconds == 5 && ON) {
    console.log("OFF");
    ON = false;
    seconds = 0;
    stroke(32,154,99, 5);
  } else if (seconds == 5 && !ON) {
    console.log("ON");
    ON = true;
    stroke(123, 36, 242, 5);
    seconds = 0;
  }
}

function randomChord(mat) {
  // find a random point on a circle


  var angle1 = random(0, 2 * PI);
  var angle2 = random(0, 2 * PI);
  var angle3 = random(0, 2 * PI);
  var angle4 = random(0, 2 * PI);

  if (mat == 1) {//vert valley
    var xpos1 = circleWidth1 + circleWidth1 * cos(angle1);
    var ypos1 = circleWidth2 + circleWidth2 * tan(angle1);
    var xpos2 = circleWidth1 + circleWidth1 * cos(angle2);
    var ypos2 = circleWidth2 + circleWidth2 * tan(angle2);
    line(xpos1, ypos1+globalYOffset, xpos2, ypos2+globalYOffset);
  } else if (mat == 2) {//ellipse wide
    var xpos1 = circleWidth1 + circleWidth1 * cos(angle1);
    var ypos1 = circleWidth2 + circleWidth2 * sin(angle1);
    var xpos2 = circleWidth1 + circleWidth1 * cos(angle2);
    var ypos2 = circleWidth2 + circleWidth2 * sin(angle2);
    line(xpos1, ypos1+globalYOffset, xpos2, ypos2+globalYOffset);
  } else if (mat == 3) {//ellipse tall
    var xpos1 = circleWidth1 + circleWidth2 * cos(angle1);
    var ypos1 = circleWidth2 + circleWidth1 * sin(angle1);
    var xpos2 = circleWidth1 + circleWidth2 * cos(angle2);
    var ypos2 = circleWidth2 + circleWidth1 * sin(angle2);
    line(xpos1, ypos1+globalYOffset, xpos2, ypos2+globalYOffset);
  }else if (mat == 4) {//circle
    var xpos1 = circleWidth1 + circleWidth1 * cos(angle1);
    var ypos1 = circleWidth2 + circleWidth1 * sin(angle1);
    var xpos2 = circleWidth1 + circleWidth1 * cos(angle2);
    var ypos2 = circleWidth2 + circleWidth1 * sin(angle2);
    line(xpos1, ypos1+globalYOffset, xpos2, ypos2+globalYOffset);
  } else if (mat == 5) {//horizontal valley
    var xpos1 = circleWidth1 + circleWidth1 * tan(angle1);
    var ypos1 = circleWidth2 + circleWidth2 * cos(angle1);
    var xpos2 = circleWidth1 + circleWidth1 * tan(angle2);
    var ypos2 = circleWidth2 + circleWidth2 * cos(angle2);
    line(xpos1, ypos1+globalYOffset, xpos2, ypos2+globalYOffset);
  } else if (mat == 6) {//vert valley bezier
    var xpos1 = (circleWidth1) + (circleWidth2) * cos(angle1);
    var ypos1 = (circleWidth2) + (circleWidth3/2) * tan(angle1);
    var xpos2 = (circleWidth1) + (circleWidth2) * cos(angle2);
    var ypos2 = (circleWidth2) + (circleWidth3/2) * sin(angle2);
    var xpos3 = (circleWidth1) + (circleWidth2) * cos(angle3);
    var ypos3 = (circleWidth2) + (circleWidth3/2) * sin(angle3);
    var xpos4 = (circleWidth1) + (circleWidth2) * cos(angle4);
    var ypos4 = (circleWidth2) + (circleWidth3/2) * tan(angle4);
    bezier(xpos1, ypos1+globalYOffset, xpos2, ypos2+globalYOffset, xpos3, ypos3+globalYOffset, xpos4, ypos4+globalYOffset)
  } else if (mat == 7) {//Horiz valley bezier
    var xpos1 = (circleWidth1) + (circleWidth3/2) * tan(angle1);
    var ypos1 = (circleWidth2) + (circleWidth2) * cos(angle1);
    var xpos2 = (circleWidth1) + (circleWidth2) * cos(angle2);
    var ypos2 = (circleWidth2) + (circleWidth3/2) * sin(angle2);
    var xpos3 = (circleWidth1) + (circleWidth2) * cos(angle3);
    var ypos3 = (circleWidth2) + (circleWidth3/2) * sin(angle3);
    var xpos4 = (circleWidth1) + (circleWidth3/2) * tan(angle4);
    var ypos4 = (circleWidth2) + (circleWidth2) * cos(angle4);
    bezier(xpos1, ypos1+globalYOffset, xpos2, ypos2+globalYOffset, xpos3, ypos3+globalYOffset, xpos4, ypos4+globalYOffset)
  } else if (mat == 8) {
    //regressive loop
    for(var i = 1; i < 4; i++){
      //circle
      var xpos1 = circleWidth1 + (circleWidth2/i) * cos(angle1);
      var ypos1 = circleWidth2 + (circleWidth2/i) * sin(angle1);
      var xpos2 = circleWidth1 + (circleWidth2/i) * cos(angle2);
      var ypos2 = circleWidth2 + (circleWidth2/i) * sin(angle2);
      line(xpos1, ypos1+globalYOffset, xpos2, ypos2+globalYOffset);
      //ellipse wide
      var xpos1 = circleWidth1 + (circleWidth1/i) * cos(angle1);
      var ypos1 = circleWidth2 + (circleWidth2/i) * sin(angle1);
      var xpos2 = circleWidth1 + (circleWidth1/i) * cos(angle2);
      var ypos2 = circleWidth2 + (circleWidth2/i) * sin(angle2);
      line(xpos1, ypos1+globalYOffset, xpos2, ypos2+globalYOffset);
      //ellipse tall
      var xpos1 = circleWidth1 + (circleWidth2/i) * cos(angle1);
      var ypos1 = circleWidth2 + (circleWidth1/i) * sin(angle1);
      var xpos2 = circleWidth1 + (circleWidth2/i) * cos(angle2);
      var ypos2 = circleWidth2 + (circleWidth1/i) * sin(angle2);
      line(xpos1, ypos1+globalYOffset, xpos2, ypos2+globalYOffset);
    }
  }
 
}