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
        background(0); //  black
    }
    else if (alarm > 0) {

        background(190); //  grey
    }
    else {
        if(alarm > 0) {

            background(255,20,0); //  light purple
        }
        else {
            background(100,25,80); //  light green
        }
    }


    if (obj.hours >= 12){
        hours = hours - 12;
    }
    
    
    let hrs = map(hours, 0, 11, 0, 370);
    let min = map(minutes, 0, 59, 0, 370);
    let sec =map(seconds, 0, 59, 0, 370);
    let mil = map(millis, 0, 1000, 0, 370);
    angleMode(DEGREES);

    
    fill(0);
    translate(width/2, height/2);




//mil
    push();
    
    var i = 0;
    stroke(255, 0, 128);//pink

    while( i < mil){
        rotate(7);
        line(0,-20 , 0, -50); 
        i = i + 7;
    }
    pop();

    
//sec

    push();

    var i = 0;
    stroke(20, 0, 255); //blue
    strokeWeight(1)
    while( i < sec ){
        rotate(2); 
        line(0,-60 , 0, -110); 
        i = i + 2;
    }

    pop();
    
    
    
//min

    push();

    var i = 0;
    stroke(0, 255, 64); //green
    strokeWeight(4)
    while(i < min){
    rotate(2);
    line(0,-120 , 0, -165); 
    
    i = i + 2;
    
    }
    pop();

//hrs

    push();
    var i = 0;
    stroke(255, 128, 0); //orange
    strokeWeight(4)
    while(i < hrs){
        rotate(2);
        line(0, -175, 0, -219);
        i = i + 2;
    }
    
    pop();


    while(i < 500){

        stroke(255, 255, 0); //yellow
        fill(255); //white
        strokeWeight(4);
        fill(255,255,0);
        rotate(2550);
        ellipse(235,5,10,10);
        i = i + 1; 
        
    
    }

}