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
    
    background(250);
    fill(0)
    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);
    
    let hourBarWidth   = map(hours, 0, 23, 0, width);
    let minuteBarWidth = map(minutes, 0, 59, 0, width);
    let secondBarWidth = map(seconds, 0, 59, 0, width);
    let millisBarWidth = map(millis, 0, 1000, 0, width);
    let r1 = map(seconds, 0, 59, 360, 0);
    let r2 = map(minutes, 0, 59, 360, 0);
    let r3 = map(hours, 0, 23, 360, 0);
    let r4 = map(millis, 0, 1000, 360, 0);
    noStroke();
    //hours
    push();
      rectMode(CENTER);
      translate(width/4, height/2);
      //rotate(r3);
      fill(105,200,255);
      arc(0, 0, 280, 280,-165, r3);
      fill(250);
      ellipse(0,0,230,230);
    pop();
    //mins
    push();
      rectMode(CENTER);
      translate(width/4, height/2);
      //rotate(r2);
      fill(105,200,255);
      arc(0, 0, 220, 220,-165, r2);
      fill(250);
      ellipse(0,0,170,170);
    pop();
    //secs
    push();
      rectMode(CENTER);
      translate(width/4, height/2);
      //rotate(r1);
      fill(105,200,255);
      arc(0, 0, 160, 160,-165, r1);
      fill(250);
      ellipse(0,0,110,110);
    pop();
    //millis
    push();
      rectMode(CENTER);
      translate(width/4, height/2);
      //rotate(r1);
      fill(105,200,255);
      arc(0, 0, 100, 100,-165, r4);
      fill(250);
      ellipse(0,0,50,50);
    pop();

}
