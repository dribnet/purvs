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

    //Time variables setup
    let seconds = obj.seconds;
    let millis = obj.millis;
    let hours = obj.hours;
    let minutes = obj.minutes;
    let alarm = obj.seconds_until_alarm;

    //Smoothing setup
    let secWFrac = seconds + (millis/1000.0);        //seconds smooth
    let secSmooth = map(secWFrac, 0, 59, 0, width);
    let minWFrac = minutes + (seconds/59.0);         //minutes smooth
    let minSmooth = map(minWFrac, 0, 59, 0, width);
    let hrWFrac = hours + (minutes/59.0);            //hours smooth
    let hrSmooth = map(hrWFrac, 0, 23, 0, width);

    //Ball position vars setup
    milX = map(millis, 0, 999, 0, width);            //millis X Y
    milY = map(sin(millis/158), -1, 1, 50, 450);
    secX = map(seconds, 0, 59, 0, width);            //seconds X Y
    secY = map(sin(secSmooth/153), -1, 1, 50, 450);
    minX = map(minutes, 0, 59, 0, width);            //minutes X Y
    minY = map(sin(minSmooth/152), -1, 1, 50, 450);
    hrX = map(hours, 0, 23, 0, width);               //hours X Y
    hrY = map(sin(hrSmooth/152), -1, 1, 50, 450);

    //Horrible hard coded alarm stuff
    fill(226, 140, 140);     //Countdown
    if(alarm<16 && alarm>0){
        rect(0, 0, width/4, height/2);
    }
    if(alarm<15 && alarm>0){
        rect(width/4, 0, width/4, height/2);
    }
    if(alarm<14 && alarm>0){
        rect(width/2, 0, width/4, height/2);
    }
    if(alarm<13 && alarm>0){
        rect(width*(3/4), 0, width/4, height/2);
    }
    if(alarm<12 && alarm>0){
        rect(0, height/2, width/4, height/2);
    }
    if(alarm<11 && alarm>0){
        rect(width/4, height/2, width/4, height/2);
    }
    if(alarm<10 && alarm>0){
        rect(width/2, height/2, width/4, height/2);
    }
    if(alarm<9 && alarm>0){
        rect(width*(3/4), height/2, width/4, height/2);
    }
    fill(193, 77, 77);
    if(alarm<8 && alarm>0){
        rect(0, 0, width/4, height/2);
    }
    if(alarm<7 && alarm>0){
        rect(width/4, 0, width/4, height/2);
    }
    if(alarm<6 && alarm>0){
        rect(width/2, 0, width/4, height/2);
    }
    if(alarm<5 && alarm>0){
        rect(width*(3/4), 0, width/4, height/2);
    }
    if(alarm<4 && alarm>0){
        rect(0, height/2, width/4, height/2);
    }
    if(alarm<3 && alarm>0){
        rect(width/4, height/2, width/4, height/2);
    }
    if(alarm<2 && alarm>0){
        rect(width/2, height/2, width/4, height/2);
    }
    if(alarm<1 && alarm>0){
        rect(width*(3/4), height/2, width/4, height/2);
    }
    if(alarm==0){       //Alarm flashing
        if(millis<500){
                background(226, 140, 140);
        }
        else{
                background(178, 37, 37);
        }
    }
    //fill(0);
    //text(alarm, 50, 50);

    //Day time clock
    if(hours>7 && hours<19){
        background(249, 228, 202, 210);

        stroke(229, 208, 183);    //curve lines
        noFill();
        bezier(0, height/2, width*(7/32), 517, width*(9/32), 517, width/2, height/2);
        bezier(width/2, height/2, width*(23/32), -16, width*(25/32), -16, width, height/2);

        stroke(229, 208, 183);    //1/4 lines
        line(width/4, 0, width/4, height);
        line(width*(3/4), 0, width*(3/4), height);
        stroke(204, 180, 153);    //1/2 lines
        line(0, height/2, width, height/2);
        line(width/2, 0, width/2, height);
    
        noStroke();
        fill(168, 145, 119);
        ellipse(milX, milY, 10, 10);         //millis ellipse
        fill(104, 89, 67);
        ellipse(hrSmooth, hrY, 25, 25);      //hours ellipse
        fill(135, 115, 87);
        ellipse(minSmooth, minY, 20, 20);    //minutes ellipse
        fill(153, 130, 104);
        ellipse(secSmooth, secY, 15, 15);    //seconds ellipse
    }
    
    //Night time clock
    else{                             
        background(57, 77, 109, 210);

        stroke(77, 100, 137);    //curve lines
        noFill();
        bezier(0, height/2, width*(7/32), 517, width*(9/32), 517, width/2, height/2);
        bezier(width/2, height/2, width*(23/32), -16, width*(25/32), -16, width, height/2);

        stroke(77, 100, 137);    //1/4 lines
        line(width/4, 0, width/4, height);
        line(width*(3/4), 0, width*(3/4), height);
        stroke(88, 113, 153);    //1/2 lines
        line(0, height/2, width, height/2);
        line(width/2, 0, width/2, height);
    
        noStroke();
        fill(105, 133, 178);
        ellipse(milX, milY, 10, 10);         //millis ellipse
        fill(142, 175, 226);
        ellipse(hrSmooth, hrY, 25, 25);      //hours ellipse
        fill(164, 197, 249);
        ellipse(minSmooth, minY, 20, 20);    //minutes ellipse
        fill(121, 151, 198);
        ellipse(secSmooth, secY, 15, 15);    //seconds ellipse 
    }

}
