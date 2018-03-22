/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

angleMode(DEGREES);
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
   // let hours = obj.hours;
    //let minutes = obj.minutes;
    //let seconds = obj.seconds;
    //let millis = obj.millis;
    
    angleMode(DEGREES);
    background(130, 197, 244);
    translate(475, 250);
    rotate(-90);
    
    let hr = hour();
    let min = minute();
    let sec = second();
    
push();
    noStroke();
    fill(103, 149, 165);
    ellipse(7, 7, 375, 375);
    fill(245, 255, 150);
    ellipse(0, 0, 370, 370);
pop();
    
//inner centre
push();
    strokeWeight(9);
    fill(255, 0, 50);
    ellipse(0, 0, 35, 35);
pop();
    
//outer lines
    push();
    stroke(0);
    strokeWeight(5);
    translate()
    line(210, 0, 200, 0);
    line(0, 210, 0, 200);
    line(-210, 0, -200, 0);
    line(0, -210, 0, -200);
    pop();
    
//hours
    strokeWeight(20);
    stroke(159, 244, 82);
    let end3 = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 350, 350, 0, end3);
    
    push();
    rotate(end3);
/*    stroke(181, 180, 180);
    strokeWeight(13)
    line(0, 0, 70, 0);*/
    strokeWeight(12);
    stroke(242, 241, 241);
    line(0, 0, 70, 0);
    pop();
    
//minutes
    strokeWeight(20);
    stroke(107, 71, 47);
    let end2 = map(min, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, end2);
    
    push();
    rotate(end2);
/*    stroke(181, 180, 180);
    strokeWeight(13)
    line(0, 0, 100, 0);*/
    strokeWeight(12);
    stroke(242, 241, 241);
    line(0, 0, 100, 0);
    pop();
    
//seconds
    strokeWeight(20);
    stroke(253);
    noFill();
    let end1 = map(sec, 0, 60, 0, 360);
    arc(0, 0, 250, 250, 0, end1);
    
    push();
    rotate(end1);
    stroke(100);
    strokeWeight(6)
    line(0, 0, 100, 0);
    strokeWeight(5);
    stroke(255, 105, 103);
    line(0, 0, 100, 0);
    pop();
   
}
