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
    
            //setting up time with computer time
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    background(204);

    background(255,193,216); //  beige
    


    // A MAP 
    // map(target, minOfTarget,MaxOfTarget,MinNewScale, MaxNewScale)
    let hourBarWidth   = map(hours, 0, 23, 0, width);
    let minuteBarWidth = map(minutes, 0, 59, 0, width);
    let secondBarWidth = map(seconds, 0, 59, 0, width);
    let millisBarWidth = map(millis, 0, 1000, 0, width);

    noStroke();
    fill(68, 162, 186);
    ellipse(200, 250, hourBarWidth/4);
    fill(102, 217, 221);
    ellipse(400, 250, minuteBarWidth/4);
    fill(134, 239, 208)
    ellipse(600, 250, secondBarWidth/4);
    fill(190, 249, 189)
    ellipse(800, 250, millisBarWidth/4);

    fill(0); // dark grey
    text(hours, 195, 254);
    text(minutes, 393, 254);
    text(seconds, 592, 254);
    text(millis, 793, 254);

    // Make a bar which *smoothly* interpolates across 1 minute.
    // We calculate a version that goes from 0...60, 
    // but with a fractional remainder:
    // let secondBarWidthChunky  = map(seconds, 0, 60, 0, width);
    // let secondsWithFraction   = seconds + (millis / 1000.0);
    // let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 0, width);

    // fill(100, 100, 200)
    // rect(0, 350, secondBarWidthChunky, 50);
    // fill(120, 120, 240)
    // rect(0, 400, secondBarWidthSmooth, 50);
}
