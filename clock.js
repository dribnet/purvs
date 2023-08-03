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
  
  //water drop animation
  let bounce1 = map(obj.millis, 0, 999, 0, TWO_PI);
  let bounce2 = map((obj.millis+100), 0, 999, 0, TWO_PI);
  let phase2 = sin(bounce2);
  let y_bounce2 = map(phase2, -1, 1, -75, 75);

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
  
  //sink outline
  fill(0);
  rect(535, 340, 350, 5);

  //tap cap
  fill(100);
  strokeWeight(4);
  stroke(0);
  rect(685, 80, 43, 20, 5, 5, 0, 0);

  noStroke();

  //alarm
  fill(0, 255, 255); //light blue
  let water_height = 0;
  //2 seconds before alarm goes off have water rise to cover the screen
  if(alarm > 0 && alarm < 2){
    water_height = map(alarm, 2, 0, 0, 500);
    rect(0, 500, width, -water_height);
  }
  //while alarm is going off keep screen blue
  else if (alarm == 0){
      rect(0, 0, width, height); 
    }
  //fill water tanks before the screen fills up 
  if(alarm > 2 && alarm < 7){//minutes tank
    min_water_height = map(alarm, 7, 2, 0, 400);
    rect(340, 443, 74, - min_water_height); 
  }
  if(alarm > 2 && alarm < 7){//seconds tank
    sec_water_height = map(alarm, 7, 2, 0, 190);
    rect(535, 340, 345, - sec_water_height);
  }
  if(alarm > 2 && alarm < 7){//hours tank
    hour_water_height = map(alarm, 7, 2, 0, 430);
    rect(44, 465, 228, - hour_water_height);
  }

  //keep tanks full
  if(alarm > 0 && alarm < 2){//minutes tank
    rect(340, 443, 74, -400); 
  }
  if(alarm > 0 && alarm < 2){//seconds tank
    rect(535, 340, 345, -190);
  }
  if(alarm > 0 && alarm < 2){//hours tank
    rect(44, 465, 228, - 430);
  }


  //minute water tank
  let minutesWithFraction   = minutes + (millis/1000); 
  let min_height = 0
  fill(0 , 255, 251) // light blue
  //within the first 59 seconds water will raise as the end of each minute smoothly
  if(minutesWithFraction <= 59){
    if(secondsWithFraction <= 59) {
      min_height = map(minutes, 0, 59, 1, 390);
    }
    else {
      min_height = map(minutesWithFraction, 0, 59, 1, 390);
    }
    rect(340, 443, 74, - min_height); 
  }
  //in the last second of the last minute the water drops smoothly emptying the water tank
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
  fill(0 , 255, 251) // light blue
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
  
}
//load background sink image
function preload() {
  img = loadImage('Sink.png');
}
