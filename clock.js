
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

    background(246,197,227);

    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;

    angleMode(DEGREES);
    rectMode(CENTER)
    noStroke();

    push();
    translate(width/2, height/2 - 25);
    rotate(45);
    rect(0, 0, 20, 20);
    pop();

    push();
    translate(width/2, height/2 + 25);
    rotate(45);
    rect(0, 0, 20, 20);
    pop();

    rect(190, 190, 20, 100);
    rect(190, 310, 20, 100);

    rect(270, 190, 20, 100);
    rect(270, 310, 20, 100);

    rect(330, 190, 20, 100);
    rect(330, 310, 20, 100);

    rect(410, 190, 20, 100);
    rect(410, 310, 20, 100);

    rect(550, 190, 20, 100);
    rect(550, 310, 20, 100);

    rect(630, 190, 20, 100);
    rect(630, 310, 20, 100);

    rect(690, 190, 20, 100);
    rect(690, 310, 20, 100);

    rect(770, 190, 20, 100);
    rect(770, 310, 20, 100);

    rect(230, 130, 60, 20);
    rect(230, 250, 60, 20);
    rect(230, 370, 60, 20);

    rect(370, 130, 60, 20);
    rect(370, 250, 60, 20);
    rect(370, 370, 60, 20);

    rect(590, 130, 60, 20);
    rect(590, 250, 60, 20);
    rect(590, 370, 60, 20);

    rect(730, 130, 60, 20);
    rect(730, 250, 60, 20);
    rect(730, 370, 60, 20);
}
