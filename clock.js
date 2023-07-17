/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

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
  background(0); //  black background
  angleMode(DEGREES);
  fill(200); // dark grey
  textSize(40);
  //textAlign(CENTER, CENTER);
  let Seconds = obj.seconds;
  text("Seconds: "+Seconds, 700, 100);

  let ellipsewidth = 150;
  let m= map(obj.seconds, 0, 59, 0, height);

  fill(249, 174, 10);// yellow sun
  ellipse(width/2, height/2, 150);
  //fill(140, 255, 251) // blue
  //ellipse(width / 2, 350, ellipsewidth);
  //fill(175, 133, 255); // purple
  //ellipse(width / 3 * 2, 350, ellipsewidth);

  //attempt at rotating earth

  let angle = 50;
  let scalar = 100;
  let startX = width/2;
  let startY= height/2;
  
  let x = startX + scalar * cos(angle);
  let y = startY + scalar * sin(angle);

  ellipse(x+obj.seconds,y+obj.seconds,80);

  angle++;


}
