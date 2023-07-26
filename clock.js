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
  background(0); //  black background
  angleMode(DEGREES);
  fill(200); // dark grey
  textSize(40);
  //textAlign(CENTER, CENTER);
  let Seconds = obj.seconds;
  let Minutes = obj.minutes;
  let Hours = obj.hours;
  let Milliseconds = obj.millis;
  text("Seconds: "+Seconds, 700, 100);


  fill(249, 174, 10);// yellow sun
  ellipse(width/2, height/2, 100);

  let rotMilli = map(Milliseconds, 0, 1000, 0, 360);
  let rotS = map(Seconds, 0, 60, -90, 270);
  let rotM = map(Minutes, 0, 60, -90, 270);
  let rotH = map(Hours, 0 , 24, 0, 360);

 
  push();
  translate(480,250);
  rotate(rotS); // rotates on the minute
  fill(30, 111, 140); //earth blue
  ellipse(150, 0, 50);

  push();
  translate(150,0);
  rotate(rotMilli); // rotates on the second
  fill(178, 178, 178); //moon grey
  ellipse(50,0,30);
  pop();
  pop();


  push();
  translate(480,250);
  rotate(rotM);
  rect(225,0,15,30);
  pop();

}
