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

    let secondCircleRadius = map(seconds, 0, 59, 0, 100)
    let hourCircleRadius   = map(hours, 0, 23, 0, 100);
    let minuteCircleRadius = map(minutes, 0, 59, 0, 100);
    let millisCircleRadius = map(millis, 0, 1000, 0, 100);
    
    let secondsWithFraction   = seconds + (millis / 1000.0);
    let secondRadiusSmooth  = map(secondsWithFraction, 0, 60, 0, 100);
    
    let col = map(millis, 0, 1000, 0, 255);
    let colo = map(seconds, 0, 59, 0, 255);
    let color = map(hours, 0, 23, 0, 255);



    noFill();
    ellipse(150, 300, 100, 100);
    
    ellipse(150, 180, 100, 100);
    ellipse(150, 60, 100, 100);
    
    let circlepath = map(seconds, 0, 59, -90, 270);
    let pathcircle = map(minutes, 0, 59, -90, 270);
    
    push();
    translate(width/2, height/2);
    rotate(circlepath);
    fill(col, 180, 200);
    ellipse(200, 0, millisCircleRadius, millisCircleRadius);
    noFill();
    ellipse(200, 0, 100, 100);
    pop();

    push();
    fill(colo, 180, 200);
    translate(width/2, height/2);
    rotate(pathcircle);
    ellipse(100, 0, 50, 50);
	pop();

    fill(color, 180, 200);
    ellipse(150, 60, hourCircleRadius, hourCircleRadius);

    noFill();
    ellipse(width/2, height/2, 200, 200);
    ellipse(width/2, height/2, 400, 400);



}
