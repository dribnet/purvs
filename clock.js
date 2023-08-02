//    obj.seconds_until_alarm is:
//        < 0 if no alarm is set
//        = 0 if the alarm is currently going off
//        > 0 --> the number of seconds until alarm should go off

function draw_clock(obj) {
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  let spins = map(minutes, 0, 60, 0, TWO_PI);

  //#region background
  let nightColorBG = color(61, 61, 61);
  let dayColorBG = color(245, 245, 245);

  //static
  if ((hours >= 0 && hours <= 6) || (hours >= 18 && hours <= 24)) {
    background(nightColorBG);
  } else {
    background(dayColorBG);
  }

  //flicker
  let alarmLerpBG;
  if (millis >= 0 && millis <= 500) {
    alarmLerpBG = map(millis, 0, 500, 0, 1);
  } else if (millis >= 501 && millis <= 1000) {
    alarmLerpBG = map(millis, 500, 1000, 1, 0);
  }

  let alarmBG = lerpColor(nightColorBG, dayColorBG, alarmLerpBG);

  //alarm
  if (alarm == 0) {
    background(alarmBG);
  }
  //#endregion

  push();
  //#region base
  let nightColorBase = color(99, 99, 99, 100);
  let nightStrokeBase = color(250);
  let dayColorBase = color(230, 230, 230, 100);
  let dayStrokeBase = color(10);

  //static
  if ((hours >= 0 && hours <= 6) || (hours >= 18 && hours <= 24)) {
    drawingContext.shadowBlur = 7;
    drawingContext.shadowColor = color(255);
    fill(nightColorBase);
    stroke(nightStrokeBase);
  } else {
    drawingContext.shadowBlur = 7;
    drawingContext.shadowColor = color(0);
    fill(dayColorBase);
    stroke(dayStrokeBase);
  }

  translate(canvasWidth / 2, canvasHeight / 2);
  rotate(spins);
  backgroundOct(0, 0, 200, 10);

  //indicater
  push();

  if ((hours >= 0 && hours <= 6) || (hours >= 18 && hours <= 24)) {
    drawingContext.shadowBlur = 7;
    drawingContext.shadowColor = color(222, 184, 33);
    fill(255, 204, 0);
  } else {
    drawingContext.shadowBlur = 7;
    drawingContext.shadowColor = color(153, 36, 242);
    fill(153, 36, 242);
  }

  noStroke();

  let alarmIndiSpin = map(millis, 0, 1000, 0, TWO_PI);

  translate(0, 0);
  rotate(PI);
  if (alarm == 0) {
    rotate(alarmIndiSpin);
  }

  star(-65, -200, 10, 6, 5);
  pop();
  //#endregion
  pop();

  push();
  //#region hourPoly

  if (obj.seconds % 2) {
    opacity = map(obj.millis, 0, 1000, 5, 20);
  } else if ((obj.seconds % 2) + 1) {
    opacity = map(obj.millis, 0, 1000, 20, 5);
  }

  let nightColor = color(242, 203, 48, opacity + 18 / hours);
  let nightStroke = color(250, opacity + 50);
  let dayColor = color(153, 36, 242, opacity + 18 / hours);
  let dayStroke = color(10, opacity + 50);

  //static
  if ((hours >= 0 && hours <= 6) || (hours >= 18 && hours <= 24)) {
    drawingContext.shadowBlur = 7;
    drawingContext.shadowColor = color(242, 203, 48, 10);
    fill(nightColor);
    stroke(nightStroke);
  } else {
    drawingContext.shadowBlur = 7;
    drawingContext.shadowColor = color(153, 36, 242, 10);
    fill(dayColor);
    stroke(dayStroke);
  }

  translate(canvasWidth / 2, canvasHeight / 2);
  rotate(spins);

  for (let circleSteps = 0; circleSteps < hours; circleSteps++) {
    let circleFromOrigin = map(hours, 0, 24, 0, (400 / 50) * circleSteps);

    push();
    rotate(TWO_PI / 4); //translate and rotate is annoying to deal with
    rotate(PI); //this is needed to get the star into place or else it starts at the bottom

    if (alarm == 0) {
      rotate(alarmIndiSpin);
    }

    star(
      0 + 400 / 2 - 45 / 2 - circleFromOrigin,
      0,
      10 + circleFromOrigin,
      15 + circleFromOrigin,
      5
    );
    pop();
  }
  //#endregion
  pop();

  //#region text
  if ((hours >= 0 && hours <= 6) || (hours >= 18 && hours <= 24)) {
    drawingContext.shadowBlur = 7;
    drawingContext.shadowColor = color(255);
    fill(255);
  } else {
    drawingContext.shadowBlur = 7;
    drawingContext.shadowColor = color(60);
    fill(60);
  }

  push();
  textSize(150);
  textFont("BAHNSCHRIFT");
  textAlign(CENTER, CENTER);
  drawingContext.shadowBlur = 7;
  drawingContext.shadowColor = color(255);

  translate(canvasWidth / 2 - 420, canvasHeight / 2 + 10);
  rotate(PI / 2);
  text(nfs(hours, 2) + " :" + nfs(minutes, 2), 0, 0);
  pop();

  push();
  textSize(40);
  textFont("BAHNSCHRIFT");
  textAlign(RIGHT, CENTER);
  drawingContext.shadowBlur = 7;
  drawingContext.shadowColor = color(255);

  translate(canvasWidth / 2 + 450, canvasHeight / 2 + 242);
  rotate(PI / 2);

  if (alarm < 0) {
    text("Alarm Not Set", 0, 0);
  } else if (alarm >= 0){
    text(nfs(alarm, 2, 1) + " secs", 0, 0);
  }
  pop();
  //#endregion
}

//polygon background from p5.js reference
function backgroundOct(x, y, radius, npoints) {
  rotate(60);

  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// star function from p5.js reference
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
