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
    let seconds_until_alarm = obj.seconds_until_alarm;

    if (seconds_until_alarm < 0) {
        background(200,200,255); //  beige
    }
    else if (seconds_until_alarm > 0) {
        background(255, 200, 200); //  red        
    }
    else {
        if(seconds % 2 == 0) {
            background(255, 0, 0); //  red
        }
        else {
            background(100, 100, 100); //  red
        }
    }

    fill(128,100,100); // dark grey
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Seconds Until Alarm: " + seconds_until_alarm, 10, 82);

    let hourBarWidth   = map(hours, 0, 23, 0, width);
    let minuteBarWidth = map(minutes, 0, 59, 0, width);
    let secondBarWidth = map(seconds, 0, 59, 0, width);

    noStroke();
    fill(40);
    rect(0, 100, hourBarWidth, 50);
    fill(80);
    rect(0, 150, minuteBarWidth, 50);
    fill(120)
    rect(0, 200, secondBarWidth, 50);
}
