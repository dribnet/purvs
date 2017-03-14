/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(hour, minute, second, millis, alarm) {
	
  background(0, 128, 128); // win95 bg
  var am = 1; //no booleans in p5.js so using 1 = true, 0 = false
  textSize(18);
  
  //Grey box
  fill(192);
  noStroke();
  rect(230,75,500,350);
  
  //Top blue bar
  fill(0,0,128);
  rect(232,77,496,25);
  fill(255);
  text("Alarm set for 7:30am", 238, 95);

  fill(0);
  text("Loading time...", 350, 140);
  
  //X
  fill(192);
  rect(706, 80, 19, 19);
  
  fill(0);
  text("X", 710, 96);
  textSize(15);

  if (hour > 12)
  {
    am = 0; //It is PM, not AM
  }
  else
  {
    am = 1; //It is AM, not PM
  }

  /******HOUR BAR*****/
  fill(0,0,128);
  for (var h = 1; h <= hour; h++)
  {
    if (hour > 12)
    {
      hour = hour-12; //Don't want 24 hour time
    } 
    rect(328+h*22, 155, 18, 30);

  }
  fill(255);
  text(hour, 333+hour*22, 175);

  /******MINUTE BAR ONE*****/
  fill(0,0,128);
  var minute1 = floor(minute/10);
  for (var m1 = 0; m1 <= minute1; m1++)
  {

    rect(350+m1*22, 195, 18, 30);

  }
  fill(255);
  text(minute1, 333+m1*22, 215);

  /******MINUTE BAR 2*****/
  fill(0,0,128);
  var minute2 = minute - floor(minute/10)*10;
  for (var m2 = 0; m2 <= minute2; m2++)
  {

    rect(350+m2*22, 235, 18, 30);

  }
  fill(255);
  text(minute2, 333+m2*22, 255);

  /******SECONDS*****/
  var secondWidth = map(second + (millis/1000.0), 0, 60, 0, 330);

  fill(0,0,128);
  rect(350, 275, secondWidth, 30);

  fill(0);
  text(second + "/60 Seconds", 350, 325);

  /******BORDERS FOR BARS*****/
  noFill();
  stroke(0);
  for (var i = 153; i <= 273; i += 40)
  {
    rect(348, i, 333, 33);

  }

  /*****AM/PM BUTTONS*****/
  rect(365, 360, 100, 30);
  rect(495, 360, 100, 30);

  noStroke();
  fill(0);
  if (am == 0)
  {
    fill(110);
  }
  text("am", 405, 380);
  fill(0);
  if (am == 1)
  {
    fill(110);
  }
  text("pm", 535, 380);
}
