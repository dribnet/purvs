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
    translate(960/2,250);
rotate(-90);

//background gradient *PLACEHOLDER COLOR*
background(114, 136, 224);

//setting up the variables
let hr = hour();
let mn = minute();
let sc = second();
let ml = millis();

        //drawing the minute arc
            strokeWeight (3);
            stroke(255);
            noFill();
            let end = map(mn, 0, 60, 0, 360);
            arc(0, 0, 300, 300,0,end);
         
         //drawing the minute arc's GLOW
         filter(BLUR, 2);
            strokeWeight (1);
            stroke(255);
            noFill();
            let end1 = map(mn, 0, 60, 0, 360);
            arc(0, 0, 300, 300,0,end1);

        //drawing the seconds ellipse
       fill(255);
        let end3 = map(sc, 0, 5, 0, 10);
        ellipse(0,0,end3,end3, 0);
        ellipse(0,0,end3,end3, 0);

        //drawing the Hours Ellipse
        fill(0);
        let end2 = map(hr, 0, 50, 0, 100);
        ellipse(0,0,end2,end2, 0);
        
}
