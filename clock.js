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

  SecRing()
}

function SecRing() {
  let millis = obj.millis
  let seconds = obj.seconds
  let secFract = seconds + (millis/1000)

  let diameter = 300
  let secRing1 = map(secFract,0,60,0,PI*2)
  let secRing2 = map(secFract,0,60,0,PI*8)
  let secRing3 = map(secFract,0,60,0,PI*30)
  let secRing4 = map(secFract,0,60,0,PI*60)

  // Define styles of our geometry (circle)
  stroke('white')
  strokeWeight(0)
  noFill()
    
  // Create the circle
  circle(width / 2, height / 2, diameter)
  
  // Draw a single point
  let angle1 = secRing1+(PI*1.5)
  let angle2 = secRing2+(PI*1.5)
  let angle3 = secRing3+(PI*1.5)
  let angle4 = secRing4+(PI*1.5)

  //circle1
  let circle1x = diameter / 2 * Math.cos(angle1) + width / 2;
  let circle1y = diameter / 2 * Math.sin(angle1) + height / 2;
  stroke('white')
  strokeWeight(12)
  point(circle1x, circle1y)

  //circle2
  let circle2x = diameter / 2 * Math.cos(angle2) + width / 2;
  let circle2y = diameter / 2 * Math.sin(angle2) + height / 2;
  point(circle2x, circle2y)

  //circle3
  let circle3x = diameter / 2 * Math.cos(angle3) + width / 2;
  let circle3y = diameter / 2 * Math.sin(angle3) + height / 2;
  point(circle3x, circle3y)

  //circle4
  let circle4x = diameter / 2 * Math.cos(angle4) + width / 2;
  let circle4y = diameter / 2 * Math.sin(angle4) + height / 2;
  point(circle4x, circle4y)
}
