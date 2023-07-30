// DRAW CLOCK FUNCTION
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

  // Setup Variables
  let carColor = color(0);
  let alarm = obj.seconds_until_alarm;
  let ringHeight = 600; // Height of Rings

  // Buildings
  function draw_Buildings(x, y, h, w, color) {
    push();
      //Building Shape
      translate(width / 2, ringHeight);
      if (alarm == 0) {
        rotate(alarmSpin2);
      } else {
        rotate(scapeDegSec + scapeDegMin);
      }
      rotate(x + 15);
      fill(color);
      rect(x, y, w, h, 4);
      fill(color - 10);
      rect(x - 1, y + h, w + 2, 5);
      
      //Building Windows
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

  // Mountains
  function draw_Mountain(rotation, y, h, w, shade, nightshade) {
    if (nightshade) { // Check for Nighttime
      shade -= 100;
    }
    rotate(rotation);
    colorMode(RGB);
    fill(40 + shade, 100 + shade, 210 + shade);
    triangle(-100 - (w / 2), y + h, 100 + (w / 2), y + h, 0, y - 150 + h);
    fill(100 + shade, 200 + shade, 240 + shade + shade);
    triangle(-100 - (w / 2), y + h, 0, y + h, 0, y - 150 + h);
    fill(255 + shade, 255 + shade, 240 + shade);
    triangle(-32 - (w / 3.125), y - 100 + h, 0, y - 100 + h, 0, y - 150 + h);
    fill(40 + shade, 150 + shade, 230 + shade);
    triangle(32 + (w / 3.125), y - 100 + h, 0, y - 100 + h, 0, y - 150 + h);
  }

  // Draw Hills
  function draw_Hill(rotation, x, y, h, w, shade, nightshade) {
    if (nightshade) { // Check for Nighttime
      shade += 50;
    }
    rotate(rotation);
    colorMode(HSB);
    fill(100, 100, 60 - shade);
    ellipse(x, y, w, h);
  }

  // Time of day Colour Variables
  colorMode(HSB);
  let sunrise = [50, 100, 100];
  let dayColor = [210, 100, 100];
  let night = [230, 100, 39];
  let daySection = sunrise;

  // Check Time of Day
  if (obj.hours >= 5  && obj.hours < 9 || obj.hours >= 17 && obj.hours < 21) {
    daySection = sunrise;
  } else if (obj.hours >= 9 && obj.hours < 17) {
    daySection = dayColor;
  } else {
    daySection = night;
  }

  // Set Background Colour
  if (daySection != night) {
    background(255);
  } else {
    background(0);
  }
  noStroke();
  
  // OUTER RINGS (Inc. Hour Ring)
  fill(daySection[0] - 15, daySection[1], daySection[2]);
  circle(width / 2, ringHeight, width + 500);
  fill(daySection[0] - 10, daySection[1], daySection[2]);
  circle(width / 2, ringHeight, width + 260); // Hour Ring
  fill(daySection[0] - 5, daySection[1], daySection[2]);
  circle(width / 2, ringHeight, width);
  
  // INNER RING (Minute Ring Background)
  let darkRing = false;
  if (obj.hours % 2 == 1) { // Alternate Ring Colour
    darkRing = true;
    fill(daySection[0] - 5, daySection[1], daySection[2] - 5);
  } else {
    darkRing = false;
    fill(daySection[0] + 5, daySection[1], daySection[2]);
  }

  if (daySection == night) {
    fill(235, 100, 30);
  }
  // Minute Ring Background
  circle(width / 2, ringHeight, width - 30);
  
  // Time Ring Variables
  angleMode(DEGREES);
  let hourDeg = map(obj.hours, 0, 23, 0, 690); // Two Rotations in 24 hrs.
  let numeral = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
  let minDeg = map(obj.minutes, 0, 59, -66, 66);
  let secDeg = map(obj.millis, 0, 999, 0, 2.2);
  let lastSec = map(obj.millis, 0, 999, 0, 30);
  let overlap = map(obj.millis, 0, 999, 0, 15);
  let negOverlap = map(obj.millis, 0, 999, 15, 0);
  // Time Ring Alarm Variables
  let alarmFadeIn = map(obj.millis, 0, 999, 0, 200);
  let alarmFadeOut = map(obj.millis, 0, 999, 200, 0);
  let alarmSpin = map(obj.millis, 0, 999, 0, 360);
  
  //HOUR RING
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
    rotate(hourDeg); // Rotation for top of circle ('Current Hour')
    fill(255);
    textSize(100);
    textStyle(BOLD);
    textAlign(CENTER);

    for (i = 0; i < 12; i ++) {
      if (i == (obj.hours % 12)) { // Numeral Ring Setup
        // fill((daySection == night) ? 255 : 0);
        fill(255);
      } else {
        // fill((daySection == night) ? night : dayColor);
        fill(daySection);
      }
      if (alarm == 0) { // Alarm Colour Pulse
        if (obj.millis < 499) {
          fill(daySection[0], alarmFadeIn, 100);
        } else {
          fill(daySection[0], alarmFadeOut, 100);
        }
      }
      text(numeral[i], 0, -505);
      rotate(-30);
    }
  pop();

  // MINUTE RING
  push();
    translate(width / 2, ringHeight);
    if (alarm == 0) {
      rotate(alarmSpin);
    } else {
      if (obj.seconds == 59){
        rotate(secDeg); // Smooth Minute Transition
      }
    }
    rotate(minDeg);
    rectMode(CENTER);
    colorMode(HSB);
    
    for (n = 0; n < obj.minutes; n ++) { // Minute Rectangles
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
  let scapeDegSec = map(obj.seconds, 0, 59, 6, 0); // Landscape Rotation
  let scapeDegMin = map(obj.minutes, 0, 59, 359, 0);
  let cityY = -265; //Y Pos of Buildings
  let nightShade = false; // Nighttime?
  if (daySection == night) {
    nightShade = true;
  }

  // Minute Alarm Action Variables
  let alarmSpin2 = map(obj.millis, 0, 999, 180, 0);
  if (obj.seconds %2 == 1) {
    alarmSpin2 = map(obj.millis, 0, 999, 360, 180);
  }
  push();
    translate(width / 2, ringHeight);
    rectMode(CENTER);
    if (alarm == 0) {
      rotate(alarmSpin2);
    } else {
      rotate(scapeDegSec + scapeDegMin);
    }
    rotate(130); // Place around circle

    // Function Format(rotation, x, y, height, width, shade, night?)
    draw_Hill(0, 0, -240, 170, 250, 0, nightShade);
    draw_Mountain(60, -250, 20, 20, -40, nightShade);
    draw_Mountain(-20, -250, 0, 0, 0, nightShade);
    draw_Hill(-20, 0, -230, 170, 250, -10, nightShade);
    draw_Hill(90, 0, -240, 170, 250, 0, nightShade);
    draw_Hill(-20, 0, -230, 160, 170, -10, nightShade);
    draw_Mountain(-20, -250, 20, 20, 30, nightShade);
  pop();
  
  rectMode(CORNER);
  // Function Format(x, y, -height, width, shade)  //Negative to reduce Changes || Multiples of 10 Only
  draw_Buildings(-5, cityY, -70, 40, 100);
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

  // EARTH RING (Innermost Ring)
  colorMode(HSB);
  fill(daySection[0] - 40, daySection[1], daySection[2] - 70);
  circle(width / 2, ringHeight, width - 400);

  // ROAD SHAPES
  colorMode(RGB);
  fill(70, 70, 70);
  rect(0, 390, width, 225);
  fill(50, 50, 50);
  rect(0, 400, width, 75);

  //ROAD LINES
  stroke(210);
  strokeWeight(2);
  let linePace = map(obj.millis, 0, 999, width / 5, 0);
  let alarmLinePace = map(obj.millis, 0, 999, width + (width / 5), 0);
  if (alarm == 0) { // Alarm (Fast) White Road Lines
    linePace = alarmLinePace;
    for (i = 0; i < 6; i ++) {
      line(linePace + width / 5 * i, 440, linePace + 70 + width / 5 * i, 440);
      line(linePace - width / 5 * i, 440, linePace + 70 - width / 5 * i, 440);
    }
  } else { // Regualar White Road Lines
    for (i = 0; i < 5; i ++) {
      line(linePace + width / 5 * i, 440, linePace + 70 + width / 5 * i, 440);
      line(linePace - width / 5 * i, 440, linePace + 70 - width / 5 * i, 440);
    }
  }
  stroke(179, 179, 0);
  line(0, 446, width, 446); // Yellow Center Line

  // CAR SETUP
  let bounce = map(obj.millis, 0, 999, 1, 800);
  let phase = sin(bounce);
  let alarmSpeed = map(obj.millis, 0, 999, 0, 249);
  if (alarm > 0 && alarm <= 1) {
    draw_Car(50 + alarmSpeed, 230 + phase, phase, carColor);
  } else if (alarm == 0) {
    draw_Car(50 + 250, 230 + phase, phase, carColor);
  } else {
    draw_Car(50, 230 + phase, phase, carColor);
  }

  //MARKER POSTS
  let markerPace = map(obj.millis, 0, 999, width / 2, 0);
  let alarmMarkerPace = map(obj.millis, 0, 999, width, 0);
  let markerWidth = width / 2;
  if (alarm == 0) {
    markerPace = alarmMarkerPace;
    markerWidth = width;
  }
  noStroke();
  fill(102, 34, 0);
  rect(markerWidth + markerPace, 410, 5, 75); // Marker Poles
  rect(markerPace, 410, 5, 75);
  
  angleMode(RADIANS);
  fill(90, 0, 30);
  arc(markerWidth + markerPace + 4, 396, 38, 64, 0, 2.4 + 0.7, CHORD); // Marker Signs
  arc(markerPace + 4, 396, 38, 64, 0, 2.4 + 0.7, CHORD);
  fill(140, 0, 0);
  arc(markerWidth + markerPace + 2, 396, 36, 64, 0, 2.4 + 0.7, CHORD);
  arc(markerPace + 2, 396, 36, 64, 0, 2.4 + 0.7, CHORD);
  
  textSize(20); // Marker Text Numbers
  textFont('Helvetica');
  textAlign(CENTER);
  fill(255);
  text(obj.seconds, markerWidth + markerPace + 2, 418);
  if (obj.seconds == 0) {
    text(59, markerPace, 418);
  } else {
    text(obj.seconds - 1, markerPace, 418);
  }
  
  // ALARM OVERLAY
  let opacity = map(obj.millis, 0, 999, 0, 2.55);
  let flare = sin(opacity);
  if (alarm > 0 && alarm < 1) {
    fill(255, 255, 255, flare * 255);
    rect(0, 0, width, height);
  }

}

// Draw Car Function
function draw_Car(x, y, phase, carColor) {

  // Car Shadow
  noStroke();
  fill(0);
  ellipse(x + 135, y + 195 - phase, 280, 20);

  // Alarm
  angleMode(RADIANS);
  let sirenSpinSpan = map(obj.millis, 0, 999, 0, 10);
  let sirenSpin = sin(sirenSpinSpan);
  let span = map(obj.millis, 0, 999, 20, 80);
  let span2 = map(obj.millis, 0, 999, 50, 60);
  let pulse = sin(span);
  let pulse2 = sin(span2);
  if (obj.seconds_until_alarm == 0) {
    fill(255, 30, 80);
    rect(x + 150, y + 114, 12, 12, 2); // Siren Beacon
    fill(255, 220, 220);
    rect(x + 155 + sirenSpin * 3, y + 114, 2, 12, 2);
    fill(255, 30, 80, 100);
    arc(x + 155, y + 122, pulse * 100, pulse * 100, PI, 0); // Pulsing Lights
    arc(x + 155, y + 122, pulse2 * 100, pulse2 * 100, PI, 0);
  }

  // Window Detailing
  angleMode(DEGREES);
  fill(255, 100);
  quad(x + 80, y + 150, x + 215, y + 150, x + 185, y + 124, x + 100, y + 125);
  noStroke();
  fill(180);
  rect(x + 146, y + 125, 2, 25);
  rect(x + 100, y + 125, 2, 25);
  fill(carColor);
  quad(x + 185, y + 123, x + 180, y + 123, x + 210, y + 150, x + 215, y + 150);

  // Wheels
  fill(30);
  circle(x + 62, y + 180 - phase, 35);
  circle(x + 242, y + 180 - phase, 35);
  fill(0)
  circle(x + 62, y + 180 - phase, 30);
  circle(x + 242, y + 180 - phase, 30);
  fill(240);
  circle(x + 62, y + 180 - phase, 20);
  circle(x + 242, y + 180 - phase, 20);

  //Car Body
  fill(carColor);
  stroke(180);
  strokeWeight(1);
  let pointX = [270, 289, 291, 289, 291, 285, 205, 44, -10, -15, -10, 40, 43, 45, 44, 50, 75, 80, 78, 80, 82, 220, 222, 224, 222, 230, 255, 260, 260, 262, 270];
  let pointY = [175, 175, 165, 165, 158, 149, 148, 150, 160, 175, 182, 183, 190, 190, 175, 168, 168, 175, 190, 188, 180, 180, 188, 190, 175, 168, 168, 175, 180, 180, 175];
  
  // Lower Body Section
  beginShape();
    for (i = 0; i < pointX.length; i ++) {
      vertex(pointX[i] + x, pointY[i] + y);
    }
  endShape(CLOSE);

  // Top Section
  beginShape();
    curveVertex(x + 100, y + 150); // Roof
    curveVertex(x + 90, y + 150);
    curveVertex(x + 120, y + 130);
    vertex(x + 180, y + 125);
    vertex(x + 180, y + 125);
    curveVertex(x + 185, y + 123);
    curveVertex(x + 90, y + 125);
    curveVertex(x + 44, y + 150);//BootArea
    curveVertex(x + 44, y + 150);//BootArea
  endShape();

  //BodyWork Detailing
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

  // Lights
  if (obj.hours < 5 || obj.hours > 20) { // Nighttime?
    fill(255, 240, 180, 100);
    beginShape();
      curveVertex(x + 284, y + 158);
      vertex(x + 284, y + 166);
      vertex(x + 500, y + 210);
      vertex(x + 900, y + 210);
      vertex(x + 900, y + 100);
    endShape(CLOSE);
  }
  fill(200);
  stroke(240);
  // Front Light Detailing
  beginShape();
    vertex(x + 289, y + 175);
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