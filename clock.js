
var angle = 0;
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
    //let hourBarWidth   = map(hours, 0, 50, 0, width);
    //let minuteBarWidth = map(minutes, 0, 59, 0, width);
    //let secondBarWidth = map(seconds, 0, 59, 0, width);
    //let millisBarWidth = map(millis, 0, 1000, 0, width);
   
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let alarm = obj.seconds_until_alarm;
    
    background(203, 246, 255);

    line(480, 250, 480, 500);
    //line(480, 250, 100, 250);
    line(480, 250, 700, 700)
    fill(253, 246, 214);

    stroke(226, 242, 242);
    triangle(200, 350, 480, 350, 500, 200);

    noFill();
    strokeWeight(10);
    stroke(253, 246, 214);
    ellipse(480, 250, 500, 500);
    
    fill(253, 246, 214);
    strokeWeight(10);
    stroke(226, 242, 242);
    ellipse(480, 250, 350, 350);

    fill(207, 246, 254);
    ellipse(480, 250, 50, 50);

    noFill();
    stroke(253, 246, 214);
    ellipse(480, 250, 450, 450);

    noFill();
    strokeWeight(3);
    stroke(212, 159, 218);
    ellipse(480, 250, 480, 480);

    fill(000, 146, 76);
  
    let mill = map(millis, 0, 1000, 0, 360);
    let sec = map(seconds, 0, 59, 0, 360);
    let min = map(minutes, 0, 59, 0, 360);
    let hr = map(hours % 12 , 0, 12, 0, 360);

    translate(480, 250);
    angleMode(DEGREES);
    rotate(-180);
    
    push();
    fill(207, 246, 254);
    rotate(sec);
    noStroke();
    rect(0, 0, 5, 100);
    pop();
    
    push();
    rotate(mill);
    fill(255);
    ellipse(240, 0, 30, 30);
    pop();
    
    push();
    rotate(min);
    fill(207, 246, 254);
    strokeWeight(0);
    rect(0, 0, 10, 200);
    pop();

    push();
    rotate(hr)
    fill(207, 246, 254);
    strokeWeight();
    rect(0, 0, 10, 150);
    pop();

    if(alarm = 0){
        fill(246, 177, 91);
        triangle(200, 350, 480, 350, 500, 200);
      


    }

}


    //fill(000, 146, 76) 
    //strokeWeight(0);
    //text("Hour: "   + hours, 10, 22);
    //text("Minute: " + minutes, 10, 42);
    //text("Second: " + seconds, 10, 62);
    //text("Millis: " + millis, 10, 82);
   

  




