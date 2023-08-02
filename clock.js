/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  

  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

    background(150); //  Grey
    image(img, 0, 0, width, height);
    fill(0); // white
    textSize(20);
    // text("Hour: "   + hours, width*0.2, 22);
    // text("Minute: " + minutes, width*0.4, 22);
    // text("Second: " + seconds, width*0.6, 22);
    // text("Millis: " + millis, width*0.8, 22);

  // fill(200); // dark grey
  // textSize(40);
  // textAlign(CENTER, CENTER);
  // text("Seconds: " + seconds, width / 2, 200);

  // let hours_radius = map(obj.hours, 0, 59, 1, 150);
  // fill(249, 140, 255);// pink
  // ellipse(width / 3, 350, hours_radius);

  // let minutes_radius = map(obj.minutes, 0, 59, 1, 150);
  // fill(140, 255, 251) // blue
  // ellipse(width / 2, 350, minutes_radius);

  // let seconds_radius = map(seconds, 0, 59, 1, 150);
  // fill(175, 133, 255); // purple
  // ellipse(width / 3 * 2, 350, seconds_radius);


  // let sec_height = map(seconds, 0, 59, 1, 150);
  // fill(0, 255, 255); //light blue
  // noStroke();
  // rect(width/2, height/1.5, 400, - sec_height);
  
  //water drop animation
  let bounce1 = map(obj.millis, 0, 999, 0, TWO_PI);
  //let phase1 = sin(bounce1);
  //let y_bounce1 = map(phase1, -1, 1, -75, 75);

  let bounce2 = map((obj.millis+100), 0, 999, 0, TWO_PI);
  let phase2 = sin(bounce2);
  let y_bounce2 = map(phase2, -1, 1, -75, 75);

  // let hours_radius = map(obj.hours, 0, 59, 1, 150);
  // fill(249, 140, 255);// pink
  // ellipse(width / 5, 350 + y_bounce1, hours_radius);

  //water drop
  let minutes_radius = 20
  
  if(bounce1 < 4) {
    minutes_radius = 0;
  }
  fill(0, 255, 255) // blue
  ellipse(706, 250 + 2*y_bounce2, minutes_radius);


  let secondsWithFraction   = seconds + (millis/1000);

  //sink emptying animation at 59 seconds
  let sec_height = 0;
  if(secondsWithFraction <= 59)  {
    sec_height = map(seconds, 0, 60, 1, 190);
  }
  else {
    sec_height = map(millis, 0, 999, 190, 1);
  }

  //sink water
  fill(0, 255, 255); //light blue
  noStroke();
  rect(535, 340, 345, - sec_height);
  
  fill(0);
  rect(535, 340, 350, 5);

  fill(100);
  strokeWeight(4);
  stroke(0);
  rect(685, 80, 43, 20, 5, 5, 0, 0);

  noStroke();



  //minute water tank

  let minutesWithFraction   = minutes + (millis/1000);
  let min_height = 0
  fill(0 , 255, 251) // blue
  if(minutesWithFraction <= 59){
    if(secondsWithFraction <= 59) {
      min_height = map(minutes, 0, 59, 1, 390);
    }
    else {
      min_height = map(minutesWithFraction, 0, 59, 1, 390);
    }
    rect(340, 443, 74, - min_height); 
  }
  else{
    if(minutesWithFraction <= 59 && secondsWithFraction <= 59)  {
      min_height = map(seconds, 0, 60, 1, 390);
    }
    else {
      min_height = map(millis, 0, 999, 390, 1);
    } 
    rect(340, 443, 74, - min_height); 
  }

  //hour water tank
  let HoursWithFraction = hours + (millis/1000);
  let hour_height = 0
  fill(0 , 255, 251) // blue
  if(HoursWithFraction <= 59) {
    hour_height = map(hours, 0, 60, 1, 1100);
  }
  else {
    hour_height = map(millis, 0, 999, 1100, 1);
  }
  rect(44, 465, 228, - hour_height); 

  
  if(alarm = 0) {
    rect(0, 0, width, height);
  }

  // let sec_height = 0;
  // if(secondsWithFraction <= 59)  {
  //   sec_height = map(seconds, 0, 60, 1, 300);
  // }
  // else {
  //   sec_height = map(millis, 0, 999, 300, 1);
  // }

  text(minutesWithFraction, width/2, 50);
  
}

function preload() {
  // preload() runs once
  img = loadImage('Sink.png');
}
