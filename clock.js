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
  
  background(228,36,38); //  red
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);
  
  
//SUN PULSING
  fill(252,189,66);// sun orange
  ellipse(width / 3, 350, 150);
  
  fill(252,189,66,100);
  let sun_pulse=ellipse(width/3,350,150+millis)
  let size=map(sun_pulse,150, 600, 150,600 )
  if (obj.millis>=500){
    sun_pulse=ellipse(width/3, 350,size-millis)
  }


  //Purple ellipse
  let secondsWithFraction   = seconds + (millis / 1000.0);
 
  // text("Seconds with fraction: " + secondsWithFraction, width / 2, 50);

  let seconds_radius = 0;
  if(secondsWithFraction <= 59)  {
    seconds_radius = map(secondsWithFraction, 0, 60, 1, 300);
  }
  else {
    seconds_radius = map(millis, 0, 999, 300, 1);
  }

  fill(175, 133, 255); // purple
  ellipse(width / 3 * 2, height/2, seconds_radius);
}
 
  

  fill(140, 255, 251) // blue
  ellipse(width / 2, 350, 150);
  fill(175, 133, 255); // purple
  ellipse(width / 3 * 2, 350, 150);

