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
  let minutes = obj.minutes;
  let hours = obj.hours; 
  let millis = obj.millis; 
  let alarm = obj.seconds_until_alarm; 
  
  background(0); //  black
  fill(0); // black
  textSize(40);
  textAlign(CENTER, CENTER);
  text ()
  //text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);

//example ellipses from 18/07/23
  // let millis_radius = map(millis, 0, 999, 1, 150); //ellipse changes size with millis
  // fill(249, 140, 255);// pink
  // ellipse(width / 3, 350, millis_radius);
  

  // let minutes_radius = map(minutes, 0, 59, 1, 150); //ellipse chanages size with minutes 
  // fill(140, 255, 251) // blue
  // ellipse(width / 2, 350, minutes_radius);
  

  // let seconds_radius = map(seconds, 0, 59, 1, 150); //letting ellipse get to size as other ellipses 
  // fill(175, 133, 255); // purple
  // ellipse(width / 3 * 2, 350, seconds_radius); //ellipse getting larger with seconds 

  fill (140, 255, 251);
  ellipse(750, 130, 150, 40); //backgroundUFO
  
  fill (140, 255, 251);
ellipse(230, 130, 250, 80); //frontUFO 


}
