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
    //background(220, 210);
    //fill(50);

    let seconds = obj.seconds;
    let millis = obj.millis;
    let hours = obj.hours;
    let minutes = obj.minutes;

    let secWFrac = seconds + (millis/1000.0);        //seconds smooth
    let secSmooth = map(secWFrac, 0, 59, 0, width);
    let minWFrac = minutes + (seconds/59.0);         //minutes smooth
    let minSmooth = map(minWFrac, 0, 59, 0, width);
    let hrWFrac = hours + (minutes/59.0);            //hours smooth
    let hrSmooth = map(hrWFrac, 0, 23, 0, width);

    milX = map(millis, 0, 999, 0, width);            //millis X Y
    milY = map(sin(millis/158), -1, 1, 50, 450);
    secX = map(seconds, 0, 59, 0, width);            //seconds X Y
    secY = map(sin(secSmooth/153), -1, 1, 50, 450);
    minX = map(minutes, 0, 59, 0, width);            //minutes X Y
    minY = map(sin(minSmooth/152), -1, 1, 50, 450);
    hrX = map(hours, 0, 23, 0, width);               //hours X Y
    hrY = map(sin(hrSmooth/152), -1, 1, 50, 450);

    if(hours<6){
        background(150, 210);
    }
    if(hours>6){
        background(190, 210);
    }
    if(hours>8){
        background(230, 210);
    }
    if(hours>18){
        background(190, 210);
    }
    if(hours>20){
        background(150, 210);
    }
    
    /*stroke(200);                                     //8ths lines
    line(width/8, 0, width/8, height);
    line(width*(3/8), 0, width*(3/8), height);
    line(width*(5/8), 0, width*(5/8), height);
    line(width*(7/8), 0, width*(7/8), height);*/
    stroke(135);                                     //1/4 lines
    line(width/4, 0, width/4, height);
    line(width*(3/4), 0, width*(3/4), height);
    stroke(0);                                       //1/2 lines
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
    //line(0, 50, width, 50);
    //line(0, 450, width, 450);
    
    stroke(135);                                     //curve lines
    noFill();
    bezier(0, height/2, width*(7/32), 517, width*(9/32), 517, width/2, height/2);
    bezier(width/2, height/2, width*(23/32), -16, width*(25/32), -16, width, height/2);
    //bezier(0, height/2, width/4, 5, width/4, 5, width/2, height/2);
    //bezier(width/2, height/2, (width/4)*3, 505, (width/4)*3, 505, width, height/2);

    
    noStroke();
    fill(100);
    ellipse(milX, milY, 10, 10);         //millis ellipse
    fill(80);
    ellipse(secSmooth, secY, 15, 15);    //seconds ellipse
    fill(60);
    ellipse(minSmooth, minY, 20, 20);    //minutes ellipse
    fill(40);
    ellipse(hrSmooth, hrY, 25, 25);      //hours ellipse

    console.log(hours);
    console.log(minutes);
}
