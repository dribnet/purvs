let starSpin = 0;
let indicateSpin = 0;
let backCircleSize = 400;
let opacity = 10;

function draw_clock(obj) {
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

  //colors

  if(obj.seconds % 2){
    opacity = map(obj.millis, 0, 1000, 20, 40);
  }
  else if (obj.seconds % 2 + 1){
    opacity = map(obj.millis, 0, 1000, 40, 20);
  }

  let color1 = color(196, 178, 55, opacity);
  let color2 = color(220, 247, 247, opacity);
  let slowGradient = map(obj.hours, 0, 24, 0, 1);
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

  push();

  for(let indicateStep = 0; indicateStep < obj.millis; indicateStep++){
    let indicateSecs = (obj.seconds + indicateStep) %  5;
    let indicateMills = indicateSecs + obj.millis / 1000;

    indicateSpin = map(indicateMills, 0, 5, 0, TWO_PI);
  }

  translate(backCircleSize / 2 + 20, 0)
  rotate(indicateSpin);
  star(0, 0, 10, 6, 5);
  pop();
  pop();
  //#endregion

  //#region spin
  for (let rotateStep = 0; rotateStep < 5; rotateStep++) {
    let rotateHours = (obj.hours + rotateStep) % 5;
    let rotateMins = rotateHours + obj.minutes / 60;

    starSpin = map(rotateMins, 0, 5, 0, TWO_PI);
  }
  //#endregion

  //#region stars
  for (let circleSteps = 0; circleSteps < obj.hours; circleSteps++) {
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
    stroke(255, 255, 255, opacity + 40);
    strokeWeight(1.5);

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

  //#region clock time
  push();
  fill(255);
  textFont("Roboto");

  text(nf(obj.hours, 2, 0), 50, canvasHeight / 2);
  text(nf(obj.minutes, 2, 0), 850, canvasHeight / 2);
  pop();
  //#endregion
}

//shapes//

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
