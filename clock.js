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
  
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

    background(50); //  Grey
    fill(255); // white
    textSize(20);
    text("Hour: "   + hours, width*0.2, 22);
    text("Minute: " + minutes, width*0.4, 22);
    text("Second: " + seconds, width*0.6, 22);
    text("Millis: " + millis, width*0.8, 22);

  // fill(200); // dark grey
  // textSize(40);
  // textAlign(CENTER, CENTER);
  // text("Seconds: " + seconds, width / 2, 200);

  let hours_radius = map(obj.hours, 0, 59, 1, 150);
  fill(249, 140, 255);// pink
  ellipse(width / 3, 350, hours_radius);

  let minutes_radius = map(obj.minutes, 0, 59, 1, 150);
  fill(140, 255, 251) // blue
  ellipse(width / 2, 350, minutes_radius);

  let seconds_radius = map(seconds, 0, 59, 1, 150);
  fill(175, 133, 255); // purple
  ellipse(width / 3 * 2, 350, seconds_radius);

  let rect_height = map(seconds, 0, 59, 1, 150);
  fill(255);
  noStroke();
  rect(width/2, height/2, 40, - rect_height);
}
