/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

//var cliff; 

function draw_clock(obj) {

    //cliff = loadImage("Assets/cliff_rescale.png");
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off
    let alarm = obj.seconds_until_alarm
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    if(hours == 7 || 8 || 9 || 10 || 11 || 12 || 13 || 14 || 15 || 16 || 17 || 18) {
        background(142, 219, 255); //day 
    } else {
        background(0, 26, 99); //night
            }

    //alarm going off?
    if (alarm == 0){
        fill(255);
        ellipse(300, 200, 50, 50);
    }
    //alarm about to go off
    if (alarm > 0) {
        fill(0);
        ellipse(500, 200, 50, 50); 
        if (alarm <15.0) {
            fill(255);
            ellipse(450, 200, 50, 50);
        }
    }

    // fill(128,100,100); // dark grey
    // text("Hour: "   + hours, 10, 22);
    // text("Minute: " + minutes, 10, 42);
     text("Second: " + seconds, 10, 62);
    // text("Millis: " + millis, 10, 82);

    function drawDay(){
        background(40, 280, 255);
    }
    function drawNight(){
        background(4, 21, 84);
    }

    //let hourBarWidth   = map(hours, 0, 23, 0, width);
    //let minuteBarWidth = map(minutes, 0, 59, 0, width);
    let secondBarWidth = map(seconds, 0, 59, 0, width);
    let millisBarWidth = map(millis, 0, 1000, width, 300);
    let millisBird = map(millis, 0, 1000, width, 0.5*width);
    let millisBird2 = map(millis, 0, 1000, 0.5*width, 0);
    //let skyColour = map(hours, 0, 23, drawDay, drawNight); 
    let SH = map(hours, 0, 23, 500, 300);

    noStroke();
    // fill(40);
    // rect(0, 100, hourBarWidth, 50);
    // fill(80);
    // rect(0, 150, minuteBarWidth, 50);
    // fill(120);
    // rect(0, 200, secondBarWidth, 50);
    //image(cliff, 300, 300); 
    fill(0,102,255); //blue
    triangle(millisBarWidth, SH+1, millisBarWidth+60, SH-99, millisBarWidth+120, SH+1); //wave
    rect(0, SH, 960, 500); //ocean
    fill(255, 204, 128); //yellow
    rect(0, 250, 300, 400); //cliff base
    rect(0, 150, 200, 400); //cliff top

    fill(0); //black

    //minute seagull
    if(seconds == 58) {
    ellipse(millisBird, 100, 50, 50);
    } 
    if(seconds == 59) {
    ellipse(millisBird2, 100, 50, 50);
    }

}
