/*
 * use p5.js to draw a clock on a 960x500 canvas
 */ 




function draw_clock(obj) {
    angleMode(DEGREES);
    textAlign(CENTER);
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

    background(0);
    

     strokeWeight(8);
        noFill();
        stroke(255, 100, 150);
        let end1 = map(seconds, 0, 60, 0, 360);
        arc(480, 250, 300, 300, 0, end1);


        strokeWeight(8);
        noFill();
        stroke(33, 191, 107);
        let end2 = map(minutes, 0, 60, 0, 360);
        arc(480, 250, 280, 280, 0, end2);


        strokeWeight(8);
        noFill();
        stroke(232, 134, 31);
        let end3 = map(hours, 0, 24, 0, 360);
        arc(480, 250, 260, 260, 0, end3);

        fill(255);
        noStroke();
        textSize(24);

        text(hours + ':' + minutes + ':' + seconds, 480, 260);
        textFont('Source Code Pro');

    
        }




 



     