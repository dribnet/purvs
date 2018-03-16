const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
  angleMode(DEGREES);


  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {

  background(204); // light gray background
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  let ml = millis();
  let d = day();
  let m = month();
  let y = year();

  //second
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 300, 300);
  strokeWeight(4);
  stroke(255, 100, 150);
  let end = map(sc, 0, 60, 0, 360);
  arc(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 300, 300, 0, end);
 
  // push();
  // rotate(end);
  stroke(255);
  line(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, CANVAS_WIDTH/2 + 50, CANVAS_HEIGHT/2);
  // pop();

  //minute
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 280, 280);
  strokeWeight(4);
  stroke(255, 100, 150);
  let end1 = map(mn, 0, 60, 0, 360);
  arc(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 280, 280, 0, end1);

  //hour
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 260, 260);
  strokeWeight(4);
  stroke(255, 100, 150);
  let end2 = map(hr % 12, 0, 12, 0, 360);
  arc(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 260, 260, 0, end2);

  //millis
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 320, 320);
  strokeWeight(4);
  stroke(255, 100, 150);
  let end3 = map(ml, 0, 1000, 0, 360);
  arc(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 320, 320, 0, end3);

  //day
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 240, 240);
  strokeWeight(4);
  stroke(255, 100, 150);
  let end4 = map(d, 0, 1000, 0, 360);
  arc(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 240, 240, 0, end4);

  //month
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 220, 220);
  strokeWeight(4);
  stroke(255, 100, 150);
  let end5 = map(m, 0, 1000, 0, 360);
  arc(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 220, 220, 0, end5);

  //year
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 200, 200);
  strokeWeight(4);
  stroke(255, 100, 150);
  let end6 = map(y, 0, 1000, 0, 360);
  arc(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 200, 200, 0, end6);

  // fill(255);
  // noStroke();
  // text(hr + ':' + mn + ':' + sc, 100, 200);

}