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
    background(204);

    background(255,255,200); //  beige
    // fill(128,100,100); // dark grey
    // text("Hour: "   + hours, 10, 22);
    // text("Minute: " + minutes, 10, 42);
     text("Second: " + seconds, 10, 62);
    // text("Millis: " + millis, 10, 82);

    let hourBarWidth   = map(hours, 0, 23, 0, width);
    let minuteBarWidth = map(minutes, 0, 59, 0, width);
    let secondBarWidth = map(seconds, 0, 59, 0, width);
    let millisBarWidth = map(millis, 0, 1000, width, 300);
    let millisBird = map(millis, 0, 1000, width, 0.5*width);
    let millisBird2 = map(millis, 0, 1000, 0.5*width, 0);

    noStroke();
    // fill(40);
    // rect(0, 100, hourBarWidth, 50);
    // fill(80);
    // rect(0, 150, minuteBarWidth, 50);
    // fill(120);
    // rect(0, 200, secondBarWidth, 50);
    fill(0,102,255);
    triangle(millisBarWidth, 400, millisBarWidth+60, 300, millisBarWidth+120, 400);
    rect(0, 400, 960, 100);
    fill(255, 204, 128);
    rect(0, 250, 300, 400);
    rect(0, 150, 200, 400);
    fill(0);
    if(seconds == 58) {
    ellipse(millisBird, 100, 50, 50);
    } 
    if(seconds == 59) {
    ellipse(millisBird2, 100, 50, 50);
    }


}
