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
    let alarm = obj.seconds_until_alarm;
    background(0);
    fill(0);
    //text("Hour: "   + hours, 10, 22);
    //text("Minute: " + minutes, 10, 42);
    //text("Second: " + seconds, 10, 62);
    //text("Millis: " + millis, 10, 82);
    let hourBarPosition = map(hours, 0, 23, 10, height - 10);
    let minuteBarPosition = map(minutes, 0, 59, 5, width - 10);
    let secondBarWidth = map(seconds, 0, 59, 5, width - 5);
    let millisBarHeight = map(millis, 0, 1000, 5, width - 5);
    let alarmMilliesLine = map(millis, 0, 1000, 5, height - 5);
    noStroke();
    //Smoothlines
    let minutesWithFraction = minutes + (seconds / 60);
    let minuteBarWidthSmooth = map(minutesWithFraction, 0, 60, 5, width - 10);
    //hourLines
    fill(255);
    rect(5, hourBarPosition, minuteBarWidthSmooth, 2);


    for (let i = 0; i < hours; i++) {
        let incHours = hourBarPosition / hours;
        let col = 20;
        fill(col * i, 255, 255);
        rect(5, (incHours * i) + 5, width - 10, 2);
    }
    if (alarm == 0) {
        for (let i = 0; i < 100; i++) {
            let incAlarm = millis / hourBarPosition;
            let col = 5;
            fill(col * i, 255, 255);
            rect(5, (incAlarm * i) + 5, width - 10, 2);
        }
    } else {
        let alarmMilliesLine = 0;
    }
    if (alarm > 0) {
            fill()
            rect(5, hourBarPosition, minuteBarWidthSmooth, 2);
    }
    // do not alter or remove this function
    function keyTyped() {
        if (key == '!') {
            saveBlocksImages();
        } else if (key == '@') {
            saveBlocksImages(true);
        }
    }
}