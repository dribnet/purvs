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
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;

    let millisTT =  (seconds + (millis/1000)) / (60 / (2 * PI)) * 60 - PI/2;
    let secondsWithFraction = (seconds + (millis / 1000.0)) / (60/ (2 * PI)) - PI/2 ;
    let minutesWithFraction = (minutes + (seconds/60) + (millis / 1000.0 / 60)) / (60/ (2 * PI))- PI/2;
    let hoursWithFraction = (hours/1.91) + (minutes/60/1.91) + seconds/60/60/1.91 +  - PI/2 ;
    let days = hours/24; 
    
       let mouseX_map = map(mouseX, 0, width, 250, 255);
       let mouseY_map = map(mouseY, 0, height, 250, 255);
    
c1 = color(250);
c2 = color(255);
d = color(253, 223, 224)
h = color(253, 187, 206)
m = color(205, 163, 193)
s = color(146, 137, 173)
mm = color(96, 118, 140)

    
function create_hand(radiusH, timing, size, c ,rad) {
  xH=(radiusH)*cos(radians(degrees(timing)))  + width/2;
  yH=(radiusH)*sin(radians(degrees(timing))) + height/2;
  fill(c);
   ellipse(xH, yH, size, size);
translate(xH-width/2,yH-height/2)

  length = 2;
  stroke(c);
  for (i = 0; i < 12; i = i+1) {
cx=(rad)*cos(radians(degrees(PI/6*i)))  + width/2;
cy=(rad)*sin(radians(degrees(PI/6*i))) + height/2;

line(cx-length, cy-length, cx+length, cy+length)
line(cx+length, cy-length, cx-length, cy+length)
	}
	  noStroke();
 
}




if (seconds%2 == 0){
	fill(c1); 
	background(c2);
} else {
	fill(c2); 
	background(c1);
}

ellipse (width/2, height/2, millis* sqrt((pow(width/2, 2) + pow(height/2,2)))/480, millis*sqrt((pow(width/2, 2) + pow(height/2,2)))/480);
fill(0);

create_hand(0, days, 30,mm, 130);
create_hand(130, hoursWithFraction, 20, s,65);
create_hand(65, minutesWithFraction, 15, m,33);
create_hand(33, secondsWithFraction, 10, h, 0);
create_hand(17, millisTT,5,d,width);


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
