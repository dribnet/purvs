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
    let alarm = obj.seconds_until_alarm
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let mill = map(millis, 0,1000,0,360);
    let sec = map(seconds, 0,60,0,360);
    let min = map(minutes, 60,0,360,0);
    let hou = map(hours, 0,12,0,360);
    let secondswithfraction = seconds + (millis/1000);
    let smooth = map(secondswithfraction,0,59,0,59);

    background(0);
    translate(480,250);
    rotate(180);
    angleMode(DEGREES);



// push();

Earth();
AlarmPress();

// pop();

    push();
    rotate(hou);
    Islands();
    pop();

    push();
    rotate(sec);
    Second();
    pop();

    Twinkle();
    fill(255,255,0);
    ellipse(-400,-150,12*scale);
    ellipse(250,200,10*scale);
    fill(0,100,100);
    ellipse(-300,100,25*scale);
    fill(0,0,255);
    ellipse(350,-160,15*scale);

push();
translate(490,-170);
rotate(180);
    fill(100);
    text("Hours: " + hours ,20, 22); 
    text("Minutes: " + minutes ,20, 37); 
    text("Seconds: " + seconds ,20, 52); 
    text("alarm: " + alarm, 20, 66);
pop();


    function Twinkle() {
        //if milli <= 500
        // scale = map(mii, 0,500, small, large)
        //if milli > 500
        //scale = map(milli, 501, 999, large, small)

    //draw things

    if(millis<=500){
    scale = map(millis, 0, 500, 0.8,1);       
    }
    else if(millis>500){
    scale = map(millis, 501, 999, 1,0.8);

    }

    }

    function Twinkle_V2() {

    if(millis<=500){
    scale = map(millis, 0, 500, 0.8,1);       
    }
    else if(millis>500){
    scale = map(millis, 501, 999, 1,0.8);

    }

    }

    function Earth(){

   noStroke();

    fill(0,0,150);
    ellipse(0,0,425,425);

    fill(0,0,200);
    ellipse(0,0,355,355);

    fill(0,0,250);
    ellipse(0,0,285,285);

    }

    function Islands() {

fill(0,200,0);
        beginShape();
        vertex(65,80);
        vertex(90,70);
        vertex(105,90);
        vertex(95,120);
        vertex(50,110);
        endShape(CLOSE);

        beginShape();
        vertex(-150,-100);
        vertex(-125,-130);
        vertex(-50,-180);
        vertex(-20,-150);
        vertex(0,-50);
        vertex(-50,-25);
        vertex(-100,-75);
        endShape(CLOSE);

        beginShape();
        vertex(150,-110);
        vertex(125,-95);
        vertex(130,-70);
        vertex(145,-80);
        endShape(CLOSE);
    
        beginShape();
        vertex(-120,90);
        vertex(-140,100);
        vertex(-110,160);
        vertex(-90,150);
        vertex(-80,90);
        vertex(-120,90);
        endShape();

fill(255);
        beginShape();
        vertex(10,10);
        vertex(25,-25);
        vertex(-25,-15);
        vertex(-15,5);
        endShape(CLOSE);


    }


    function Second() {

fill(200);
ellipse(0,235,25,25);
// ellipse(225,0,10,10);
// ellipse(-225,0,10,10);
// ellipse(0,-225,10,10);


}

function AlarmPress() {

    if (alarm == 0){
    Twinkle_V2();
       fill(0,0,150);
        ellipse(0,0,445*scale);

        fill(0,0,200);
        ellipse(0,0,375*scale);

        fill(0,0,250);
        ellipse(0,0,305*scale);
    }

    if (alarm > 0) {
        fill(255);
        ellipse(250, 140, 25*scale);
        ellipse(400, 0, 25*scale);
        ellipse(-280, -130, 25*scale);
        ellipse(-350, 200, 25*scale); 
        if (alarm <10.0) {
            fill(255,0,0);
        ellipse(250, 140, 25*scale);
        ellipse(400, 0, 25*scale);
        ellipse(-280, -130, 25*scale);
        ellipse(-350, 200, 25*scale); 
        }
    }    
}
}
