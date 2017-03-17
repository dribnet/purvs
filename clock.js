/*
 * us p5.js to draw a clock on a 960x500 canvas
 */

/*****TODO*****/
//Make more things functions
//Make buttons respond to being clicked
//Alarm function
//Make everything more windows-y (microsoft sans serif font, window borders)

var clicked = 0;

function draw_clock(hour, minute, second, millis, alarm) {
	
  background(0, 128, 128); // win95 bg
  var am = 1; //no booleans in p5.js so using 1 = true, 0 = false
  var pm = 0;

  textSize(15);
  if (alarm < 0)
  {
    drawBox(230, 75, 500, 350, "Alarm not set");
  }
  else if (alarm == 0)
  {
    drawBox(230, 75, 500, 350, "Alarm!");
  }
  else if (alarm > 0)
  {
    drawBox(230, 75, 500, 350, "Alarm in " + floor(alarm) + " seconds");
  }

  fill(0);
  text("Loading time...", 350, 140);

  //Converting from 24 hour time
  if (hour >= 12)
  {
    am = 0; //It is PM, not AM
    pm = 1;
  }
  else
  {
    am = 1; //It is AM, not PM
    pm = 0;
  }

  if (hour == 0)
  {
    hour = 12; //Makes it 12AM instead of 0AM
  }

  if (hour > 12)
  {
    hour = hour-12; //Don't want 24 hour time
  }

  /******HOUR BAR*****/
  fill(0,0,128);
  for (var h = 1; h <= hour; h++)
  {
    rect(328+h*22, 155, 18, 30);

  }
  fill(255);

  if (hour < 10)
  {
    text(hour, 333+hour*22, 175);
  }
  else
  {
    text(hour, 329+hour*22, 175); //makes the text further left if it is double digit
  }

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

  button("am", 365, 360, am);
  button("pm", 495, 360, pm);

  /*****USER PRESSES THE X*****/
  if (clicked == 1)
  {
    drawBox(300,125,360,150, "Error");

    fill(0);
    text("Cannot exit time.", 420, 190);

    button("OK", 425, 220, 1);
  }

  if (alarm == 0)
  {
    for (var x = 0; x <=5; x++)
    {
      for (var y = 0; y <= 15; y++)
      {
        drawBox(x*200, y*35-10, 200, 50, "Alarm!");
      }
    }
  }
}

function button(string, x, y, active)
{
  noFill();
  stroke(0);
  if (active == 0)
  {
    stroke(110)
  }
  rect(x, y, 100, 30);
  noStroke();
  fill(0);
  if (active == 0)
  {
    fill(110)
  }
  textAlign(CENTER);
  text(string, x+50, y+20);
  textAlign(LEFT);
}

/******USER CLICKS X*****/
function mouseReleased()
{
  if (mouseX >= 706 && mouseX <= 725 && mouseY >= 80 && mouseY <= 99)
  {
    clicked = 1;
  }
  else if (clicked == 1)
  {
    clicked = 0;
  }
}

/******BOX*****/
function drawBox(x, y, width, height, barText)
{
  //Grey box
  fill(192);
  noStroke();
  rect(x,y,width,height);
  
  //Top blue bar
  fill(0,0,128);
  rect(x+2,y+2,width-4,25);
  fill(255);
  text(barText, x+8, y+20);

  //X
  fill(192);
  rect(x+width-24, y+5, 19, 19);
  
  textSize(18);
  fill(0);
  text("X", x+width-20, y+21);
  textSize(15);

  noFill();
  stroke(255);
  rect(x-1,y-1,width+1,height+1);
  noStroke();
}













