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








// First clock made, the circles that get bigger and smaller based on the time, Circles also bounce up and down :)
  let millis = obj.millis;
  let seconds = obj.seconds;
  let minutes = obj.minutes;
  let hours = obj.hours;


  background(50); //  beige
  fill(200); // dark grey
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Hours: " + hours, width / 2, 120);
  text("Minutes: " + minutes, width / 2, 160);
  text("Seconds: " + seconds, width / 2, 200);
  text("Millis: " + millis, width / 2, 240);

  let bounce1 = map(obj.millis, 0, 999, 0, TWO_PI);
  let phase1 = sin(bounce1);
  let y_bounce1 = map(phase1, -1, 1, -10, 10);

  let bounce2 = map((obj.millis+100), 0, 999, 0, TWO_PI);
  let phase2 = sin(bounce2);
  let y_bounce2 = map(phase2, -1, 1, -10, 10);

  let bounce3 = map(obj.millis, 0, 999, 0, TWO_PI);
  let phase3 = sin(bounce3);
  let y_bounce3 = map(phase3, -1, 1, -10, 10);

  let bounce4 = map((obj.millis+100), 0, 999, 0, TWO_PI);
  let phase4 = sin(bounce4);
  let y_bounce4 = map(phase4, -1, 1, -10, 10);

  

  let hours_radius = map(hours, 0, 59, 1, 150);
  fill(249, 140, 255);// pink
  ellipse(width / 3, 350 + y_bounce1, hours_radius);

  let minutes_radius = map(minutes, 0, 59, 1, 150);
  fill(140, 255, 251) // blue
  ellipse(width / 2, 350 + y_bounce2, minutes_radius);


  let secondsWithFraction   = seconds + (millis / 1000.0);

  let seconds_radius = map(secondsWithFraction, 0, 59, 1, 150);
  fill(175, 133, 255); // purple
  ellipse(width / 3 * 2, 350 + y_bounce3, seconds_radius);


  let millis_radius = map(millis, 0, 999, 1, 150);
  fill(255, 165, 0); // orange
  ellipse(width / 3 * 2.5, 350 + y_bounce4, millis_radius);
}



