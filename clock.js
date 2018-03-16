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
    let mill = obj.millis;
    background(204);
    textSize(35);
    text("h: "   + hours, 10, 22);



}
