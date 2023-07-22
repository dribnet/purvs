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

  let ringHeight = 600;
  let sunrise = [230, 180, 50];
  let dayColor = [180, 230, 230];
  let night = [0, 0, 50];
  let timeOfDay = "sunrise";
  let daySection = sunrise;

  if (obj.hours >= 5  && obj.hours < 9 || obj.hours >= 17 && obj.hours < 21) {
    daySection = sunrise;
  } else if (obj.hours >= 9 && obj.hours < 17) {
    daySection = dayColor;
  } else {
    daySection = night;
  }

  background(50); //  beige
  noStroke();
  // Outer Rings
  fill(daySection[0] + 150, daySection[1] - 115, daySection[2]);
  circle(width / 2, ringHeight, width + 500);
  fill(daySection[0] - 50, daySection[1] - 100, daySection[2] + 40);
  circle(width / 2, ringHeight, width + 260);
  fill(daySection[0] - 50, daySection[1] - 50, daySection[2]);
  circle(width / 2, ringHeight, width);
  // Inner Ring
  if (obj.hours >= 5  && obj.hours < 9 || obj.hours >= 17 && obj.hours < 21) {
    fill(sunrise);
    timeOfDay = "sunrise";
  } else if (obj.hours >= 9 && obj.hours < 17) {
    fill(dayColor);
    timeOfDay = "dayColor";
  } else {
    fill(night);
    timeOfDay = "night";
  }
  circle(width / 2, ringHeight, width - 30);
  // Earth Ring
  fill(100, 100, 100);
  circle(width / 2, ringHeight, width - 400);
  
  //Roman Numeral / Hour Ring
  angleMode(DEGREES);
  let hourDeg = map(obj.hours, 0, 23, 0, 690);
  let numeral = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
  let minDeg = map(obj.minutes, 0, 59, 0, 126);
  //Hour Ring
  push();
    translate(width / 2, ringHeight);
    rotate(hourDeg);
    fill(255);
    textSize(85);
    textStyle(NORMAL);
    textAlign(CENTER);
    for (i = 1; i < 13; i ++) {
      rotate(30);
      text(numeral[numeral.length - i], 0, -510);
    }
    //rect(400, 100, 100, 100);
  pop();
  // Minute Ring
  push();
    translate(width / 2, ringHeight);
    rotate(minDeg - 63);
    fill(0);
    textSize(12);
    // textAlign(CENTER);
    text(obj.minutes, 0, -300);
    rectMode(CENTER);
    for (n = 0; n < obj.minutes; n ++) {
      rotate(-2.5);
      if (timeOfDay == "sunrise") {
        fill(255 - (n + 5), 230, 50, 255 - n * 10);
      } else if (timeOfDay == "dayColor") {
        fill(160 - n, 220, 230 + (n - 5), 255 - n * 10);
      } else {
        fill(0 + n, 10, 80 + (n * 5), 255 - n * 10);
      }
      rect(0, -372, 20, 185);
    }
    // rect(0, -380, 10, 200);
  pop();

  // Road Shapes
  fill(70, 70, 70);
  rect(0, 390, width, 225);
  fill(50, 50, 50);
  rect(0, 400, width, 75);

  //Time Placeholders
  textSize(30);
  fill(255);
  text(obj.hours + " : " +  obj.minutes + " : " + obj.seconds, 20, 30);

  //Car Placeholder
  let bounce = obj.millis;
  let phase = sin(bounce);
  // let y_bounce1 = map(phase1, -1, 1, -1, 1);
  draw_Car(40, 230 + phase, phase, carColor);

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
  fill(153, 0, 0);
  arc(width / 2 + markerPace, 400, 35, 60, 0, 2.4 + 0.7, CHORD);
  arc(markerPace, 400, 35, 60, 0, 2.4 + 0.7, CHORD);
  
  textSize(20);
  textFont('Helvetica');
  textAlign(CENTER);
  fill(255);
  text(obj.seconds, width / 2 + markerPace, 418);
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


  // background(50); //  beige
  // fill(200); // dark grey
  // textSize(40);
  // textAlign(CENTER, CENTER);
  // text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);


  // fill(249, 140, 255);// pink
  // ellipse(width / 3, 350, 150);
  // fill(140, 255, 251) // blue
  // ellipse(width / 2, 350, 150);
  // fill(175, 133, 255); // purple
  // ellipse(width / 3 * 2, 350, 150);