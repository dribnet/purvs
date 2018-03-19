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

    background(70,40);
    fill(255); // dark grey
    textSize(150)
noStroke()

    let circleMoveMilli = map(millis, 0, 1000, -90, 270);
    let circleMoveSecond = map(seconds, 0, 59, -90, 270);
    let circleMoveMinute = map(minutes, 0, 59, -90, 270);
    let circleMovehour = map(hours, 0, 23, -90, 270);
        let secondsWithFraction   = seconds + (millis / 1000.0);
        let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, -90, 270);    


    let secondpos = 150



    

    push();
        background(70,20);
    translate(width/2, height/2);
    rotate(circleMoveSecond);
    //     stroke(255)
    // strokeWeight(1);
    // line(150, 0, 0 ,0)
    ellipse(150, 0, 20, 20);
    pop();
    // noStroke()
    // fill(72)
    // text(hours, 170, height/2+50);
    // text(minutes, 400, height/2+50);
    // text(seconds, 630, height/2+50);
    // //text(millis, 10, 82);
    // text(":",345,height/2+35)
    // text(":",570,height/2+35)
    // fill(255)
    push();
    translate(width/2, height/2);
    rotate(circleMoveMinute);
    //     stroke(255)
    // strokeWeight(1);
    // line(100, 0, 0 ,0)
    ellipse(100, 0, 20, 20);
    pop();

    push();
    translate(width/2, height/2);
    rotate(circleMovehour);
    // stroke(255)
    // strokeWeight(1);
    // line(50, 0, 0 ,0)
    ellipse(60, 0, 20, 20);
    pop();

push();
    translate(width/2, height/2);
    rotate(circleMoveMilli);
    if(circleMoveMilli == -90){
    stroke(255,0,0)
    
    strokeWeight(1);
    line(200, 0, 0 ,0)
    }
        if(circleMoveMilli == 0){
    stroke(255,255,0)
    
    strokeWeight(1);
    line(200, 0, 0 ,0)
    }
    if(circleMoveMilli == 90){
    stroke(0,255,0)
    
    strokeWeight(1);
    line(200, 0, 0 ,0)
    }
    if(circleMoveMilli == 180){
    stroke(0,0,255)
    
    strokeWeight(1);
    line(200, 0, 0 ,0)
    }
    ellipse(200, 0, 5, 5);
    
    pop();
    noFill()
    strokeWeight(1)
    stroke(255)
    ellipse(width/2,height/2,200,200)
    ellipse(width/2,height/2,125,125)
    ellipse(width/2,height/2,300,300)
    strokeWeight(0.2)
    ellipse(width/2,height/2,400,400)





}
