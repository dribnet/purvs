/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
 xx=0;
 yy=0;
 angle=0;



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


c1 = color(33,200,150);
 c2 = color(0,210,150);


let millisTT =  (seconds + (millis/1000)) / (60 / (2 * PI)) * 60 - PI/2;
let secondsWithFraction = (seconds + (millis / 1000.0)) / (60/ (2 * PI)) - PI/2 ;
let minutesWithFraction = (minutes + (seconds/60) + (millis / 1000.0 / 60)) / (60/ (2 * PI))- PI/2;
let hoursWithFraction = (hours/1.91) + minutes/60/1.91 - PI/2 ;

noStroke();
     background(33,200,150);




if (seconds%2 == 0){
	fill(c1); // dark grey
	background(c2);
} else {
	fill(c2); // dark grey
	background(c1);
}

ellipse (width/2, height/2, millis*1.04, millis*1.04);

fill(255); //white


	xx=130*cos(radians(degrees(millisTT)))  + width/2;
  yy=130*sin(radians(degrees(millisTT))) + height/2;
  ellipse(xx, yy, 20, 20);







  xx=190*cos(radians(degrees(secondsWithFraction)))  + width/2;
  yy=190*sin(radians(degrees(secondsWithFraction))) + height/2;
  ellipse(xx, yy, 10, 10);

 xx=165*cos(radians(degrees(minutesWithFraction)))  + width/2;
  yy=165*sin(radians(degrees(minutesWithFraction))) + height/2;
  ellipse(xx, yy, 15, 15);

 xx=150*cos(radians(degrees(hoursWithFraction)))  + width/2;
  yy=150*sin(radians(degrees(hoursWithFraction))) + height/2;
  ellipse(xx, yy, 20, 20);



let cX = 0;
let cY = 0;
let sz = 5


for (i = 0; i < 12; i = i+1) {
cx=130*cos(radians(degrees(PI/6*i)))  + width/2;
cy=130*sin(radians(degrees(PI/6*i))) + height/2;


ellipse(cx, cy, sz, sz);

	}


       fill(255,255,255); // dark grey
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millisTT, 10, 82);

text("Secs + Millis: " + secondsWithFraction, 10, 102);
text("degrees: " + degrees(secondsWithFraction), 10, 122);

}


 





// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages(true);
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
