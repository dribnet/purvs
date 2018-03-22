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

    if (alarm < 0) {
        background(221,160,221); 
    }
    else if (alarm > 0) {
        background(255, 105, 180);        
    }
    else if (alarm == 0){
        background(255,248,220);
    }
    
    
    strokeWeight(1); //  beige
    fill(0,0,139);
    text("Hour: "   + hours, 10, 142);
    text("Minute: " + minutes, 10, 162);
    text("Second: " + seconds, 10, 182);
    text("Millis: " + millis, 10, 202);

    let hourBarHeight = map(hours, 0, 23, 100, 400);
    let millisBarHeight = map(millis, 0, 1000, 90,350);
    let millisBarHeight2 = map(millis, 0, 1000, 100,210);

    strokeWeight(12);
    stroke(51);
    fill(222,184,135);
    quad(560,250,400,250,300,490,660,490);
    strokeWeight(12);
    stroke(51);
    fill(0,191,255);
    ellipse(480,210,400,400);

    //millis-rain
    noStroke()
    fill(0,0,205);
    ellipse(520, millisBarHeight, 10, 30);
    ellipse(420, millisBarHeight2, 10, 30);

    //cloud
    noStroke();
    fill(255);
    ellipse(530,80,75,55);
    ellipse(490,80,100,95);
    ellipse(440,90,95,75);
    ellipse(400,110,30,25);
    ellipse(540,110,30,25);
}