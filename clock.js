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
  background(3); //  beige
  fill(200); // dark grey

  MinRing()
  SecRing()
}

function MinRing() {
  // Controls diameter size for ring
  let diameter = 150
  
  // Declares time varibles revelant to (m) ring
  let millis = obj.millis
  let seconds = obj.seconds
  let mins = obj.minutes
  let minFract = mins + (seconds/60 + (millis/1000)) //smooths out movement of point

  //Map function allows timed movement around ring
  let pointLoc1 = map(minFract,0,60,0,PI*120)

  // Define styles of our geometry (circle)
  stroke('white')
  strokeWeight(0)
  noFill()
    
  // Create the circle
  circle(width / 2, height / 2, diameter)
  
  // Determines location for each point, the offset of (PI*1.5) places points at top of circle
  let angle1 = pointLoc1+(PI*1.5)

  //point1
  let point1x = diameter / 2 * Math.cos(angle1) + width / 2;
  let point1y = diameter / 2 * Math.sin(angle1) + height / 2;
  stroke('white')
  strokeWeight(12)
  point(point1x, point1y)

}

function SecRing() {
  // Controls diameter size for ring
  let diameter = 75
  
  // Declares time varibles revelant to (s) ring
  let millis = obj.millis
  let seconds = obj.seconds
  let secFract = seconds + (millis/1000)

  //Map function allows timed movement around ring
  let pointLoc1 = map(secFract,0,60,0,PI*30)
  let pointLoc2 = map(secFract,0,60,0,PI*20)
  let pointLoc3 = map(secFract,0,60,0,PI*12)
  let pointLoc4 = map(secFract,0,60,0,PI*10)
  let pointLoc5 = map(secFract,0,60,0,PI*6)
  let pointLoc6 = map(secFract,0,60,0,PI*4)

  // Define styles of our geometry (circle)
  stroke('white')
  strokeWeight(0)
  noFill()
    
  // Create the circle
  circle(width / 2, height / 2, diameter)
  
  // Determines location for each point, the offset of (PI*1.5) places points at top of circle
  let angle1 = pointLoc1+(PI*1.5)
  let angle2 = pointLoc2+(PI*1.5)
  let angle3 = pointLoc3+(PI*1.5)
  let angle4 = pointLoc4+(PI*1.5)
  let angle5 = pointLoc5+(PI*1.5)
  let angle6 = pointLoc6+(PI*1.5)

  //point1
  let point1x = diameter / 2 * Math.cos(angle1) + width / 2;
  let point1y = diameter / 2 * Math.sin(angle1) + height / 2;
  stroke('white')
  strokeWeight(12)
  point(point1x, point1y)

  //point2
  let point2x = diameter / 2 * Math.cos(angle2) + width / 2;
  let point2y = diameter / 2 * Math.sin(angle2) + height / 2;
  point(point2x, point2y)

  //point3
  let point3x = diameter / 2 * Math.cos(angle3) + width / 2;
  let point3y = diameter / 2 * Math.sin(angle3) + height / 2;
  point(point3x, point3y)

  //point4
  let point4x = diameter / 2 * Math.cos(angle4) + width / 2;
  let point4y = diameter / 2 * Math.sin(angle4) + height / 2;
  point(point4x, point4y)

  //point5
  let point5x = diameter / 2 * Math.cos(angle5) + width / 2;
  let point5y = diameter / 2 * Math.sin(angle5) + height / 2;
  point(point5x, point5y)

  //point6
  let point6x = diameter / 2 * Math.cos(angle6) + width / 2;
  let point6y = diameter / 2 * Math.sin(angle6) + height / 2;
  point(point6x, point6y)
}
