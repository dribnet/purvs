// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  // colors
  var orange = color(245, 108, 66)
  var pink = color(237, 142, 220);
  background(orange);
  fill(pink);
  stroke(pink);
  
  // variables
  let s = obj.seconds;
  let mappeds = map(s, 0, 59, 0, 360);
  let colortransparent = map(s, 0, 59, 0, 255);

  // clock outline transparency going with seconds 
  push();
  const circleColor = color(255, 255, 255, colortransparent);
  stroke(circleColor);
  noFill();
  ellipseMode(CENTER);
  drawingContext.setLineDash([5, 10, 30, 10]);
  ellipse(width/2, height/2, 490, 490);
  pop();

  // rotates the time 
  translate(width/2, height/2);
  rotate(mappeds);

  push();
  angleMode(DEGREES);
  textAlign(CENTER);
  textSize(50);
  noStroke();
  text("AM", 0, 0);
  pop();

  translate(-60, 100);
  scale(0.5);
  // 1
  rect(50, 0, 10, 100);
  // 0
  ellipse(150, 50, 50, 100);
  fill(orange);
  ellipse(150, 50, 35, 70);

  // 5
  fill(pink);
  rect(50, 130, 50, 12.5);
  rect(50, 130, 12.5, 50);
  noFill();
  strokeWeight(20);
  arc(60, 200, 75, 50, 270, 90, OPEN);
  // 7
  line(200, 140, 150, 230);
  strokeWeight(10);
  fill(pink);
  rect(150, 130, 50, 10);



}