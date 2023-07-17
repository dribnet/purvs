/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  let seconds = obj.seconds;
  let minutes = obj.minutes;
  let hours = obj.hours;
  let millis = obj.millis;
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
  text(" Seconds  "+ seconds+"|", width -400, 200);
  text(" Minutes  "+ minutes+"|", width -640, 200);
  text("|Hours  "+ hours+"|", width / 8, 200);
  text(" Millis  "+ millis+"|", width -180, 200);

  //text("Minutes",+ seconds, width / 20, 200);
let bounce = map(obj.millis, 0,999,0,TWO_PI);
let phase1 = sin (bounce) ;
let y_bounce = map (phase1, -1,1,-75,75);
  
  let hour_radius = map(hours ,0,24,1,150);
  fill(249, 140, 255);// pink
  ellipse(width / 8, 350, +hour_radius);

  let min_radius = map(minutes ,0,59,1,150);
  fill(140, 255, 251) // blue
  ellipse(width -640, 350, +min_radius);
  

  let sec_radius = map(seconds ,0,59,1,150);
  fill(175, 133, 255); // purple
  ellipse(width -400, 350, + y_bounce);



  let millis_radius = map(millis ,0,1000,1,150);
  fill(200, 13, 55); // red
  ellipse(width -150, 350 +y_bounce, +millis_radius);
 

}
