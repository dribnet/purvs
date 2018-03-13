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
    var seconds = map(obj.seconds, 0, 59, 0, 450);
    var minutes = map(obj.minutes, 0, 59, 0, 400);
    var hours = map(obj.hours, 0, 23, 0, 350);

	background(255,255,200); 
    fill(128,100,100);
    angleMode(DEGREES);

    text("Hours: " + obj.hours, 10, 22);
    text("Minutes: " + obj.minutes, 10, 42);
    text("Seconds: " + obj.seconds, 10, 62);
    text("Millis: " + obj.millis, 10, 82);
    noStroke();

    //millis counter
    arc(width/2, height/2, millis, millis, 0, 45);   
    //seconds counter
    arc(width/2, height/2, seconds, seconds, 45, 90);
    //minutes counter
    arc(width/2, height/2, minutes, minutes, 225, 270);
    //hours counter
    arc(width/2, height/2, hours, hours, 180, 225);

    stroke(200);
    noFill();
    line(width/2, 0, width/2, height);
    line(230, height/2, width-230, height/2);
    line(230, 0, width-230, height);
    line(230,height, width-230, 0);

     ellipse(width/2, height/2, millis, millis);
     ellipse(width/2, height/2, seconds, seconds);
     ellipse(width/2, height/2, minutes, minutes);
     ellipse(width/2, height/2, hours, hours);


}