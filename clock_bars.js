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
    let h = obj.hours;
    let min = obj.minutes;
    let sec = obj.seconds;
    let mil = obj.millis;
    background(204);

    background(255,255,200); //  beige
    fill(128,100,100); // dark grey
    textSize(35);
    text("Hour: "   + h, 200, 250);
    text("Minutes: "   + min, 400, 250);
    text("seconds: "   + sec, 600, 250);

    //text("Minute: " + minutes, 10, 42);
    //text("Second: " + seconds, 10, 62);
    //text("Millis: " + millis, 10, 82);

    
}
