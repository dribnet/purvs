/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

 let a = 0;
 let b = 0;
 let c = 0;
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
    background(200, 210);
    fill(50);

    let seconds = obj.seconds;
    let millis = obj.millis;
    let hours = obj.hours;

    secX = map(seconds, 0, 59, 0, width);
    secY = map(sin(a/500), -1, 1, 50, 450);
    milX = map(millis, 0, 1000, 0, width);
    milY = map(sin(b/10), -1, 1, 50, 450);
    hrX = map(hours, 0, 23, 0, width);
    hrY = map(sin(c/100), -1, 1, 50, 450);

    let secWFrac = seconds + (millis/1000.0);
    let secSmooth = map(secWFrac, 0, 60, 0, width);



    ellipse(secSmooth, secY, 10, 10);
    ellipse(milX, milY, 10, 10);
    ellipse(hrX, hrY, 10, 10);
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
    noFill();
    bezier(0, height/2, width/4, 5, width/4, 5, width/2, height/2);
    bezier(width/2, height/2, (width/4)*3, 505, (width/4)*3, 505, width, height/2);
    //let ey = map(sin(a/100), -1, 1, 10, 100);

    //ellipse(100, ey, 20, 20);

    a++;
    b++;
    c++;





}
