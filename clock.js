

/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(obj) {
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

  angleMode(DEGREES);
  translate(width/2, height/2);
  background(20);
  rotate(-90);
  let rte = 0

  // let hr = hour();
  // let min = minute();
  // let sec = second();
  // let mil = millis()

  let hr = obj.hours;
  let min = obj.minutes;
  let sec = obj.seconds;
  let mil = obj.millis;
  let alarm_secs = obj.seconds_until_alarm;

  // let x = 1;


  if(alarm_secs > 0) {
  	rotate(0);
  	background(20);
  }
  else if(alarm_secs === 0) {
    rotate(radians(frameCount)*35);
  	background(20, 10, 55);
  }


 //seconds
 noFill();
 strokeWeight(4);
 stroke(255);
 let end = map(sec, 0, 60, 0, 360);
 arc(0, 0, 490, 490, 0, end);


 //minutes
 noFill();
 stroke(200);
 let end2 = map(min, 0, 60, 0, 360);
 arc(0, 0, 340, 340, 0, end2);


 //hours
 noFill();
 stroke(150);
 let end3 = map(hr%12, 0, 12, 0, 360);
 arc(0, 0, 200, 200, 0, end3);


 let angle = 0
 
 //babies born
 noFill();
 stroke(255, 100, 150);
 strokeWeight(1);
 ellipse(60, 0, 35, 35);
 push();
 let end4 = map(mil, 0, 14, 0, 360);
 translate(60, 0);
  rotate(90);
 fill(255, 100, 150);
 noStroke();
 textSize(10);
 text('Births', -12, 30);
 noFill();
 stroke(255, 100, 150);
 strokeWeight(1);
 rotate(end4);
 line(0, 0, 13, 0);
 pop();

 //marriges

 noFill();
 stroke(255, 100, 150);
 strokeWeight(1);
 ellipse(60, 0, 35, 35);
 push();
 let end5 = map(mil, 0, 75, 0, 360);
 translate(-40, 40);
 textSize(10);
 rotate(90);
 fill(255, 100, 150);
 noStroke();
 text('Marriages', -20, -20);
 noFill();
 stroke(255, 100, 150);
 strokeWeight(1);
 ellipse(0, 0, 35, 35);
 rotate(end5);
 line(0, 0, 13, 0);
 pop();

 //elderly
 noFill();
 stroke(255, 100, 150);
 strokeWeight(1);
 ellipse(60, 0, 35, 35);
 push();
 let end6 = map(sec, 0, 16.7, 0, 360);
 translate(-40, -40);
 rotate(90);
 fill(255, 100, 150);
 noStroke();
 textSize(10);
 text('Elderly Deaths', -35, -20);
 noFill();
 stroke(255, 100, 150);
 strokeWeight(1);
 ellipse(0, 0, 35, 35);
 rotate(end6);
 line(0, 0, 13, 0);
 pop();

 //numbers


 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(90);
 text('XII', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('I', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('II', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('III', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('IV', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('V', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('VI', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('VII', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('VIII', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('IX', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('X', -20, -200);

 strokeWeight(1);
 textSize(32);
 stroke(255);
 rotate(30);
 text('XI', -20, -200);



 

  // The rectangle draws on top of the ellipse
  // because it comes after in the code

}
