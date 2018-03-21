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

    angleMode(DEGREES);

    background(120, 120, 120);

    text("Second: " + seconds, 10, 62);
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Millis: " + millis, 10, 82);

    let secondCircleRadius = map(seconds, 0, 60, 0, 100)
    let hourCircleRadius   = map(hours, 0, 12, 0, 100);
    let minuteCircleRadius = map(minutes, 0, 59, 0, 100);
    let millisCircleRadius = map(millis, 0, 1000, 0, 100);
    
    let secondsWithFraction   = seconds + (millis / 1000.0);
    
    let secondRadiusSmooth  = map(secondsWithFraction, 0, 60, -90, 270);
    let secondRadiusSmoother  = map(secondsWithFraction, 0, 60, -84, 276);
    let secondRadiusSmoothest  = map(secondsWithFraction, 0, 60, -78, 282);

    let col = map(millis, 0, 1000, 0, 255);
    let colo = map(seconds, 0, 60, 0, 255);
    let colour = map(minutes, 0, 60, 0, 255);
    let color = map(hours, 0, 12, 0, 255);
    
    let circlepath = map(seconds, 0, 60, -90, 270);
    let pathcircle = map(minutes, 0, 60, -90, 270);
    let roundpath = map(hours, 0, 12, -90, 270);

    noFill();


    //for(i=0; i<12; i++) {
    //    let angle = (360/12)*i;
    //
    //    quad(width/2 + cos(angle)*150, height/2 + sin(angle)*200, width/2, height/2);
    //}
    
    //for (i = 30; i < 360; i++) {
        //push();
        //translate(width/2, height/2);
        //quad(10, 0, 210, -30,220, 0, 210, 30);
        //pop();
    //}
/////////////////////////////////Right Clock
    fill(212);
    ellipse(800, 150, 300, 300);



    push();
    ellipse(800, 150, 200, 200);
    ellipse(800, 150, 100, 100);
    ellipse(800, 150, 20, 20);

    translate(800, 150);
    rotate(secondRadiusSmooth+50);
    fill(180);
    quad(10, 0, 170, -20,180, 0, 170, 20);
    pop();

    push();
    fill(180);
    translate(800, 150);
    rotate(pathcircle+50);
    triangle(10, 0, 130, -5, 130, 5);
    pop();

    push();
    fill(180);
    translate(800, 150);
    rotate(roundpath+240);
    triangle(10, 0, 80, -5, 80, 5);
    pop();

 /////////////////////////////// Left Back Clock
    fill(194, 213, 212);
    ellipse(250, 200, 300, 300);



    push();
    ellipse(250, 200, 200, 200);
    ellipse(250, 200, 100, 100);
    ellipse(250, 200, 20, 20);

    translate(250, 200);
    rotate(secondRadiusSmooth-90);
    fill(180);
    quad(10, 0, 170, -20,180, 0, 170, 20);
    pop();

    push();
    fill(180);
    translate(250, 200);
    rotate(pathcircle-150);
    triangle(10, 0, 130, -5, 130, 5);
    pop();

    push();
    fill(180);
    translate(250, 200);
    rotate(roundpath-240);
    triangle(10, 0, 80, -5, 80, 5);
    pop();

////////////////////////////////////////// Main Clock
    ellipse(width/2, height/2, 400, 400);

    ellipse(width/2, height/2, 240, 240);
    ellipse(width/2, height/2, 140, 140);
    ellipse(width/2, height/2, 20, 20);
    push();
    translate(width/2, height/2);
    rotate(secondRadiusSmooth);
    fill(180);
    quad(10, 0, 210, -20,220, 0, 210, 20);
    pop();

    push();
    fill(180);
    translate(width/2, height/2);
    rotate(pathcircle);
    triangle(10, 0, 130, -5, 130, 5);
	pop();

    push();
    fill(180);
    translate(width/2, height/2);
    rotate(roundpath);
    triangle(10, 0, 80, -5, 80, 5);
    pop();


   



    


}
