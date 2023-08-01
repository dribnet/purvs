/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

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

function hoursBars(x, y){
  rect(x, y, 125, 47);
}

function hoursBarsCol(x, y) {
  // noStroke();
  stroke(0);
  fill(200, 91, 232);
  rect(x, y, 125, 47);
}

function hoursBarEleven(x, y) {
  // noStroke();
  fill(200, 91, 232);
  rect(x, y, 260, 47);
}

function minutesLines(x, y) {
  line(x+0, y+0, x+50, y+0);
}

function secondsLines(x, y) {
  line(x+0, y+0, x+50, y+0);
}

function millisBar(x, y) {

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
  
  let centerX = 480;
  let centerY = 250;
  
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  // let secondsWithFraction   = seconds + (millis / 1000.0);



  // let hourBarWidth   = map(hours, 0, 24, 0, 129);
  let minuteBarHeight = map(minutes, 0, 59, centerY-250, centerY+110);
  let secondsCount = map(seconds, 0, 59, 59, 0);
  //let secondBarHeight  = map(seconds, 0, 60, centerY-250, centerY+110);
  // let secondHeightSmooth  = map(secondsWithFraction, 0, 60, centerY-250, centerY+110);
  // let millisBarHeight = map(millis, 0, 1000, centerY+200, centerY-60);
  let minutesColRed = map(minutes, 0, 59, 57, 160);
  let minutesColGreen = map(minutes, 0, 59, 24, 51);
  let minutesColBlue = map(minutes, 0, 59, 71, 202);

  let millisAlpha = 255 * pow( sin( PI/999 * millis ), 2 );
    
  if (hours >= 6 && hours < 18) {
  background(255, 209, 239);
  }

  if (hours >= 18 || hours < 6) {
    background(152, 125, 173);
  }
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

  // noFill(); // dark grey



  // fill(255);// pink
  // ellipse(width / 3, 350, 150);
  // fill(140, 255, 251) // blue
  // ellipse(width / 2, 350, 150);
  // fill(175, 133, 255); // purple
  // ellipse(width / 3 * 2, 350, 150);

  noStroke();
  fill(minutesColRed, minutesColGreen, minutesColBlue);
  // rect(centerX-210, centerY+200, 60, -secondHeightSmooth);
  rect(centerX+150, centerY+200, 60, -minuteBarHeight);
  
  // rect(centerX-130, centerY+140, hourBarWidth, 47);

  battery(centerX, centerY);

    rect(centerX-130, centerY-145, 260, 47);

  for (var hourBarY = centerY+140; hourBarY >= centerY-120; hourBarY -= 57){
    hoursBars(centerX-130, hourBarY);
  }
  for (var hourBarY = centerY+140; hourBarY >= centerY-120; hourBarY -= 57){
    hoursBars(centerX+5, hourBarY);
  }


  


  let secondsLinesY = 6;
  if (seconds >= 0 && seconds < 60) {
    for (let i = secondsCount+1; i < 60; i++) {
      stroke(57, 24, 71);
      secondsLines(centerX-205, 90+(secondsLinesY)*i);
    }
  }

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

  

  // else if (hours >= 0 && 5 < hours < 11) {
  //   for (let i = hoursAMTwelve; i < 7; i++) {
  //     hoursBarsCol(centerX+5, 48+(hoursBarsColY)*i);
  //   }
  // }




  // if (hours >=12 && hours < 18 ) {
  //   for (let i = hoursPMSix; i < 5; i++) {
  //     hoursBarsCol(centerX-130, 162+(hoursBarsColY)*i);
  //   }
  // }

  // if (hours >=18 && hours < 24) {
  //   for (let j = 0; j < hourBarsCount; j++) {
  //     hoursBarsCol(centerX-130, 162+(hoursBarsColY)*j)
  //   }
  // }

  // if (hours >= 6 && 11 < hours < 17) {
  //   for (let i = hoursPMTwelve; i < 7; i++) {
  //     hoursBarsCol(centerX+5, 48+(hoursBarsColY)*i);
  //   }
  // }

  // if (hours == 23) {
  //   for (let j = 0; j < hourBarsCount; j++) {
  //     hoursBarsCol(centerX-130, 162+(hoursBarsColY)*j)
  //     hoursBarEleven(centerX-130, centerY-145)
  //   }
  // }



  }


