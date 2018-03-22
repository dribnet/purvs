/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
var R=5;
var y = 0;
var x = 0;
var z = 0;
var time = 0;
var r_hour = 12;
var r_min = 60;
var r_second = 60;
var r_star = 4;
var r_star1 = 6;

var yPOSITION = 0;
var xPOSITION = 0;
var R1 = 12; //The number of sticks;
var r = 0;

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
    background(0);
    var radius=100;
    translate(width/2,height/2);
    strokeWeight(2);

    
    push(); 
    strokeWeight(2);
    time = time + 0.5;

    var i = 0;
    while(i<R){ 
    var z=map(sin(time),-1,1,3,6);
    rotate(360/z);
    noFill();
    stroke(0);
    ellipse(0,0,radius,radius);
    // center ellipse
    var y=map(sin(i*4+time),-1,1,-1,100);//sin tan
    stroke(255,0,0,hours*5);//
      push();
      ellipse(0,0,radius,y);
      pop();
      //ellipse
      i = i + 1;
   }
	pop();
      //Effect One
      /*
    push();
    rotate(r);
    var i = 0;
    while(i<R1){
      rotate(360/R1);
      noFill();
      noStroke();

      push();
      colorMode(HSL);
      c = color(seconds*3,100,10,0.2);
      fill(c);
      triangle(-100,100,xPOSITION/2,yPOSITION/2,xPOSITION,yPOSITION);
      pop();

      i = i + 1;
    }
    r=r-0.5;
    time = time + 0.2;
    yPOSITION=map(sin(time),-1,1,0,120);
    xPOSITION=map(sin(time),-1,1,0,170);
    //noLoop();
    pop();
    */
    //Effect Background 


    push();
    noFill();
    stroke(100);
    var i_star2 = 0;
    while(i_star2<r_star){
    	rotate(360/r_star);
    	beginShape();
    	vertex(-160,0);
    	vertex(0,160);
    	vertex(160,0);
    	endShape(CLOSE);
    	i_star2=i_star2+1;
    }
    pop();
    //Star 2

    push();
    noFill();
    strokeWeight(2.8);
    stroke(100);
    ellipse(0,0,200,200);
    ellipse(0,0,320,320);
    //
    ellipse(0,0,380,380);
    ellipse(0,0,400,400);
    ellipse(0,0,420,420);

    //ellipses
    var i_star1 = 0;
    while(i_star1<r_star1){
    	rotate(360/r_star1);
    	beginShape();
    	vertex(-100,0);
    	vertex(0,100);
    	vertex(100,0);
    	endShape(CLOSE);
    	i_star1=i_star1+1;
    }
    pop();
    //Star 1

  	push();
  	var i_hour=0;
    fill(255,0,0);// same with background
  	stroke(255,0,0);
  	while(i_hour<r_hour){
  	rotate(360/r_hour);
  	ellipse(0,-100,25,25);
  	i_hour = i_hour + 1;
  	}
  	pop();

  	push();
  	var i_min=0;
  	fill(100, 20, 200);
    stroke(100, 20, 200);
  	while(i_min<r_min){
  	rotate(360/r_min);
  	ellipse(0,-200,10,10);
  	i_min = i_min + 1;
  	}
  	pop();

  	push();
  	var i_second=0;
  	fill('gold');
    stroke('gold');
  	while(i_second<r_second){
  	rotate(360/r_second);
  	ellipse(0,-225,7,7);
  	i_second = i_second + 1;
  	}
  	pop();
  	//Rotation (Hour)

  	push();
    noStroke();
    fill(0);
    rotate(30*hours);
    ellipse(0,-100,25,25);
    pop();
    //h

    push();
    noStroke();
    fill(0);
    rotate(6*minutes);
    ellipse(0,-200,10,10);
    pop();
    push();
    noFill();
    stroke(100);
    ellipse(0,-200,17,17);
    ellipse(200,0,17,17);
    ellipse(0,200,17,17);
    ellipse(-200,0,17,17);
    pop();
    //m
    push();
    noStroke();
    let alarm = obj.seconds_until_alarm;
    fill(0);
    if(alarm>0){
    fill(0);
    }else if(alarm==0){
    fill(255,0,0);
    }
    //alarm
    rotate(6*seconds);
    ellipse(0,-225,7,7);
    pop();
    push();
    noFill();
    stroke(100);
    ellipse(0,-225,15,15);
    ellipse(225,0,15,15);
    ellipse(0,225,15,15);
    ellipse(-225,0,15,15);
    pop();
    //s
    //Motion

    push();
    rotate(0);
    textSize(10);
    text('XII',-5,-97);
    pop();

    push();
    rotate(30);
    textSize(10);
    text('I',-1,-97);
    pop();

    push();
    rotate(60);
    textSize(10);
    text('II',-2,-97);
    pop();

    push();
    textSize(10);
    text('III',97,3);
    pop();

    push();
    rotate(120);
    textSize(10);
    text('IV',-4,-97);
    pop();

    push();
    rotate(150);
    textSize(10);
    text('V',-4,-97);
    pop();

    push();
    textSize(10);
    text('VI',-4,104);
    pop();

    push();
    rotate(210);
    textSize(10);
    text('VII',-7,-97);
    pop();

    push();
    rotate(240);
    textSize(10);
    text('VIII',-7,-97);
    pop();

    push();
    textSize(10);
    text('IX',-105,4);
    pop();

    push();
    rotate(300);
    textSize(10);
    text('X',-4,-97);
    pop();

    push();
    rotate(330);
    textSize(10);
    text('XI',-4,-97);
    pop();
    //罗马
    /*
    push();
    for(i=12;i>=1;i--){
    text(i,-6,-100);
    rotate(-30);
    }
    pop();
    */
    push();
    textSize(30);
    fill(100);
    text(hours,-365,10);

    text(seconds,335,10);
    noFill();
    stroke(100);
    ellipse(350,0,100,100);
    ellipse(-350,0,100,100);
    ellipse(350,0,70,70);
    ellipse(-350,0,70,70);
    pop();
  //
}
