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
    background(255);
    noStroke ();

    //background(255,186,13); //  beige
    fill(0); // dark grey
    text("Hour: "   + hours, 20, 22);
    text("Minute: " + minutes, 20, 42);
    text("Second: " + seconds, 20, 62);
    text("Millis: " + millis, 20, 82);

    let hourBarWidth   = map(hours, 0, 23, 0, width);
    let minuteBarWidth = map(minutes, 0, 59, 0, width);
    let secondBarWidth = map(seconds, 0, 59, 0, width);
    let millisBarWidth = map(millis, 0, 1000, 0, width);

    fill(13,242,255);
    ellipse(hours, 125, 64,64);
    fill (0);
    ellipse (minutes, 225, 64,64);
    fill (20,158,54);
    ellipse (seconds, 325, 64,64);
    fill (163,35,158);
    ellipse (millis, 425, 64, 64);
}


