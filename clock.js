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
  background(210,4,45); //  red/cherry
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);
  
  let millisSize=0

  fill(255,191,0);// Yellow
  ellipse(width / 3, 350, 150);
  
  fill(255,191,0,100);
  
if(obj.millis<=500){
  millisSize= map(obj.millis,0,1000,150,300)
}
 else if(obj.millis>=500){
  millisSize= map(obj.millis,0,1000,300,150)
 }
  ellipse(width/3,350,millisSize)

  fill(140, 255, 251) // blue
  ellipse(width / 2, 350, 150);
  fill(175, 133, 255); // purple
  ellipse(width / 3 * 2, 350, 150);

}
