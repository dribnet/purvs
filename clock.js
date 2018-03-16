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
    angleMode(DEGREES);

    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let SecToAlarm = obj.seconds_until_alarm;
    //console.log(SecToAlarm);
    background(250);
    fill(0)
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);
    
    
    let r1 = map(seconds, 0, 59, 0.01, 359.99);
    let r2 = map(minutes, 0, 59, 0.01, 359.99);
    let r3 = 0;
    if (hours <= 12) {
      r3 = map(hours, 0, 12, 0.01, 359.99);
    }
    else {
      r3 = map(hours, 12, 23, 0.01, 359.99);
    }
    let r4 = map(millis, 0, 999, 0.01, 359.99);
    noStroke();
    
    
    //hours
    push();
      rectMode(CENTER);
      translate(width/4, height/2);
      fill(105,200,255);
      if (hours>12){
        fill(180);
      }
      if (mouseIsPressed){
      obj.seconds_until_alarm = 1;
    }
    if (SecToAlarm == 0){
      fill(255,99,91);
      if (millis > 500){
        fill(105,200,255);
      }
    }
      arc(0, 0, 280, 280,-90, r3-90);
      fill(250);
      ellipse(0,0,230,230);
    pop();
    
    
    //mins
    push();
      rectMode(CENTER);
      translate(width/4, height/2);
      fill(105,200,255);
      if (hours>12){
        fill(180);
      }
      if (mouseIsPressed){
      obj.seconds_until_alarm = 1;
    }
    if (SecToAlarm == 0){
      fill(255,99,91);
      if (millis > 500){
        fill(105,200,255);
      }
    }
      arc(0, 0, 220, 220,-90, r2-90);
      fill(250);
      ellipse(0,0,170,170);
    pop();
    
    
    //secs
    push();
      rectMode(CENTER);
      translate(width/4, height/2);
      fill(105,200,255);
      if (hours>12){
        fill(180);
      }
    if (mouseIsPressed){
      obj.seconds_until_alarm = 1;
    }
    if (SecToAlarm == 0){
      fill(255,99,91);
      if (millis > 500){
        fill(105,200,255);
      }
    }
      arc(0, 0, 160, 160,-90, r1-90);
      fill(250);
      ellipse(0,0,110,110);
    pop();
    
    
    //millis
    push();
      rectMode(CENTER);
      translate(width/4, height/2);
      fill(105,200,255);
      if (hours>12){
        fill(180);
      }
      if (mouseIsPressed){
        obj.seconds_until_alarm = 1;
      }
      if (SecToAlarm == 0){
        fill(255,99,91);
          if (millis > 500){
            fill(105,200,255);
          }
      }
      arc(0, 0, 100, 100,-90,r4-90);
      fill(250);
      ellipse(0,0,50,50);
    pop();

}

function mouseClicked(){
  
}
