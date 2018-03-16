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

    if (obj.hours >= 12){
        hours = hours - 12;
    }
    
    

    let hourRot   = map(hours, 0, 12, 0, 360);
    let minuteRot = map(minutes, 0, 60, 0, 360);
    let secondRot = map(seconds, 0, 60, 0, 360);
    let millisRot = map(millis, 0, 999, 0, 360);
    angleMode(DEGREES);
    noStroke();
    
    fill(0);
    translate(width/2, height/2);

    //Seconds Section
    push();
    push();
    rotate(-6);
    for(let i = 0; i < seconds; i += 1) { //draws trees up to current second
      rotate(6);
    ellipse(10, -100, 10, 10); 
    }
    pop();
    
    rotate(secondRot);
    if (seconds == 0) {
      fill(255);
      ellipse(0, 0, 220, 220)
      fill(0);
    }
    ellipse(10, -100, 10, 10);
    pop();



    //Minutes Section
    push();
    push();
    rotate(-6);
    for(let i = 0; i < minutes; i += 1) { //draws trees up to current minute
      rotate(6);
    ellipse(10, -140, 15, 15); 
    }
    pop();

    rotate(minuteRot);
    if (minutes == 0) {
      fill(255);
      ellipse(0, 0, 340, 340)
      fill(0);
    }
    ellipse(10, -140, 15, 15); 
    pop();




    //Hours Section
    push();
    push();
    rotate(-33);
    for(let i = 0; i < hours; i += 1) { //draws trees up to current hour
      rotate(30);
    ellipse(10, -190, 40, 40); 
    }
    pop();
    rotate(hourRot-3);
    ellipse(10, -190, 40, 40);
    pop();



}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}