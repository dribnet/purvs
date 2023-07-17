let furthest_point = 0;
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
  background(50); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);

  let second_radius = map(obj.millis, 0, 999, 0, width/4);
  let minute_radius = map(obj.seconds, 0, 59, 0, width/4);
  let hour_radius = map(obj.minutes, 0, 59, 0, width/4);
  let day_radius = map(obj.hours, 0, 23, 0, width/4);

  strokeWeight(0);

  fill(249, 140, 255);// pink
  rect(0, height/3, second_radius, height/3);
  fill(140, 255, 251) // blue
  rect(second_radius, height/3, minute_radius, height/3);
  fill(175, 133, 255); // purple
  rect(second_radius+minute_radius, height/3, hour_radius, height/3);
  fill(255, 255, 0); // yellow
  rect(second_radius+minute_radius+hour_radius, height/3, day_radius, height/3);

  
  if(second_radius+minute_radius+hour_radius+day_radius > furthest_point) {
    furthest_point = second_radius+minute_radius+hour_radius+day_radius;
  }

  fill(255, 0, 0)
  rect(furthest_point, 0, width/(width/5), height);

}
