/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(obj) {
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

  angleMode(DEGREES);
  background(204); // light gray background
  
  let hr = obj.hours;
  let mn = obj.minutes;
  let sc = obj.seconds;
  let ml = obj.millis;
  // let d = day();
  // let m = month();
  // let y = year();
  //translate to the center
  translate(width/2, height/2);
  rotate(-90);

  //hour
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(0, 0, 300, 300);
  strokeWeight(4);
  stroke(255, 100, 150);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 300, 300, 0, hourAngle);

  //minute
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(0, 0, 280, 280);
  strokeWeight(4);
  stroke(255, 100, 150);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  //second
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(0, 0, 260, 260);
  strokeWeight(4);
  stroke(255, 100, 150);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 260, 260, 0, secondAngle);


  //sc_hand
  push();
  rotate(secondAngle);
  stroke(255);
  line(0, 0, 100, 0);
  pop();

  //min_hand
  push();
  rotate(minuteAngle);
  stroke(0);
  line(0, 0, 70, 0);
  pop();

  //hr_hand
  push();
  rotate(hourAngle);
  stroke(0);
  line(0, 0, 50, 0);
  pop();

  //text of clocks
  noStroke();
  fill(255);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("IX", -10, -180);

  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("X", -10, -180);

  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("XI", -10, -180);

  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("XII", -10, -180);

  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("I", -10, -180);

  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("II", -10, -180);

  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("III", -10, -180);

  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("IV", -10, -180);

  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("V", -10, -180);

  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("VI", -10, -180);

  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("VII", -10, -180);

  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("VIII", -10, -180);
}
