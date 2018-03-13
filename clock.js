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
    let sec = map(seconds, 0,60,0,360);
    let min = map(minutes, 0,60,0,360);
    let hou = map(hours, 0,24,0,360);
    let secondswithfraction = seconds + (millis / 1000.0);
    let smooth = map(secondswithfraction,0,60,0,width);
    
    background(150);
    angleMode(DEGREES);
    
//Hours
    translate(width/2,height/2);
     noFill();
    ellipse(0,0,400,400);
    push();
    rotate(hou);
    fill(255);
    //rectMode(CENTER);
    ellipse(0,200,40,40);
    pop();

//Minutes
    fill(0,0,255);
    ellipse(0,0,300,300);
    push();
    rotate(min);
    fill(255);
    //rectMode(CENTER);
    ellipse(0,150,40,40);
    pop();

//Seconds
    fill(150);
    ellipse(0,0,200,200);
    push();
    rotate(sec);
    fill(255);
    //rectMode(CENTER);
    ellipse(0,100,40,40);
    pop();
}
