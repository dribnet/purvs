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

    //canvas
    background(0);
    fill(0);

    //mapping positions for lines
    let hourBarPosition = map(hours, 0, 23, 10, height - 10);
    let minuteBarPosition = map(minutes, 0, 59, 5, width - 10);
    let secondBarWidth = map(seconds, 0, 59, 5, width - 5);
    let millisBarHeight = map(millis, 0, 1000, 5, width - 5);
    //let alarmMilliesLine = map(millis, 0, 1000, 5, height - 5);

    //Smoothlines
    let minutesWithFraction = minutes + (seconds / 60);
    let minuteBarWidthSmooth = map(minutesWithFraction, 0, 60, 5, width - 10);

    //hourLines
    fill(255);
    noStroke();
    rect(5, hourBarPosition, minuteBarWidthSmooth, 2);


    for (let i = 0; i < hours; i++) {
        let incHours = hourBarPosition / hours;
        let col = 20;
        fill(col * i, 205, 255);
        rect(5, (incHours * i) + 5, width - 10, 2);
    }

    //alarm statements
    if (alarm == 0) {
        for (let i = 0; i < millis/1.0001; i++) {
            let incAlarm = hourBarPosition / millis;
            let col = 1;
            fill(col + i, 205, 255);
            rect(5, (incAlarm * i) + 5, width - 10, 2);
        }
    }

    else {
        let alarmMilliesLine = 0;
    }



    if (alarm > 0) {
        let incHours = 0;
        for (let i = 0; i < hourBarPosition; i++) {
            let incAlarm = i/millis / hourBarPosition;
            let col = 1;
            fill(col + i, 205, 255);
            rect(5, (incAlarm * i) + 5, width - 10, 2);

        }
    }

    
}