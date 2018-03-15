/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
var x=0;

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

    background(70,20); //  beige
    fill(255); // dark grey
    textSize(150)
noStroke()

    let circleMoveMilli = map(millis, 0, 1000, -90, 270);
    let circleMoveSecond = map(seconds, 0, 59, -90, 270);
    let circleMoveMinute = map(minutes, 0, 59, -90, 270);
    let circleMovehour = map(hours, 0, 23, -90, 270);

    push();
    translate(710, height/2);
    rotate(circleMoveMilli);
    ellipse(50, 0, 5, 5);
    pop();

    push();
    translate(710, height/2);
    rotate(circleMoveSecond);
    ellipse(50, 0, 20, 20);
    pop();

    push();
    translate(width/2, height/2);
    rotate(circleMoveMinute);
    ellipse(50, 0, 20, 20);
    pop();

    push();
    translate(250, height/2);
    rotate(circleMovehour);
    ellipse(50, 0, 20, 20);
    pop();

    // text(hours, 170, height/2+50);
    // text(minutes, 400, height/2+50);
    // text(seconds, 630, height/2+50);
    // text(millis, 10, 82);
    text(":",345,height/2+35)
    text(":",570,height/2+35)




}
