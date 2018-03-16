var sun =0;
var x = 0;
var y = 0;
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

    background(203, 246, 255);
    
    fill(000, 146, 76) 
    strokeWeight(0);
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

    //stick that holds the sun
    fill(84, 26, 4); 
    rect(480, 250, 5, 200);


    fill(000, 146, 76);
    stroke(102, 204, 102);
    strokeWeight(10);
    ellipse(480, 500, 250, 250);

    let hourBarWidth   = map(hours, 0, 23, 0, width);
    let minuteBarWidth = map(minutes, 0, 59, 0, width);
    let secondBarWidth = map(seconds, 0, 59, 0, width);
    let millisBarWidth = map(millis, 0, 1000, 0, width);

    noStroke();
    
    sun = 480;

    fill(255, 214, 98);
    stroke(233, 162, 59);
    strokeWeight(10);
    ellipse(x, y, 120, 120);

    x = x + 1;
    y = y + 1;

    if(x > 600){
        x = 0;
        if(y > 600){
            y = 0;
    }
}

}

    //function sun(x, y){
    
    //fill(255, 214, 98);
    //stroke(233, 162, 59);
    //strokeWeight(10);
    //ellipse(480, 250, 120, 120);




