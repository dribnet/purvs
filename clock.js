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

    background(120);

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
    ellipse(480, 300, 100, 100);
    ellipse(480, 420, 100, 100);
    ellipse(480, 180, 100, 100);
    ellipse(480, 60, 100, 100);
    fill(col, 180, 200);
    ellipse(480, 420, millisCircleRadius, millisCircleRadius);
    fill(colo, 180, 200);
    ellipse(480, 300, secondRadiusSmooth, secondRadiusSmooth);
    ellipse(480, 180, minuteCircleRadius, minuteCircleRadius);
	fill(color, 180, 200);
    ellipse(480, 60, hourCircleRadius, hourCircleRadius);




}
