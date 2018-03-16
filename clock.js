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

    let secondSun = map(seconds, 0, 59, 0, width);
    let minuteRect = map(minutes, 0, 59, height, 0);
    let hourR = map(hours, 0, 23, 30, 137);
    let hourG = map(hours, 0, 23, 40, 182);
    let hourB = map(hours, 0, 23, 50, 255);

    background(hourR, hourG, hourB);
    noStroke();
    fill(255, 255, 153);
    ellipse(secondSun, 250, 150, 150);
    fill(200, 50);
    rect(0, minuteRect, width, height);
}
