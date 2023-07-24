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
  let carColor = color(0);

  function draw_Buildings(x, y, h, w, color) {
    push();
      translate(width / 2, ringHeight);
      rotate(scapeDeg);
      rotate(scapePos); //obj.minutes * -3.6
      rotate(x + 15);
      fill(color);
      rect(x, y, w, h, 4);
      fill(color - 10);
      rect(x - 1, y + h, w + 2, 5);
      let lightRow = (w / 10) - 1;
      let lightColumn = (h * -1 / 10) - 1;
      if (daySection == night) {
        fill(255, 255, 0); //Lights ON
      } else {
        fill(210);
      }
      for(n = 0; n < lightColumn; n ++) {
        for (i = 0; i < lightRow; i ++) {
          rect(x + (i * 10) + 7.5, (y + h) + 10 + (n * 10), 5, 5, 1);
        }
      }
    pop();
  }

  function draw_Mountain(y, h, w, shade) {
    fill(40 + shade, 100 + shade, 210 + shade);

    triangle(-100 - (w / 2), y + h, 100 + (w / 2), y + h, 0, y - 150 + h);

    fill(100 + shade, 200 + shade, 240 + shade + shade);
    triangle(-100 - (w / 2), y + h, 0, y + h, 0, y - 150 + h);
    fill(255 + shade, 255 + shade, 240 + shade);
    triangle(-32 - (w / 3.125), y - 100 + h, 0, y - 100 + h, 0, y - 150 + h);
    fill(40 + shade, 150 + shade, 230 + shade);
    triangle(32 + (w / 3.125), y - 100 + h, 0, y - 100 + h, 0, y - 150 + h);
  }

  colorMode(HSB);
  let ringHeight = 600;
  let sunrise = [50, 100, 100];
  let dayColor = [210, 100, 100];
  let night = [230, 100, 39];
  let timeOfDay = sunrise;
  let daySection = sunrise;

  if (obj.hours >= 5  && obj.hours < 9 || obj.hours >= 17 && obj.hours < 21) {
    daySection = sunrise;
  } else if (obj.hours >= 9 && obj.hours < 17) {
    daySection = dayColor;
  } else {
    daySection = night;
  }

  background(0); //  beige
  noStroke();
  
  // Outer Rings
  fill(daySection[0] - 15, daySection[1], daySection[2]);
  circle(width / 2, ringHeight, width + 500);
  fill(daySection[0] - 10, daySection[1], daySection[2]);
  circle(width / 2, ringHeight, width + 260); // Hour Ring
  fill(daySection[0] - 5, daySection[1], daySection[2]);
  circle(width / 2, ringHeight, width);
  
  // Inner Ring (Minute Ring)
  let darkRing = false;
  if (obj.hours % 2 == 1) {
    darkRing = true;
  } else {
    darkRing = false;
  }

  if (darkRing) {
    fill(daySection[0] - 5, daySection[1], daySection[2] - 5);
  } else {
    fill(daySection[0] + 5, daySection[1], daySection[2]);
  }

  if (daySection == night) {
    fill(235, 100, 30);
  }
  circle(width / 2, ringHeight, width - 30);
  
  colorMode(RGB);
  angleMode(DEGREES);
  //Roman Numeral / Hour Ring
  let hourDeg = map(obj.hours, 0, 23, 0, 690);
  let numeral = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
  let minDeg = map(obj.minutes, 0, 59, -66, 66); //0-126
  let secDeg = map(obj.millis, 0, 999, 0, 2.2);
  let lastSec = map(obj.millis, 0, 999, 0, 30);
  let overlap = map(obj.millis, 0, 999, 0, 15);
  let negOverlap = map(obj.millis, 0, 999, 15, 0);
  
  //Hour Ring
  push();
    translate(width / 2, ringHeight);
    if (obj.minutes == 59 && obj.seconds == 59) { // Transition to Hour
      rotate(lastSec);
    }
    if (obj.minutes == 0 && obj.seconds == 0) { //Overlapping Action
      if (obj.millis < 499) {
        rotate(overlap);
      } else {
        rotate(negOverlap);
      }
    }
    rotate(hourDeg); // Rotation for top of circle

    fill(255);
    textSize(100);
    textStyle(BOLD);
    textAlign(CENTER);
    for (i = 1; i < 13; i ++) {
      rotate(30);
      text(numeral[numeral.length - i], 0, -505);
    }
  pop();

  // Minute Ring
  push();
    translate(width / 2, ringHeight);
    if (obj.seconds == 59){
      rotate(secDeg);
    }
    rotate(minDeg);
    rectMode(CENTER);
    colorMode(HSB);
    
    for (n = 0; n < obj.minutes; n ++) {
      rotate(-2.5);
      if (darkRing) {
        fill(daySection[0] + 5, daySection[1], daySection[2]);
      } else {
        fill(daySection[0] - 5, daySection[1], daySection[2] - 5);
      }
      rect(0, -372, 22, 190);
    }
  pop();

  //LANDSCAPES
  colorMode(RGB);
  let scapeDeg = map(obj.seconds, 0, 59, 6, 0);
  let cityY = -265;
  let scapePos = map(obj.minutes, 0, 59, 359, 0);

  push();
  rotate(0);
  translate(width / 2, ringHeight);
  rectMode(CENTER);
  rotate(scapeDeg);
  rotate(scapePos); // LANDSCAPE ROTATION ISSUE
  rotate(130); // Place around circle
  fill(30, 180, 130);
  ellipse(0, -240, 250, 170);
  rotate(60);
  draw_Mountain(-250, 20, 20, -40);
  rotate(-20);
  draw_Mountain(-250, 0, 0, 0);
  rotate(-20);
  fill(30, 200, 100);
  ellipse(0, -230, 250, 170);
  rotate(90);
  fill(30, 180, 130);
  ellipse(0, -240, 250, 170);
  rotate(-20);
  fill(30, 200, 100);
  ellipse(0, -230, 170, 160);
  rotate(-20);
  draw_Mountain(-250, 20, 20, 30);
  pop();
  
  rectMode(CORNER);
  draw_Buildings(-5, cityY, -70, 40, 100);//Negative to reduce Changes || Multiples of 10 Only
  draw_Buildings(0, cityY, -140, 40, 160);
  draw_Buildings(2, cityY, -50, 50, 130);
  draw_Buildings(6, cityY, -60, 30, 180);
  draw_Buildings(14, cityY, -120, 60, 110);
  draw_Buildings(10, cityY, -40, 50, 140);
  draw_Buildings(20, cityY, -60, 30, 190);
  draw_Buildings(26, cityY, -140, 40, 160);
  draw_Buildings(24, cityY, -50, 50, 130);
  draw_Buildings(22, cityY, -60, 30, 180);
  draw_Buildings(36, cityY, -120, 60, 110);
  draw_Buildings(27, cityY, -40, 50, 140);
  draw_Buildings(32, cityY, -60, 30, 190);

  // Earth Ring
  colorMode(HSB);
  fill(daySection[0] - 40, daySection[1], daySection[2] - 70);
  circle(width / 2, ringHeight, width - 400);

  colorMode(RGB);
  // Road Shapes
  fill(70, 70, 70);
  rect(0, 390, width, 225);
  fill(50, 50, 50);
  rect(0, 400, width, 75);

  //Time Placeholders
  textSize(30);
  textAlign(LEFT);
  fill(255);
  text(obj.hours + " : " +  obj.minutes + " : " + obj.seconds, 20, 30);

  //CAR
  let bounce = map(obj.millis, 0, 999, 1, 800);
  let phase = sin(bounce);
  draw_Car(50, 230 + phase, phase, carColor);

  //ROAD LINES
  stroke(210);
  strokeWeight(2);
  let linePace = map(obj.millis, 0, 999, width / 5, 0);
  for (i = 0; i < 6; i ++) {
    line(linePace + width / 5 * i, 440, linePace + 70 + width / 5 * i, 440);
  }
  stroke(179, 179, 0);
  line(0, 446, width, 446);

  //MARKER POSTS
  let markerPace = map(obj.millis, 0, 999, width / 2, 0);
  noStroke();
  fill(102, 34, 0);
  rect(width / 2 + markerPace, 410, 5, 75); //Poles
  rect(markerPace, 410, 5, 75);
  
  angleMode(RADIANS);
  fill(90, 0, 30);
  arc(width / 2 + markerPace + 4, 396, 38, 64, 0, 2.4 + 0.7, CHORD);
  arc(markerPace + 4, 396, 38, 64, 0, 2.4 + 0.7, CHORD);
  fill(140, 0, 0);
  arc(width / 2 + markerPace + 2, 396, 36, 64, 0, 2.4 + 0.7, CHORD);
  arc(markerPace + 2, 396, 36, 64, 0, 2.4 + 0.7, CHORD);
  
  textSize(20);
  // textStyle(BOLD);
  textFont('Helvetica');
  textAlign(CENTER);
  fill(255);
  text(obj.seconds, width / 2 + markerPace + 2, 416);
  if (obj.seconds == 0) {
    text(59, markerPace, 418);
  } else {
    text(obj.seconds - 1, markerPace, 418);
  }
}

