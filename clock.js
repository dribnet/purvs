/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
var clockDiv = [12, 60, 60, 1000];

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
    background(0);

    fill(255);
    noStroke();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
//give it color and textstyle and size
    let milliseconds = obj.millis;
    let seconds = obj.seconds;
    let minutes = obj.minutes;
    let hours = obj.hours;
    let clock = [hours, minutes, seconds];

//Detifine the values of

  angleMode(DEGREES);

// Into degrees mode

    translate(width / 2, height / 2);

// hoursround
    translate(550, 50);

// minutesround

    clock.forEach(function (n, c) { 
        push();
        var d = clockDiv[c];  
        rotate(-n / d * 360);
        for (var i = 0; i < d; i++) {
            if (i >= n) {
                fill(255, (1 - i / d) * 102.4 + 153.6); // read color is white
            } else {
                fill('#c69c6d'); //unread color is gold
            }
            var t = c === 0 ? i || d : i;  //t = time
            text(t, -400, -200);
            rotate(360/ d);
        }
        pop();
        translate(150,-30);
    });

//clockDiv into 3
}