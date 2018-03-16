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
    let mill = map(millis, 0,1000,0,360);
    let sec = map(seconds, 0,60,0,360);
    let min = map(minutes, 60,0,360,0);
    let hou = map(hours, 0,24,0,360);
    let secondswithfraction = seconds + (millis/1000);
    let smooth = map(secondswithfraction,0,59,0,59);

    background(150);
    translate(480,250);
    //rotate(180);
    angleMode(DEGREES);

    push();
    noFill();
    ellipse(0,0,285,285);
    ellipse(0,0,355,355);
    ellipse(0,0,425,425);
    pop();

    push();
    rotate(hou);
    Hour();
    pop();
    
    push();
    rotate(min);
    Minute();
    pop();
    
    push();
    rotate(sec);
    Second();
    pop();

    push();
    rotate(mill);
    Mili();
    pop();


    function Mili() {


ellipse(0,225,10,10);
ellipse(225,0,10,10);
ellipse(-225,0,10,10);
ellipse(0,-225,10,10);


}

    function Second() {

    beginShape();
        vertex(0,0);
        vertex(50,25);
        vertex(100,0)
        vertex(100,100);
        vertex(0,100);
        vertex(25,50);
        vertex(0,0);
    endShape(CLOSE);


    }

    function Minute() {

//rect(0,0,150,150);
beginShape();
    vertex(0,0);
    vertex(75,37);
    vertex(125,0)
    vertex(125,125);
    vertex(0,125);
    vertex(37,75);
    vertex(0,0);
endShape(CLOSE);

    }

    function Hour() {

//rect(0,0,200,200);
beginShape();
vertex(0,0);
vertex(75,37);
vertex(150,0);
vertex(150,150);
vertex(0,150);
vertex(37,75);
vertex(0,0);
vertex()
endShape(CLOSE);

    }
}