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
 
  // loads variables for AM/PM text
  let centerText = "PM";
  let hours = obj.hours;
  
  // loads variables for background change
  let alarmTime = obj.seconds_until_alarm;
  let BGcolour = color("#1F3864");

  // background will change when alarm hits zero
  if (alarmTime == 0) {
    BGcolour = color('#833C0B');
  }
  
  background(BGcolour); // changes when alarm hit zero
  fill("white");
  strokeWeight(0); // this makes text appear thinner

  // displays AM or PM depending on time
  if (hours < 12) {
    centerText = "AM";
  }

  else {
    centerText = "PM";
  }
  
  // creates AM/PM text
  textSize(25);
  textAlign(CENTER, CENTER);
  text(centerText, width / 2, height / 2);

  // loads all rings into scene
  AlarmRing();
  HourRing1();
  HourRing2();
  MinRing();
  SecRing();
}

function AlarmRing() {
  // determines size parameters for Alarm ring
  const ringX = width / 2;
  const ringY = height / 2;

  // parameters for alarm ring movement
  let alarmTime = obj.seconds_until_alarm;
  let alarmCountDown = map(alarmTime, 0, 31, PI*1.499999, -1.78);
  let alarmRingVisible = 9;
  let ringColor = color('#B4C6E7');
  
  // changes ring colour when alarm hits zero
  if (alarmTime == 0) {
    ringColor = color('#F7CBAC');
  }

  // disables alarm ring when it is not used
  if (alarmTime < 0) {
    alarmRingVisible = 0;
  }

  // renders alarm ring
  stroke(ringColor);
  strokeWeight(alarmRingVisible);
  noFill();
  arc(ringX, ringY, 250, 250, PI*1.5, alarmCountDown);
}

function HourRing1() {
  // Controls size and location for ring
  const diameter = 250;
  const ringX = width / 2;
  const ringY = height / 2;

  // Define styles of our geometry (circle)
  stroke('white');
  strokeWeight(0);
  noFill();

  // Create the circle
  circle(width / 2, height / 2, diameter);

  // Create a circle with points evenly spaced out to each hour
  let angle = 0;
  let pointCount = 12;
  for(let i = angle; i < radians(360 + angle) ; i += radians(360 / pointCount) ) {
      let x = diameter / 2 * Math.cos(i) + ringX;
      let y = diameter / 2 * Math.sin(i) + ringY;
      stroke('white');
      strokeWeight(4);
      point(x, y);
  }

}

function HourRing2() {
  // Controls size and location for ring
  const diameter = 250;
  const ringX = width / 2;
  const ringY = height / 2;
  
  // Declares time varibles revelant to (h) ring
  let hours = obj.hours;
  let mins = obj.minutes;
  let hoursFract = hours + (mins/60); //smooths out movement of point

  //Map function allows timed movement around ring (PI*x controls speed)
  let pointLoc1 = map(hoursFract,0,24,0,PI*4);

  // Define styles of our geometry (circle)
  stroke('white');
  strokeWeight(0);
  noFill();
    
  // Create the circle
  circle(ringX, ringY, diameter);
  
  // Determines location for each point, the offset of (PI*1.5) places points at top of circle
  let angle1 = pointLoc1+(PI*1.5);

  //point1
  let point1x = diameter / 2 * Math.cos(angle1) + ringX;
  let point1y = diameter / 2 * Math.sin(angle1) + ringY;
  strokeWeight(25);
  point(point1x, point1y);
}

