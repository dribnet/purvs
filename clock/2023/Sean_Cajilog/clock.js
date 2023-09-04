/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

//This function draws the outline of the clock
function battery(x,y) {
  noFill();
  strokeWeight(3);
  stroke(0)
  beginShape();
    vertex(x-140, y+200);
    vertex(x+140, y+200);
    vertex(x+140, y-160);
    vertex(x+60, y-160);
    vertex(x+60, y-210);
    vertex(x-60, y-210);
    vertex(x-60, y-160);
    vertex(x-140, y-160);
  endShape(CLOSE);

  beginShape();
    vertex(x-150, y-160);
    vertex(x-210, y-160);
    vertex(x-210, y+200);
    vertex(x-150, y+200);
  endShape(CLOSE);

  beginShape();
    vertex(x+150, y-160);
    vertex(x+210, y-160);
    vertex(x+210, y+200);
    vertex(x+150, y+200);
  endShape(CLOSE);
}

//This draws the outline of one of the rectangles inside the main battery
//I will then draw more by looping it
function hoursBars(x, y){
  rect(x, y, 125, 47);
}

//This draws one of the coloured rectangles inside the battery
//I will then draw more by looping it
function hoursBarsCol(x, y) {
  // noStroke();
  stroke(0);
  fill(200, 91, 232);
  rect(x, y, 125, 47);
}

//This draws the longer rectangle in the battery
function hoursBarEleven(x, y) {
  // noStroke();
  fill(200, 91, 232);
  rect(x, y, 260, 47);
}

//This draws the lines in the left bar
function secondsLines(x, y) {
  line(x+0, y+0, x+50, y+0);
}

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
  
  //Coordinates of the center of the canvas
  let centerX = 480;
  let centerY = 250;
  
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  let minuteBarHeight = map(minutes, 0, 59, centerY-250, centerY+110);
  let secondsCount = map(seconds, 0, 59, 59, 0);

  //Mapping RGB values for the minutes bar
  let minutesColRed = map(minutes, 0, 59, 57, 160);
  let minutesColGreen = map(minutes, 0, 59, 24, 51);
  let minutesColBlue = map(minutes, 0, 59, 71, 202);

  //milliseconds and alarm maps to create oscillations
  let millisAlpha = 255 * pow( sin( PI/999 * millis ), 2 );
  let alarmAlpha = 130 * pow( sin( PI/500 * millis ), 2 );

  
  //Changing the background colour when the time is between 6am and 6pm and when it's between 6pm and 6am
  
  //Lighter
  if (hours >= 6 && hours < 18) {
  background(255, 209, 239);
  }

  //Darker
  if (hours >= 18 || hours < 6) {
    background(152, 125, 173);
  }

  //AM when it's 0000 to 1159 and PM when it's 1200 to 2359
  if (hours >= 0 && hours < 12) {

    noStroke();
    fill(57, 24, 71, millisAlpha);
    textSize(40);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("AM", centerX, centerY-180);
  }

  if (hours >= 12 && hours < 24) {
    noStroke();
    fill(57, 24, 71, millisAlpha);
    textSize(40);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("PM", centerX, centerY-180);
  }


  //Minute bar is on the right
  //It goes from the bottom to the top and changes colour as it gets taller
  noStroke();
  fill(minutesColRed, minutesColGreen, minutesColBlue);
  rect(centerX+150, centerY+200, 60, -minuteBarHeight);
  
  //Draws the whole outline in the center of the canvas
  battery(centerX, centerY);

  //This draws the outline for the 11H bar
  rect(centerX-130, centerY-145, 260, 47);

  //Loop to draw the rest of the bars inside the battery
  for (var hourBarY = centerY+140; hourBarY >= centerY-120; hourBarY -= 57){
    hoursBars(centerX-130, hourBarY);
  }
  for (var hourBarY = centerY+140; hourBarY >= centerY-120; hourBarY -= 57){
    hoursBars(centerX+5, hourBarY);
  }

  //One line is drawn every second until a minute has passed then it restarts
  let secondsLinesY = 6;
  if (seconds >= 0 && seconds < 60) {
    for (let i = secondsCount+1; i < 60; i++) {
      stroke(57, 24, 71);
      secondsLines(centerX-205, 90+(secondsLinesY)*i);
    }
  }

  //Every hour, the hour bars light up
  //This goes from 0000-1100 then resets at 1200 and repeats from 1200-2300
  let hoursBarsColY = 57;
  let hourBarsCount = 5;
  let hoursAMSix = map(hours, 0, 5, 5, 0);
  let hoursAMTwelve = map(hours, 0, 12, 12, 0);
  let hoursPMSix = map(hours, 0, 18, 18, 0);
  let hoursPMTwelve = map(hours, 0, 24, 24, 0);

  //AM

  if (hours >=0 && hours < 6) {
    for (let i = hoursAMSix; i < 5; i++) {
      hoursBarsCol(centerX-130, 162+(hoursBarsColY)*i);
    }
  }

  if (hours >= 6 && hours < 11) {
    for (let i = hoursAMTwelve; i < 7; i++) {
      hoursBarsCol(centerX+5, 48+(hoursBarsColY)*i);
    }
  }

  if (hours >=6 && hours < 12) {
    for (let j = 0; j < hourBarsCount; j++) {
      hoursBarsCol(centerX-130, 162+(hoursBarsColY)*j);
    }
  }

  if (hours == 11) {
    for (let j = 0; j < hourBarsCount; j++) {
      hoursBarEleven(centerX-130, centerY-145);
      hoursBarsCol(centerX+5, 162+(hoursBarsColY)*j);
    }
  }

  //PM

  if (hours >= 12 && hours < 18) {
    for (let i = hoursPMSix; i < 6; i++) {
      hoursBarsCol(centerX-130, 105+(hoursBarsColY)*i);
    }
  }

  if (hours >= 18 && hours < 23) {
    for (let i = hoursPMTwelve; i < 7; i++) {
      hoursBarsCol(centerX+5, 48+(hoursBarsColY)*i);
    }
  }

  if (hours >=18 && hours < 24) {
    for (let j = 0; j < hourBarsCount; j++) {
      hoursBarsCol(centerX-130, 162+(hoursBarsColY)*j);
    }
  }

  if (hours == 23) {
    for (let j = 0; j < hourBarsCount; j++) {
      hoursBarEleven(centerX-130, centerY-145);
      hoursBarsCol(centerX+5, 162+(hoursBarsColY)*j);
    }
  }

  
  //Alarm is 30 seconds so i mapped the time to the height of the bar
  let alarmBar = map(alarm, 0, 30, centerY-250, centerY+110);

  //If alarm is less than 0, there is no bar
  if (alarm < 0) {
    noStroke();
    noFill();
    rect(centerX+220, centerY+200, 40, -alarmBar);
  }

  //if alarm is equal to 0, the alarm goes off
  //my alarm is a simple flashing red
  else if(alarm == 0) {
    noStroke();
    noFill();
    rect(centerX+220, centerY+200, 40, -alarmBar);

    background(255, 0, 0, alarmAlpha)

  }

  //else (the timer is counting down): the map is working - the height of the bar is corresponding with the time
  else {
  strokeWeight(2);
  stroke(0);
  fill(255, 0, 0);
  rect(centerX+220, centerY+200, 40, -alarmBar);
  }


  }


