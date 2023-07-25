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


  //I could use For Loops for the beam animations


  let beamY1 = 470
  let beamY2 = 100
  let beamY3 = 470

  let beamY4 = 440
  let beamY5 = 160
  let beamY6 = 440


  let bounce1 = map(obj.millis, 0, 999, 0, TWO_PI);
  let phase1 = sin(bounce1);
  let y_bounce1 = map(phase1, -1, 1, -5, 5);

  let bounce2 = map((obj.millis+100), 0, 999, 0, TWO_PI);
  let phase2 = sin(bounce2);
  let y_bounce2 = map(phase2, -1, 1, -5, 5);

  //trial X animation -----------------
  let shift1 = map(obj.millis, 0, 999, 0, TWO_PI);
  let phase3 = sin(shift1);
  let x_shift1 = map(phase3, -1, 1, -5, 5);

  let shift2 = map(obj.millis, 0, 999, 0, TWO_PI);
  let phase4 = sin(shift2);
  let x_shift2 = map(phase4, -1, 1, 5, -5);

  
  fill (255);
  // triangle(180, 470, 300, 100, 430, 470); //lightbeamFront 
  triangle(180+x_shift1, beamY1, 300, beamY2+y_bounce2, 430+x_shift2, beamY3);
 
  
  fill (255);
  stroke (200);
  ellipse(305, 470, 248, 30); //round beam bottom

  fill (255);
  // triangle(660, 440, 750, 160, 830, 440); //lightbeamBack
  triangle(660+x_shift1, beamY4, 750, beamY5+y_bounce1, 830+x_shift2, beamY6);
  fill (255);
  stroke (200);
  ellipse(745, 440, 170, 15); //round beam bottom

  
  fill (140, 255, 251);
  ellipse(750, 160+y_bounce1, 150, 40); //backgroundUFO
  


  fill (140, 255, 251);
ellipse(300, 110+y_bounce2, 250, 70); //frontUFO 



//text (seconds, );  

let minutes_lift = map(minutes, 0, 59, 440, 176); //make number move up with hour
fill (77, 255, 5);
// rect(286, hours_lift, 30, 100); //hoursnumbers
textSize(90);
text(hours, 300, minutes_lift);




let seconds_lift = map(seconds, 0, 59, 420, 200); //make number move up with minutes 

fill (77, 255, 5);
stroke(50);
textSize(50);
text(minutes, 750, seconds_lift);
// rect(720, minutes_lift, 15, 50); //minutesnumbers 


// fill (77, 255, 5);
// rect(760, minutes_lift, 15, 50); //minutesnumbers




}
