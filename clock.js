/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
 	var time = 0;
	var R=3;
	var xPOSITION = 0;
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
  var e = 0;
  var f = 0;
  var g = 0;
  var h = 0;
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

  	angleMode(DEGREES);

  	ellipseMode(CENTER);

    rectMode(CENTER);
    
    background(0,30);

    translate(width/2,height/2);
    //Setting

    push();
    var radius=250;
  	var i = 0;
  	time=time+1;
 	 //noStroke();
  	strokeWeight(0.05);
  	while(i<1500){
    rotate(-R);
    var s = map(cos(i*8+time),-1,1,0,250);//Changing Background AE
    var c = map(s,0,150,0,255);

    push();
    fill(s,100,100,100);// 30 = transparent
    ellipse(i*5,c,hours/2,radius,radius);
    pop();
    i=i+1;
  	}
    pop();
    //Background AE

  push();
  strokeWeight(10);
  noFill();

  push()
  rotate(a);
  stroke(10,100,100);
  ellipse(0, 0, 370, 370);
  arc(0, 0, 350, 350, radians(-2990), radians(1490));
  a=a-1;
  pop();

  push();
  rotate(b);
  stroke(250,100,100);
  arc(0, 0, 330, 330, radians(-9990), radians(190));
  b=b+1.1;
  pop();

  push();
  rotate(c);
  stroke(10,100,100);
  arc(0, 0, 310, 310, radians(-990), radians(7190));
  c=c-1.3;
  pop();

  push();
  rotate(d);
  stroke(250,100,100);
  arc(0, 0, 290, 290, radians(-1990), radians(7190));
  d=d+1.3;
  pop();
  //Sequence One
  push();
  noFill();
  strokeWeight(10);
  push()
  /*
  rotate(e);
  stroke(0);
  arc(0, 0, 350, 350, radians(-2990), radians(1490));
  e=e+1;
  */
  push();
  rotate(f);
  stroke(250,100,100);
  arc(0, 0, 330, 330, radians(-9990), radians(190));
  f=f-1.1;
  pop();

  push();
  rotate(g);
  stroke(10,100,100);
  arc(0, 0, 310, 310, radians(-990), radians(7190));
  g=g+1.3;
  pop();

  push();
  rotate(h);
  stroke(250,100,100);
  arc(0, 0, 290, 290, radians(-190), radians(7190));
  h=h-1.35;
  pop();
  pop();
  //Sequence Two 

  pop();
    //Lightyears
  
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
