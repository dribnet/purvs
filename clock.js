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
     background(204);

line(width/2, height, width/2,0);
line(0, height/2, width,height/2);

     fill(128,100,100); // dark grey
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);


let secondsWithFraction = (seconds + (millis / 1000.0)) / (60/ (2 * PI)) ;
let minutesWithFraction = (minutes + (seconds/60) + (millis / 1000.0 / 60)) / (60/ (2 * PI));
let hoursWithFraction = (hours + (minutes/12 + (seconds/60/12 + (millis /1000 / 60 / 12)))) / (60 / (2*PI));

text("Secs + Millis: " + secondsWithFraction, 10, 102);
text("degrees: " + degrees(secondsWithFraction), 10, 122);

 xx=165*cos(radians(degrees(secondsWithFraction*60)))  + width/2;
  yy=165*sin(radians(degrees(secondsWithFraction*60))) + height/2;
  ellipse(xx, yy, 15, 15);


  xx=150*cos(radians(degrees(secondsWithFraction)))  + width/2;
  yy=150*sin(radians(degrees(secondsWithFraction))) + height/2;
  ellipse(xx, yy, 15, 15);

 xx=135*cos(radians(degrees(minutesWithFraction)))  + width/2;
  yy=135*sin(radians(degrees(minutesWithFraction))) + height/2;
  ellipse(xx, yy, 15, 15);

 xx=135*cos(radians(degrees(hoursWithFraction)))  + width/2;
  yy=135*sin(radians(degrees(hoursWithFraction))) + height/2;
  ellipse(xx, yy, 15, 15);


 
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
