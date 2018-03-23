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
   // let hours = obj.hours;
    //let minutes = obj.minutes;
    //let seconds = obj.seconds;
    //let millis = obj.millis;
    
    angleMode(DEGREES);
    background(130, 197, 244);
    translate(475, 250);
    rotate(-90);
// Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
    
    let hr = hour();
    let min = minute();
    let sec = second();
    
//Alarm 
    let alarm = obj.seconds_until_alarm;
        
   if (alarm == 0) {
    background(r, g, b, 150);
   }
   if (alarm > 15.0){
       background(130, 197, 244);
   }
    
//clock circle   
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
    line(210, 0, 200, 0);
    line(0, 210, 0, 200);
    line(-210, 0, -200, 0);
    line(0, -210, 0, -200);
    pop();
    
//hours
    strokeWeight(20);
    stroke(159, 244, 82);
    let hoursarc = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 350, 350, 0, hoursarc);
    
    push();
    rotate(hoursarc);
    stroke(181, 180, 180);
    strokeWeight(13)
    line(0, 0, 70, 0);
    strokeWeight(12);
    stroke(242, 241, 241);
    line(0, 0, 70, 0);
    pop();
    
//minutes
    strokeWeight(20);
    stroke(107, 71, 47);
    let minutesarc = map(min, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, minutesarc);
    
    push();
    rotate(minutesarc);
    stroke(181, 180, 180);
    strokeWeight(13)
    line(0, 0, 100, 0);
    strokeWeight(12);
    stroke(242, 241, 241);
    line(0, 0, 100, 0);
    pop();
    
//seconds
    strokeWeight(20);
    stroke(253);
    noFill();
    let secondsarc = map(sec, 0, 60, 0, 360);
    arc(0, 0, 250, 250, 0, secondsarc);
    
    push();
    rotate(secondsarc);
    stroke(100);
    strokeWeight(6)
    line(0, 0, 100, 0);
    strokeWeight(5);
    stroke(255, 105, 103);
    line(0, 0, 100, 0);
    pop();
   
}
