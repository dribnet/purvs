let starSpin = 80;
let backCircleSize = 400;

function draw_clock(obj) {
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

  //colors
  let color1 = color(196, 178, 55, 10);
  let color2 = color(220, 247, 247, 10);
  let slowGradient = map (obj.hours, 0, 24, 0, 1)
  let starColor = lerpColor(color1, color2, slowGradient);

  background(34, 36, 41);
  angleMode(RADIANS);
  colorMode(RGB);

  noFill();
  stroke(255);
  noStroke();


  //#region background
  push();
  translate(canvasWidth / 2, canvasHeight / 2);
  rotate(starSpin);
  stroke(255, 255, 255, 50);
  strokeWeight(2);
  fill(42, 44, 54);

  drawingContext.shadowBlur = 13;
  drawingContext.shadowColor = color(0);

  backgroundOct(0, 0, backCircleSize / 2 - 7, 10);

  fill(230, 223, 32);
  noStroke();

  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = color(255, 249, 97);

  star(backCircleSize / 2 + 20, 0, 10, 6, 5);
  pop();
  //#endregion

  //#region spin
  for (let rotateStep = 0; rotateStep < 5; rotateStep++) {
    let rotateMinutes = (obj.minutes + rotateStep) % 5;
    let rotateSeconds = rotateMinutes + obj.seconds / 60;

    starSpin = map(rotateSeconds, 0, 5, 0, TWO_PI);
  }
  //#endregion

  //#region stars
  for (circleSteps = 0; circleSteps < obj.hours; circleSteps++) {
    let circleFromMid = map(
      obj.hours,
      0,
      24,
      0,
      (backCircleSize / 50) * circleSteps
    );

    push();
    translate(canvasWidth / 2, canvasHeight / 2);
    rotate(starSpin);

    fill(starColor);
    stroke(255, 255, 255, 50);
    strokeWeight(2);

    star(
      0 + backCircleSize / 2 - 45 / 2 - circleFromMid,
      0,
      10 + circleFromMid,
      15 + circleFromMid,
      5
    );
    pop();
  }
  //#endregion

  text(obj.hours, 10, 10);
}

//polygon background
function backgroundOct(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

//star function from p5.js reference
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
