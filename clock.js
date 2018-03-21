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
  
  let hr = obj.hours;
  let mn = obj.minutes;
  let sc = obj.seconds;
  let ml = obj.millis;
  // let d = day();
  // let m = month();
  // let y = year();

  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  let secondAngle = map(sc, 0, 60, 0, 360);
  let millisAngle = map(ml, 0, 1000, 0, 360);

  let smoothMillis = sc + (ml / 1000);
  let smoothSC = map(smoothMillis, 0, 60, 0, 360);
  let innerRo = map(smoothMillis, 0, 60, 360, 0);



  background(255, 232, 235); // real-time sky lighting for the background
  //translate to the center
  translate(width/2, height/2);
  rotate(-90);

  //hour
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(0, 0, 300, 300);
  strokeWeight(4);
  stroke(255, 100, 150);
  arc(0, 0, 300, 300, 0, hourAngle);

  //minute
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(0, 0, 280, 280);
  strokeWeight(4);
  stroke(255, 100, 150);
  arc(0, 0, 280, 280, 0, minuteAngle);

  //second
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(0, 0, 260, 260);
  strokeWeight(4);
  stroke(255, 100, 150);
  arc(0, 0, 260, 260, 0, secondAngle);

  ////////////////////////////////////////////////////////////////////// mid

  //middersider ellipses//
  ellipse(0, 0, 500, 500);
  ellipse(0, 0, 800, 800);
  strokeWeight(2);
  stroke(255);
  ellipse(0, 0, 600, 600);

  fill(255);
  noStroke();
  push();
  rotate(smoothSC);
  ellipse(-210, -210, 25, 25);
  noFill();
  stroke(255);
  ellipse(-210, -210, 50, 50);

  fill(255);
  noStroke(); 
  rotate(30);
  ellipse(-210, -210, 25, 25);
  noFill();
  stroke(255);
  ellipse(-210, -210, 50, 50);


  fill(255);
  noStroke();
  rotate(30);
  ellipse(-210, -210, 25, 25);
  noFill();
  stroke(255);
  ellipse(-210, -210, 50, 50);

  fill(255);
  noStroke();
  rotate(30);
  ellipse(-210, -210, 25, 25);
  noFill();
  stroke(255);
  ellipse(-210, -210, 50, 50);

  fill(255);
  noStroke();
  rotate(30);
  ellipse(-210, -210, 25, 25);
  noFill();
  stroke(255);
  ellipse(-210, -210, 50, 50);

  fill(255);
  noStroke();
  rotate(30);
  ellipse(-210, -210, 25, 25);
  noFill();
  stroke(255);
  ellipse(-210, -210, 50, 50);

  fill(255);
  noStroke();
  rotate(30);
  ellipse(-210, -210, 25, 25);
  noFill();
  stroke(255);
  ellipse(-210, -210, 50, 50);

  fill(255);
  noStroke();
  rotate(30);
  ellipse(-210, -210, 25, 25);
  noFill();
  stroke(255);
  ellipse(-210, -210, 50, 50);

  fill(255);
  noStroke();
  rotate(30);
  ellipse(-210, -210, 25, 25);
  noFill();
  stroke(255);
  ellipse(-210, -210, 50, 50);

  fill(255);
  noStroke();
  rotate(30);
  ellipse(-210, -210, 25, 25);
  noFill();
  stroke(255);
  ellipse(-210, -210, 50, 50);

  fill(255);
  noStroke();
  rotate(30);
  ellipse(-210, -210, 25, 25);
  noFill();
  stroke(255);
  ellipse(-210, -210, 50, 50);

  fill(255);
  noStroke();
  rotate(30);
  ellipse(-210, -210, 25, 25);
  noFill();
  stroke(255);
  ellipse(-210, -210, 50, 50);
  pop();

  ///////////////////////////////////////////////////////////////////////

  //sc_hand
  push();
  rotate(secondAngle);
  stroke(0);
  strokeWeight(2);
  line(0, 0, 163, 0);
  pop();

  //min_hand
  push();
  rotate(minuteAngle);
  stroke(0);
  strokeWeight(5);
  line(0, 0, 100, 0);
  pop();

  //hr_hand
  push();
  rotate(hourAngle);
  stroke(0);
  strokeWeight(5);
  line(0, 0, 50, 0);
  pop();

  //center point//
  ellipse(0, 0, 10, 10);

  /////////////////////////////////////////////////////////////////////// in
  //inner area - LACE STENCIL patterns//
  push();
  rotate(innerRo);
  noStroke();
  fill(255);
  ellipse(0, -190, 50, 50);
  ellipse(30, -190, 50, 25);
  ellipse(-30, -190, 50, 25);
  // ellipse(0, -160, 25, 50);
  ellipse(0, -220, 25, 50);
  ellipse(-20, -210, 25, 25);
  ellipse(20, -210, 25, 25);
  noFill();
  strokeWeight(10);
  stroke(255);
  ellipse(-150, -150, 50, 50);
  fill(0);
  // textSize(25);
  // text("IX", -12, -180);

  noStroke();
  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  ellipse(30, -190, 50, 25);
  ellipse(-30, -190, 50, 25);
  // ellipse(0, -160, 25, 50);
  ellipse(0, -220, 25, 50);
  ellipse(-20, -210, 25, 25);
  ellipse(20, -210, 25, 25);
  noFill();
  strokeWeight(10);
  stroke(255);
  ellipse(-150, -150, 50, 50);
  fill(0);
  // textSize(25);
  // text("X", -8, -180);

  noStroke();
  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  ellipse(30, -190, 50, 25);
  ellipse(-30, -190, 50, 25);
  // ellipse(0, -160, 25, 50);
  ellipse(0, -220, 25, 50);
  ellipse(-20, -210, 25, 25);
  ellipse(20, -210, 25, 25);
  noFill();
  strokeWeight(10);
  stroke(255);
  ellipse(-150, -150, 50, 50);
  fill(0);
  // textSize(25);
  // text("XI", -11, -180);

  noStroke();
  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  ellipse(30, -190, 50, 25);
  ellipse(-30, -190, 50, 25);
  // ellipse(0, -160, 25, 50);
  ellipse(0, -220, 25, 50);
  ellipse(-20, -210, 25, 25);
  ellipse(20, -210, 25, 25);
  noFill();
  strokeWeight(10);
  stroke(255);
  ellipse(-150, -150, 50, 50);
  fill(0);
  // textSize(25);
  // text("XII", -15, -180);

  noStroke();
  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  ellipse(30, -190, 50, 25);
  ellipse(-30, -190, 50, 25);
  // ellipse(0, -160, 25, 50);
  ellipse(0, -220, 25, 50);
  ellipse(-20, -210, 25, 25);
  ellipse(20, -210, 25, 25);
  noFill();
  strokeWeight(10);
  stroke(255);
  ellipse(-150, -150, 50, 50);
  fill(0);
  // textSize(25);
  // text("I", -5, -180);

  noStroke();
  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  ellipse(30, -190, 50, 25);
  ellipse(-30, -190, 50, 25);
  // ellipse(0, -160, 25, 50);
  ellipse(0, -220, 25, 50);
  ellipse(-20, -210, 25, 25);
  ellipse(20, -210, 25, 25);
  noFill();
  strokeWeight(10);
  stroke(255);
  ellipse(-150, -150, 50, 50);
  fill(0);
  // textSize(25);
  // text("II", -8, -180);

  noStroke();
  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  ellipse(30, -190, 50, 25);
  ellipse(-30, -190, 50, 25);
  // ellipse(0, -160, 25, 50);
  ellipse(0, -220, 25, 50);
  ellipse(-20, -210, 25, 25);
  ellipse(20, -210, 25, 25);
  noFill();
  strokeWeight(10);
  stroke(255);
  ellipse(-150, -150, 50, 50);
  fill(0);
  // textSize(25);
  // text("III", -10, -180);

  noStroke();
  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  ellipse(30, -190, 50, 25);
  ellipse(-30, -190, 50, 25);
  // ellipse(0, -160, 25, 50);
  ellipse(0, -220, 25, 50);
  ellipse(-20, -210, 25, 25);
  ellipse(20, -210, 25, 25);
  noFill();
  strokeWeight(10);
  stroke(255);
  ellipse(-150, -150, 50, 50);
  fill(0);
  // textSize(25);
  // text("IV", -10, -180);

  noStroke();
  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  ellipse(30, -190, 50, 25);
  ellipse(-30, -190, 50, 25);
  // ellipse(0, -160, 25, 50);
  ellipse(0, -220, 25, 50);
  ellipse(-20, -210, 25, 25);
  ellipse(20, -210, 25, 25);
  noFill();
  strokeWeight(10);
  stroke(255);
  ellipse(-150, -150, 50, 50);
  fill(0);
  // textSize(25);
  // text("V", -8, -180);

  noStroke();
  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  ellipse(30, -190, 50, 25);
  ellipse(-30, -190, 50, 25);
  // ellipse(0, -160, 25, 50);
  ellipse(0, -220, 25, 50);
  ellipse(-20, -210, 25, 25);
  ellipse(20, -210, 25, 25);
  noFill();
  strokeWeight(10);
  stroke(255);
  ellipse(-150, -150, 50, 50);
  fill(0);
  // textSize(25);
  // text("VI", -12, -180);

  noStroke();
  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  ellipse(30, -190, 50, 25);
  ellipse(-30, -190, 50, 25);
  // ellipse(0, -160, 25, 50);
  ellipse(0, -220, 25, 50);
  ellipse(-20, -210, 25, 25);
  ellipse(20, -210, 25, 25);
  noFill();
  strokeWeight(10);
  stroke(255);
  ellipse(-150, -150, 50, 50);
  fill(0);
  // textSize(25);
  // text("VII", -15, -180);

  noStroke();
  rotate(30);
  fill(255);
  ellipse(0, -190, 50, 50);
  ellipse(30, -190, 50, 25);
  ellipse(-30, -190, 50, 25);
  // ellipse(0, -160, 25, 50);
  ellipse(0, -220, 25, 50);
  ellipse(-20, -210, 25, 25);
  ellipse(20, -210, 25, 25);
  noFill();
  strokeWeight(10);
  stroke(255);
  ellipse(-150, -150, 50, 50);
  fill(0);
  pop();
  // textSize(25);
  // text("VIII", -20, -180);

  ///////////////////////////////////////////////////////////////////////

  //text of clocks//
  fill(255);
  rotate(0);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("IX", -12, -180);
  
  fill(255);
  rotate(30);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("X", -8, -180);

  fill(255);
  rotate(30);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("XI", -11, -180);
 
  fill(255);
  rotate(30);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("XII", -15, -180);

  fill(255);
  rotate(30);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("I", -5, -180);

  fill(255);
  rotate(30);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("II", -8, -180);

  fill(255);
  rotate(30);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("III", -10, -180);

  fill(255);
  rotate(30);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("IV", -10, -180);

  fill(255);
  rotate(30);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("V", -8, -180);
  
  fill(255);
  rotate(30);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("VI", -12, -180);

  fill(255);
  rotate(30);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("VII", -15, -180);
 
  fill(255);
  rotate(30);
  ellipse(0, -190, 50, 50);
  fill(0);
  textSize(25);
  text("VIII", -20, -180);

  
  //rings of clocks//
  rotate(120);
  push();
  rotate(secondAngle);
  noFill();
  stroke(0);
  strokeWeight(2);
  ellipse(0, -190, 50, 50);
  pop();

  push();
  rotate(hourAngle);
  noFill();
  stroke(0);
  strokeWeight(10);
  ellipse(0, -190, 50, 50);
  pop();

  push();
  rotate(minuteAngle);
  noFill();
  stroke(0);
  strokeWeight(5);
  ellipse(0, -190, 50, 50);
  pop();

  /////////////////////////////////////////////////////////////////////// out
  //outersider area - LACE STENCIL patterns//
  stroke(255);
  strokeWeight(5);
  rotate(innerRo);
  noFill();
  ellipse(0, -350, 50, 50);
  fill(255);
  ellipse(-50, -350, 25, 25);
  ellipse(50, -350, 25, 25);
  ellipse(0, -400, 25, 50);

  stroke(255);
  strokeWeight(5);
  rotate(30);
  noFill();
  ellipse(0, -350, 50, 50);
  fill(255);
  ellipse(-50, -350, 25, 25);
  ellipse(50, -350, 25, 25);
  ellipse(0, -400, 25, 50);

  stroke(255);
  strokeWeight(5);
  rotate(30);
  noFill();
  ellipse(0, -350, 50, 50);
  fill(255);
  ellipse(-50, -350, 25, 25);
  ellipse(50, -350, 25, 25);
  ellipse(0, -400, 25, 50);

  stroke(255);
  strokeWeight(5);
  rotate(30);
  noFill();
  ellipse(0, -350, 50, 50);
  fill(255);
  ellipse(-50, -350, 25, 25);
  ellipse(50, -350, 25, 25);
  ellipse(0, -400, 25, 50);

  stroke(255);
  strokeWeight(5);
  rotate(30);
  noFill();
  ellipse(0, -350, 50, 50);
  fill(255);
  ellipse(-50, -350, 25, 25);
  ellipse(50, -350, 25, 25);
  ellipse(0, -400, 25, 50);

  stroke(255);
  strokeWeight(5);
  rotate(30);
  noFill();
  ellipse(0, -350, 50, 50);
  fill(255);
  ellipse(-50, -350, 25, 25);
  ellipse(50, -350, 25, 25);
  ellipse(0, -400, 25, 50);

  stroke(255);
  strokeWeight(5);
  rotate(30);
  noFill();
  ellipse(0, -350, 50, 50);
  fill(255);
  ellipse(-50, -350, 25, 25);
  ellipse(50, -350, 25, 25);
  ellipse(0, -400, 25, 50);

  stroke(255);
  strokeWeight(5);
  rotate(30);
  noFill();
  ellipse(0, -350, 50, 50);
  fill(255);
  ellipse(-50, -350, 25, 25);
  ellipse(50, -350, 25, 25);
  ellipse(0, -400, 25, 50);

  stroke(255);
  strokeWeight(5);
  rotate(30);
  noFill();
  ellipse(0, -350, 50, 50);
  fill(255);
  ellipse(-50, -350, 25, 25);
  ellipse(50, -350, 25, 25);
  ellipse(0, -400, 25, 50);

  stroke(255);
  strokeWeight(5);
  rotate(30);
  noFill();
  ellipse(0, -350, 50, 50);
  fill(255);
  ellipse(-50, -350, 25, 25);
  ellipse(50, -350, 25, 25);
  ellipse(0, -400, 25, 50);

  stroke(255);
  strokeWeight(5);
  rotate(30);
  noFill();
  ellipse(0, -350, 50, 50);
  fill(255);
  ellipse(-50, -350, 25, 25);
  ellipse(50, -350, 25, 25);
  ellipse(0, -400, 25, 50);

  stroke(255);
  strokeWeight(5);
  rotate(30);
  noFill();
  ellipse(0, -350, 50, 50);
  fill(255);
  ellipse(-50, -350, 25, 25);
  ellipse(50, -350, 25, 25);
  ellipse(0, -400, 25, 50);
  ///////////////////////////////////////////////////////////////////////

}


// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }


}
