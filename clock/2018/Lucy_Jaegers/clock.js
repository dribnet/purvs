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

    var millis = map(obj.millis, 0, 1000, 0, 500);
    var seconds = map(obj.seconds, 0, 59, 0, 500);
    var minutes = map(obj.minutes, 0, 59, 0, 500);
    var hours = map(obj.hours, 0, 23, 0, 500);
    var alarm = obj.seconds_until_alarm;


	background(244, 223, 194); 
    fill(128,100,100);
    angleMode(DEGREES);

    /*
    text("Hours: " + obj.hours, 10, 22);
    text("Minutes: " + obj.minutes, 10, 42);
    text("Seconds: " + obj.seconds, 10, 62);
    text("Millis: " + obj.millis, 10, 82);
    text("Alarm: " + obj.seconds_until_alarm, 10, 102);
    */
    noStroke();


    //millis counter
    if(alarm != 0){
    fill(168, 56, 116);
    }   
    else {
        if((obj.seconds % 2) == 0){
        fill(0);
    }
    else {
        fill(255);
     }
    }
    arc(width/2, height/2, millis, millis, 0, 45);   
    //seconds counter
      if(alarm != 0){
    fill(205, 86, 149);
    }   
    else {
       if((obj.seconds % 2) == 0){
        fill(255);
    }
    else {
         fill(0);
     }
    }
    arc(width/2, height/2, seconds, seconds, 45, 90);
    //minutes counter
      if(alarm != 0){
    fill(206, 136, 173);
    }
    else {
      if((obj.seconds % 2) == 0){
        fill(255);
    }
    else {
         fill(0);
     }
    }
    arc(width/2, height/2, minutes, minutes, 225, 270);
    //hours counter
      if(alarm != 0){
    fill(236, 187, 213);
    }
    else {
     if((obj.seconds % 2) == 0){
        fill(0);
    }
    else {
        fill(255);
     }
    }
    arc(width/2, height/2, hours, hours, 180, 225);

    stroke(150);    
    noFill();
    line(width/2, 0, width/2, height);
    line(230, height/2, width-230, height/2);
    line(230, 0, width-230, height);
    line(230,height, width-230, 0);

     ellipse(width/2, height/2, millis, millis);
     ellipse(width/2, height/2, seconds, seconds);
     ellipse(width/2, height/2, minutes, minutes);
     ellipse(width/2, height/2, hours, hours);

     stroke(100); //hours
     line(width/2, height/2, 230, height/2);

     var hourInc = (width/2 - 230)/23;
     var minutesInc = (width/2 - 230)/59;
     var secondsInc = (width/2 - 230)/59;
     var millisInc = (width/2 - 230)/9;

  
     for(var i = 0; i < 24; i++){
        //hours 
        line(width/2 - (hourInc*i), height/2, width/2 - (hourInc*i), height/2 - 10); 
     }
     for(var u = 0; u < 60; u++){
        //minutes
        line(width/2, height/2 - (minutesInc * u), width/2 - 10, height/2 - (minutesInc * u));
        //seconds
        line(width/2, height/2 + (secondsInc * u), width/2 + 10, height/2 +  (secondsInc *u));
            
     }
     for(var y = 0; y < 10; y++){
        //millis
        line(width/2 + (millisInc*y), height/2, width/2 + (millisInc * y), height/2 + 10);
     }


}