function draw_Car(x, y, phase, carColor) {

  noStroke();
  fill(0);
  ellipse(x + 135, y + 195 - phase, 280, 20);

  //DETAILING
  fill(255, 100);
  quad(x + 80, y + 150, x + 215, y + 150, x + 185, y + 124, x + 100, y + 125);
  noStroke();
  fill(180);
  rect(x + 146, y + 125, 2, 25);
  rect(x + 100, y + 125, 2, 25);
  fill(carColor);
  quad(x + 185, y + 123, x + 180, y + 123, x + 210, y + 150, x + 215, y + 150);
 
  //WHEELS
  fill(30);
  circle(x + 62, y + 180 - phase, 35);
  circle(x + 242, y + 180 - phase, 35);
  fill(0)
  circle(x + 62, y + 180 - phase, 30);
  circle(x + 242, y + 180 - phase, 30);
  fill(240);
  circle(x + 62, y + 180 - phase, 20);
  circle(x + 242, y + 180 - phase, 20);

  //CAR BODY
  fill(carColor);
  stroke(180);
  strokeWeight(1);
  let pointX = [270, 289, 291, 289, 291, 285, 205, 44, -10, -15, -10, 40, 43, 45, 44, 50, 75, 80, 78, 80, 82, 220, 222, 224, 222, 230, 255, 260, 260, 262, 270];
  let pointY = [175, 175, 165, 165, 158, 149, 148, 150, 160, 175, 182, 183, 190, 190, 175, 168, 168, 175, 190, 188, 180, 180, 188, 190, 175, 168, 168, 175, 180, 180, 175];
  beginShape();
    for (i = 0; i < pointX.length; i ++) {
      vertex(pointX[i] + x, pointY[i] + y);
    }
  endShape(CLOSE);

  beginShape();
    curveVertex(x + 100, y + 150);
    curveVertex(x + 90, y + 150);
    curveVertex(x + 120, y + 130);
    vertex(x + 180, y + 125);
    vertex(x + 180, y + 125);

    curveVertex(x + 185, y + 123);//Roof^
    curveVertex(x + 90, y + 125);
    curveVertex(x + 44, y + 150);//BootArea
    curveVertex(x + 44, y + 150);//BootArea
  endShape();

  //DETAILING
  fill(220);
  stroke(10);
  quad(x - 14, y + 172, x - 5, y + 172, x - 5, y + 181, x - 10, y + 181);
  textSize(5);
  textFont('Georgia');
  textStyle(ITALIC);
  noStroke();
  text("impala 67", x + 3, y + 164);
  rect(x - 15, y + 166, 245, 5, 5);
  rect(x + 90, y + 155, 8, 3, 2);
  rect(x + 155, y + 155, 8, 3, 2);

  //LIGHTS
  fill(200);
  stroke(240);
  beginShape();
    vertex(x + 289, y + 175);//light
    vertex(x + 291, y + 165);
    vertex(x + 289, y + 165);
    vertex(x + 291, y + 158);
    vertex(x + 285, y + 158);
    vertex(x + 280, y + 175);
  endShape();
  fill(255);
  stroke(0);
  rect(x + 284, y + 158, 5, 8)
}