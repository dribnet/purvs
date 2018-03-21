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
    background(200);
    noStroke();
    fill('#417D80'); // dark grey
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

    let hourBarWidth   = map(hours, 0, 23, 0, height/4*4);
    let minuteBarWidth = map(minutes, 0, 59, 0, height/4*3);
    let secondBarWidth = map(seconds, 0, 59, 0, height/4*2);
    let millisBarWidth = map(millis, 0, 1000, 0, height/4);

//smooth second bar
    let secondsWithFraction   = seconds + (millis / 1000.0);
    let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 0, height/4*2);

//smooth minute bar
    let minutesWithFraction   = minutes + (seconds / 59);
    let minuteBarWidthSmooth  = map(minutesWithFraction, 0, 60, 0, height/4*3);

    let milliXpos = map(seconds, 0, 60, 0, width-15);
    let secXpos = map(minutes, 0, 60, 0, width-15);
    let minXpos = map(hours, 0, 23, 0, width-30);

    noStroke();



    //min bar
    fill('#0D4A4D');
    rect(minXpos, height, 30, -minuteBarWidthSmooth);



//milli bar
    fill('#67989A');
    rect(milliXpos, height, 30, -millisBarWidth);
   /* rect(milliXpos-10, height+20, 50, -millisBarWidth);
    rect(milliXpos-20, height+40, 70, -millisBarWidth);
    rect(milliXpos-30, height+60, 90, -millisBarWidth);
    rect(milliXpos-40, height+80, 110, -millisBarWidth);
    rect(milliXpos, height+100, 150, -millisBarWidth); */

//second bar
    fill('#417D80');
    noStroke();
    rect(secXpos, height, 30, -secondBarWidthSmooth);



  /* 
    // Make a bar which *smoothly* interpolates across 1 minute.
    // We calculate a version that goes from 0...60, 
    // but with a fractional remainder:
    let secondBarWidthChunky  = map(seconds, 0, 60, 0, width);
    let secondsWithFraction   = seconds + (millis / 1000.0);
    let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 0, width);

    fill(100, 100, 200)
    rect(0, 350, secondBarWidthChunky, 50);
    fill(120, 120, 240)
    rect(0, 400, secondBarWidthSmooth, 50);  */
}