function MinRing() {
  // Controls size and location for ring
  const diameter = 162.5;
  const ringX = width / 2;
  const ringY = height / 2;
  
  // Declares time varibles revelant to (m) ring
  let seconds = obj.seconds;
  let mins = obj.minutes;
  let minFract = mins + (seconds/60); //smooths out movement of point

  //Map function allows timed movement around ring (PI*x controls speed)
  let pointLoc1 = map(minFract,0,60,0,PI*2);
  let pointLoc2 = map(minFract,0,60,0,PI*4);
  let pointLoc3 = map(minFract,0,60,0,PI*6);
  let pointLoc4 = map(minFract,0,60,0,PI*12);

  // Define styles of our geometry (circle)
  stroke('white');
  strokeWeight(0);
  noFill();
    
  // Create the circle
  circle(ringX, ringY, diameter);
  
  // Determines location for each point, the offset of (PI*1.5) places points at top of circle
  let angle1 = pointLoc1+(PI*1.5);
  let angle2 = pointLoc2+(PI*1.5);
  let angle3 = pointLoc3+(PI*1.5);
  let angle4 = pointLoc4+(PI*1.5);

  //point1
  let point1x = diameter / 2 * Math.cos(angle1) + ringX;
  let point1y = diameter / 2 * Math.sin(angle1) + ringY;
  stroke('white');
  strokeWeight(12);
  point(point1x, point1y);

  //point2
  let point2x = diameter / 2 * Math.cos(angle2) + ringX;
  let point2y = diameter / 2 * Math.sin(angle2) + ringY;
  point(point2x, point2y);

  //point3
  let point3x = diameter / 2 * Math.cos(angle3) + ringX;
  let point3y = diameter / 2 * Math.sin(angle3) + ringY;
  point(point3x, point3y);

  //point4
  let point4x = diameter / 2 * Math.cos(angle4) + ringX;
  let point4y = diameter / 2 * Math.sin(angle4) + ringY;
  point(point4x, point4y);
}

function SecRing() {
   // Controls size and location for ring
  const diameter = 75;
  const ringX = width / 2;
  const ringY = height / 2;
  
  // Declares time varibles revelant to (s) ring
  let millis = obj.millis;
  let seconds = obj.seconds;
  let secFract = seconds + (millis/1000);

  //Map function allows timed movement around ring
  let pointLoc1 = map(secFract,0,60,0,PI*30);
  let pointLoc2 = map(secFract,0,60,0,PI*20);
  let pointLoc3 = map(secFract,0,60,0,PI*12);
  let pointLoc4 = map(secFract,0,60,0,PI*10);
  let pointLoc5 = map(secFract,0,60,0,PI*6);
  let pointLoc6 = map(secFract,0,60,0,PI*4);

  // Define styles of our geometry (circle)
  stroke('white');
  strokeWeight(0);
  noFill();
    
  // Create the circle
  circle(ringX, ringY, diameter);
  
  // Determines location for each point, the offset of (PI*1.5) places points at top of circle
  let angle1 = pointLoc1+(PI*1.5);
  let angle2 = pointLoc2+(PI*1.5);
  let angle3 = pointLoc3+(PI*1.5);
  let angle4 = pointLoc4+(PI*1.5);
  let angle5 = pointLoc5+(PI*1.5);
  let angle6 = pointLoc6+(PI*1.5);

  //point1
  let point1x = diameter / 2 * Math.cos(angle1) + ringX;
  let point1y = diameter / 2 * Math.sin(angle1) + ringY;
  stroke('white');
  strokeWeight(12);
  point(point1x, point1y);

  //point2
  let point2x = diameter / 2 * Math.cos(angle2) + ringX;
  let point2y = diameter / 2 * Math.sin(angle2) + ringY;
  point(point2x, point2y);

  //point3
  let point3x = diameter / 2 * Math.cos(angle3) + ringX;
  let point3y = diameter / 2 * Math.sin(angle3) + ringY;
  point(point3x, point3y);

  //point4
  let point4x = diameter / 2 * Math.cos(angle4) + ringX;
  let point4y = diameter / 2 * Math.sin(angle4) + ringY;
  point(point4x, point4y);

  //point5
  let point5x = diameter / 2 * Math.cos(angle5) + ringX;
  let point5y = diameter / 2 * Math.sin(angle5) + ringY;
  point(point5x, point5y);

  //point6
  let point6x = diameter / 2 * Math.cos(angle6) + ringX;
  let point6y = diameter / 2 * Math.sin(angle6) + ringY;
  point(point6x, point6y);
}