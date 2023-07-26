/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

function battery(x,y) {
  noFill();
  strokeWeight(3);
  stroke(0)
  beginShape();
    vertex(x-140, y+200);
    vertex(x+140, y+200);
    vertex(x+140, y-160);
    vertex(x+60, y-160);
    vertex(x+60, y-200);
    vertex(x-60, y-200);
    vertex(x-60, y-160);
    vertex(x-140, y-160);
  endShape(CLOSE);

  beginShape();
    vertex(x-150, y-160);
    vertex(x-210, y-160);
    vertex(x-210, y+200);
    vertex(x-150, y+200);
  endShape(CLOSE);

  beginShape();
    vertex(x+150, y-160);
    vertex(x+210, y-160);
    vertex(x+210, y+200);
    vertex(x+150, y+200);
  endShape(CLOSE);
}


function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  
  let centerX = 480;
  let centerY = 250;
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  let secondsWithFraction   = seconds + (millis / 1000.0);

  let hourBarWidth   = map(hours, 0, 23, 0, width);
  let minuteBarHeight = map(minutes, 0, 59, centerY+200, centerY-60);
  let secondHeightSmooth  = map(secondsWithFraction, 0, 60, centerY-250, centerY+110);
  let millisBarHeight = map(millis, 0, 1000, centerY+200, centerY-60);


  
  background(200); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);
  


  // fill(255);// pink
  // ellipse(width / 3, 350, 150);
  // fill(140, 255, 251) // blue
  // ellipse(width / 2, 350, 150);
  // fill(175, 133, 255); // purple
  // ellipse(width / 3 * 2, 350, 150);

  noStroke();
  fill(255);
  rect(centerX-210, centerY+200, 60, -secondHeightSmooth);
  battery(480, 250);

}

