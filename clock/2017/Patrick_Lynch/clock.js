/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

var clicked = 0; //Whether or not the user has clicked on the X

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
  for (var i = 153; i <= 273; i += 40)
  {
    stroke(128);
    rect(348, i, 333, 33);
    stroke(255);
    line(681, i, 681, i+33);
    line(682, i, 682, i+33);
    line(348, i+33, 681, i+33);
    line(348, i+34, 681, i+34);
  }

  /*****AM/PM BUTTONS*****/

  button("am", 365, 360, am);
  button("pm", 495, 360, pm);

  /*****DRAW HOURGLASS*****/
  hourglass(270, 197);

  /*****USER PRESSES THE X*****/
  if (clicked == 1)
  {
    drawBox(300,125,360,150, "Error");

    fill(0);
    text("Cannot exit time.", 420, 190);

    button("OK", 425, 220, 1);
  }

  if (alarm == 0) //If alarm is active
  {
    for (var x = 0; x <=5; x++)
    {
      for (var y = 0; y <= 15; y++)
      {
        drawBox(x*200-10, y*35-10, 200, 50, "Alarm!"); //Draw windows all over the screen
      }
    }
  }
}

/*****CREATES A BUTTON*****/
function button(string, x, y, active)
{
  noStroke();
  textAlign(CENTER);
  if (active == 0) //If button is inactive, draw it greyed out
  {
    fill(0);
    rect(x, y, 100, 30);
    fill(255);
    rect(x,y,99, 29);
    fill(128);
    rect(x+1, y+1, 98, 28);
    fill(223);
    rect(x+1, y+1, 97, 27);
    fill(192);
    rect(x+2, y+2, 96, 26);
    fill(255);
    text(string, x+51, y+20);
    fill(128);
    text(string, x+50, y+19);
  }
  else //If button is active, give it strong black lines
  {
    fill(0);
    rect(x, y, 100, 30);
    fill(255);
    rect(x+1,y+1,97, 27);
    fill(128);
    rect(x+2, y+2, 96, 26);
    fill(223);
    rect(x+2, y+2, 95, 25);
    fill(192);
    rect(x+3, y+3, 94, 24);
    fill(0);
    text(string, x+50, y+19);
  }
  textAlign(LEFT);
}

/******USER CLICKS X*****/
function mouseReleased()
{
  if (mouseX >= 706 && mouseX <= 725 && mouseY >= 80 && mouseY <= 99) //If on the X
  {
    clicked = 1;
  }
  else if (clicked == 1) //Exits the error message window if the user clicks anywhere
  {
    clicked = 0;
  }
}

/******BOX*****/
function drawBox(x, y, width, height, barText)
{
  //Border
  fill(255);
  rect(x-3, y-3, width+5, height+5);

  fill(128);
  rect(x-1, y-1, width+3, height+3);

  fill(0);
  rect(x,y,width+2, height+2);

  fill(128);
  rect(x-1, y-1, width+2, height+2);
  

  //Grey box
  fill(192);
  noStroke();
  rect(x,y,width,height);
  
  //Top blue bar
  fill(0,0,128);
  rect(x+2,y+2,width-4,25);
  fill(255);
  text(barText, x+8, y+20);

  //X box and border
  fill(0);
  rect(x+width-24, y+5, 19, 19);
  fill(255);
  rect(x+width-24, y+5, 18, 18);
  fill(128);
  rect(x+width-23, y+6, 17, 17);
  fill(223);
  rect(x+width-23, y+6, 16, 16);
  fill(192);
  rect(x+width-22, y+7, 15, 15);
  
  //X
  textSize(18);
  fill(0);
  text("X", x+width-21, y+21);
  textSize(15);
}

/*****HOURGLASS*****/
function hourglass(x,y)
{
  x = x/3;
  y = y/3;

  scale(3);

  //Draws the hourglass with rectangles for the pixels
  fill(0);
  rect(x,y,13,3);
  rect(x+1,y+3,11,5);
  rect(x+1,y+14,11,5);
  rect(x,y+19,13,3);
  rect(x+2,y+8,9,1);
  rect(x+2,y+13,9,1);
  rect(x+3,y+9,7,1);
  rect(x+3,y+12,7,1);
  rect(x+4,y+10,5,1);
  rect(x+4,y+11,5,1);

  fill(255);
  rect(x+2, y+1, 9, 1);
  rect(x+2, y+20, 9, 1);
  rect(x+2, y+3, 9, 4);
  rect(x+2, y+15, 9, 4);
  rect(x+3, y+7, 7, 1);
  rect(x+3, y+14, 7, 1);
  rect(x+4, y+8, 5, 1);
  rect(x+4, y+13, 5, 1);
  rect(x+5, y+9, 3, 1);
  rect(x+5, y+12, 3, 1);
  rect(x+6, y+5, 1, 10);

  fill(0);
  rect(x+4, y+5, 1, 1);
  rect(x+6, y+5, 1, 1);
  rect(x+8, y+5, 1, 1);
  rect(x+5, y+6, 1, 1);
  rect(x+7, y+6, 1, 1);
  rect(x+6, y+7, 1, 1);
  rect(x+6, y+9, 1, 1);

  rect(x+6, y+13, 1, 1);
  rect(x+6, y+15, 1, 1);
  rect(x+5, y+16, 1, 1);
  rect(x+7, y+16, 1, 1);
  rect(x+4, y+17, 1, 1);
  rect(x+6, y+17, 1, 1);
  rect(x+8, y+17, 1, 1);
  rect(x+3, y+18, 1, 1);
  rect(x+5, y+18, 1, 1);
  rect(x+7, y+18, 1, 1);
  rect(x+9, y+18, 1, 1);

  resetMatrix();
}













