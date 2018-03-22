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
    background(204);

    background(130, 197, 244); //  sky blue
    fill(128,100,100); // dark grey
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
   // text("Millis: " + millis, 10, 82);

    let hourBarWidth   = map(hours, 0, 23, 0, height);
    let minuteBarWidth = map(minutes, 0, 59, 0, height);
    let secondBarWidth = map(seconds, 0, 59, 0, height);
    //let millisBarWidth = map(millis, 0, 1000, 0, width);

    //still rects
    fill(17, 165, 78);
    rect(800, 0, 50, 500);
    //fill(154,205,50);
    rect(450, 0, 50, 500);
    //fill(46,139,87);
    rect(100, 0, 50, 500);


    noStroke();
    //moving rects
    fill(140,95,45);
    rect(800, hourBarWidth, 50, 500);
    fill(170,90,45);
    rect(450, minuteBarWidth, 50, 500);
    fill(195,135,63);
    rect(100, secondBarWidth, 50, 500);
    // fill(160)
    // rect(0, 250, millisBarWidth, 50);

fill(255, 250, 250);
    ellipse(300, 200, 50, 50);
    ellipse(650, 200, 50, 50);
    ellipse(300, 300, 50, 50);
    ellipse(650, 300, 50, 50);
    


    // Make a bar which *smoothly* interpolates across 1 minute.
    // We calculate a version that goes from 0...60, 
    // but with a fractional remainder:
    let secondBarWidthChunky  = map(seconds, 0, 60, 0, height);
    let secondsWithFraction   = seconds + (millis / 1000.0);
    let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 0, );

    // fill(100, 100, 200)
    // rect(0, 350, secondBarWidthChunky, 50);
    // fill(120, 120, 240)
    // rect(0, 400, secondBarWidthSmooth, 50);
}
