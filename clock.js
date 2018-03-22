/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
  var xPOSITION = 0;
  var R_hour=12;
  var R_min=60;
  var R_sec=60;
  var R_mil=360

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
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let alarm = obj.seconds_until_alarm;

  	angleMode(DEGREES);

  	ellipseMode(CENTER);

    rectMode(CENTER);

    background(0);

    if(alarm>0){
      background(0);
    } else if(alarm==0){
      background(255,0,0);
    }
    

    translate(width/2,height/2);
    //Setting
  
  push();
    fill(300);

    push();
    fill(250,100,100);
    text(hours, -30, 0);
    text(minutes, -4, 0);
    text(seconds, 30,0);
    pop();
    //text

  push();
  var i_hour=0;
  noStroke();
  fill(10,100,100);
  while(i_hour<R_hour){
  rotate(360/R_hour);
  rect(0,-60,5,10);
  i_hour = i_hour + 1;
  }
  pop();
  //Rotation (Hour)


  push();
  var i_min=0;
  noStroke();
  fill(250,100,100);
  while(i_min<R_min){
  rotate(360/R_min);
  rect(0,-90,5,10);
  i_min = i_min + 1;
  }
  pop();
  //Rotation (Minute)


  push();
  var i_sec=0;
  noStroke();
  fill(10,100,100);
  while(i_sec<R_sec){
  rotate(360/R_sec);
  rect(0,-120,5,10);
  i_sec = i_sec + 1;
  }
  pop();
  //Rotation (Second)


  push();
  var i_mil=0;
  noStroke();
  fill(120,99);
  while(i_mil<R_mil){
  rotate(360/R_mil);
  rect(0,-130,1,10);
  i_mil = i_mil + 1;
  }
  pop();
  //Rotation (Millis) _ Different rects. 


    push();
    noStroke();
    fill(250,100,100);
    //ellipse(0,0,50,50);//Center
    rotate(30*hours);
    rect(0,-60,5,10);
    pop();

    push();
    noStroke();
    fill(20,100,100);
    rotate(6*minutes);
    rect(0,-90,5,10);
    pop();

    push();
    noStroke();
    fill(250,100,100);
    rotate(6*seconds);
    rect(0,-120,5,10);
    pop();

    //Motion Needles
    pop();

    //Clock
}
