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
  
  let seconds = obj.seconds;
  let mins = obj.minutes;

  background(50); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  text("seconds = " + seconds, width / 2, 200);


  fill(249, 140, 255);// pink
  ellipse(width / 3, 350, 150);

  let minRad = map(mins,0,59, 0,150)
  fill(140, 255, 251) // blue
  ellipse(width / 2, 350, minRad);

  let secondsRadius = map(seconds,0,59, 0,150)
  fill(175, 133, 255); // purple
  ellipse(width / 3 * 2, secondsRadius, secondsRadius);

}
