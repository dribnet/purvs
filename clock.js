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

    angleMode(DEGREES);
    ellipseMode(CENTER);
    rectMode(CENTER);
    background(0);

         stroke(255);
     noFill();
     strokeWeight(3);
     ellipse(480, 150, 250, 250);

    stroke(255,0,255);
    strokeWeight(2);
    line(0, 300, 960, 300);
    strokeWeight(3);
    line(480, 500, 480, 300);
    line(350, 500, 400, 300);
    line(220, 500, 320, 300);
    line(90, 500, 240, 300);
    line(0, 460, 160, 300);
    line(0, 380, 80, 300);
    line(610, 500, 560, 300);
    line(740, 500, 640, 300);
    line(870, 500, 720, 300);
    line(960, 460, 800, 300);
    line(960, 380, 880, 300);

    let mill = map(millis, 0, 1000, 0, 360);
    let sec = map(seconds, 0, 60, 0, 360);
    let min = map(minutes, 0, 60, 360);
    let hr = map(hours % 12, 0, 12, 0, 360);

     translate(480, 150);
     rotate(-90);

     stroke(255);

       push();
    rotate(mill);
    noStroke();
    fill(255);
    ellipse(140, 0, 20, 20);
    pop();

    push();
    rotate(sec);
    fill(255);
    ellipse(150, 0, 30, 30);
    pop();

    push();
    rotate(hr);
    fill(255);
    ellipse(100, 0, 30, 30);
    pop();

}
