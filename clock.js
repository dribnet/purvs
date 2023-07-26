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
//   background(50); //  beige
//   fill(200); // dark grey
//   textSize(40);
//   textAlign(CENTER, CENTER);
//   text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);
  
  

//   fill(249, 1401, 255);// pink
//   ellipse(width / 3, 350, 150);
  
//   fill(249,1401,255,190);
//   let size=map(ellipse,0, 600, 150,600 )
//   ellipse(width / 3, 350,150+obj.millis)
//   if (obj.millis>500){
//     ellipse(width/3, 350,600-obj.millis)
//   }


//   //Purple ellipse
//   let secondsWithFraction   = seconds + (millis / 1000.0);
 
//   // text("Seconds with fraction: " + secondsWithFraction, width / 2, 50);

//   let seconds_radius = 0;
//   if(secondsWithFraction <= 59)  {
//     seconds_radius = map(secondsWithFraction, 0, 60, 1, 300);
//   }
//   else {
//     seconds_radius = map(millis, 0, 999, 300, 1);
//   }

//   fill(175, 133, 255); // purple
//   ellipse(width / 3 * 2, height/2, seconds_radius);
// }
 
  

//   fill(140, 255, 251) // blue
//   ellipse(width / 2, 350, 150);
//   fill(175, 133, 255); // purple
//   ellipse(width / 3 * 2, 350, 150);

background(210,4,45); //  red/cherry
//Image(img,0,0,960,500)
fill(200); // dark grey
textSize(40);
textAlign(CENTER, CENTER);
text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);


let millisSize=0

noStroke()

fill(255,191,0);// Yellow
ellipse(width / 3, 350, 150);

fill(255,191,0,100);
fill(255,191,0,150);

if(obj.millis<=500){
millisSize= map(obj.millis,0,1000,150,300)
millisSize= map(obj.millis,0,1000,130,300)
}
else if(obj.millis>=500){
millisSize= map(obj.millis,0,1000,300,150)
millisSize= map(obj.millis,0,1000,300,130)
}
ellipse(width/3,350,millisSize)
}
