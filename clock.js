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
    
function create_hand(radiusH, timing, size) {
  xH=radiusH*cos(radians(degrees(timing)))  + width/2;
  yH=radiusH*sin(radians(degrees(timing))) + height/2;
   ellipse(xH, yH, size, size);
   
    stroke(255);
  for (i = 0; i < 12; i = i+1) {
cx=270*cos(radians(degrees(PI/6*i)))  + width/2;
cy=270*sin(radians(degrees(PI/6*i))) + height/2;
line(cx-4, cy-4, xH , yH);}
 
}

function create_secm(radiusH, timing, size) {
  
  
  xH=radiusH*cos(radians(degrees(timing)))  + width/2;
  yH=radiusH*sin(radians(degrees(timing))) + height/2;
   ellipse(xH, yH, size, size);
   
   
   translate(xH-width/2,yH-height/2)
   
    xH1=40*cos(radians(degrees(millisTT)))  + width/2;
    yH1=40*sin(radians(degrees(millisTT))) + height/2;
    ellipse(xH1, yH1, size/2, size/2);


  translate(-xH+width/2,-yH+height/2)
   
}




function moving_line (xH, yH){
  stroke(255);
  for (i = 0; i < 12; i = i+1) {
cx=270*cos(radians(degrees(PI/6*i)))  + width/2;
cy=270*sin(radians(degrees(PI/6*i))) + height/2;
line(cx-4, cy-4, xH , yH);
	}
}



c1 = color(33,200,150);
c2 = color(0,210,150);




noStroke();
background(33,200,150);



if (seconds%2 == 0){
	fill(c1); 
	background(c2);
} else {
	fill(c2); 
	background(c1);
}

ellipse (width/2, height/2, millis*1.04, millis*1.04);

fill(255); //white
hand = create_hand(0, days, 40);
moving_line(xH, yH);
hand = create_hand(200, hoursWithFraction, 20);
  translate(xH-width/2,yH-height/2)
hand = create_hand(80, minutesWithFraction, 15);

  translate(xH-width/2,yH-height/2)
create_hand(60, secondsWithFraction, 10);
   translate(xH-width/2,yH-height/2)
create_hand(40, millisTT, 5);


//create_secm(150, secondsWithFraction, 10);
   






//moving_line(xH, yH);

//moving_line(xH, yH);





/*
       fill(255,255,255); // dark grey
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millisTT, 10, 82);

text("Secs + Millis: " + secondsWithFraction, 10, 102);
text("degrees: " + degrees(secondsWithFraction), 10, 122);
*/
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
