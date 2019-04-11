

const colorStroke  = "#233f11";
const colorBody  = "#199cff";
const bugSize = 25;


/**
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

let nextPoints = [];
function drawLetter(letterData) {

  let numBugs = 8;
  let bugSpacing = bugSize;
  let points = [];

  // set the modes
  angleMode(DEGREES);
  ellipseMode(CENTER);
  rectMode(CENTER);
  colorMode(HSB);
  curveTightness(-2);

  // read the letter data into an easier to manage data structure.
  points.push({x: letterData["point1_x"], y: letterData["point1_y"]});
  points.push({x: letterData["point2_x"], y: letterData["point2_y"]});
  points.push({x: letterData["point3_x"], y: letterData["point3_y"]});
  points.push({x: letterData["point4_x"], y: letterData["point4_y"]});
  let offset = letterData["offset"];

  // create a boolean to see if we're moving
  let currentlyMoving = nextPoints.length > 0;
  let nextOffset;
  if (currentlyMoving) {
    nextOffset = nextPoints.pop();
  }


  for (let i = 0; i < numBugs; i++) {
    /** offset calculation */
    let xOffset = map(sin(offset+offset*((i-2)*-6)), -1, 1, -25, 25);
    let yOffset = map(sin(offset+offset*((i+4)*4)), -1, 1, -25, 25);




    /** position calculation */
    let t = i/(numBugs-1)*3;
    let pos = parametricSpline(points, t);
    pos.add(xOffset, yOffset);
    
    /** angle calculation */
    let nextPos;
    if (currentlyMoving){
      let nextOffsetX = map(sin(nextOffset+nextOffset*((i-2)*-6)), -1, 1, -25, 25);
      let nextOffsetY = map(sin(nextOffset+nextOffset*((i+4)*4)), -1, 1, -25, 25);
      // find the next position along this curve
      nextPos = parametricSpline(nextPoints, t);
      nextPos.add(nextOffsetX, nextOffsetY);
    } else {
      nextPos = parametricSpline(points, t + 0.2);
      nextPos.add(xOffset, yOffset);
    }

    // create the vector that represents the direction the bug is currently facing
    let vec1 = createVector(0, 1).normalize();
    // get the direction vector that the bug is supposed to be facing toward
    let vec2 = p5.Vector.sub(nextPos, pos);
    // calculate the angle
    // let angle = vec1.angleBetween(vec2.normalize());
    let angle = vec2.heading() + 90;
    // if (currentlyMoving) angle = -angle;

    /** color calculation */
    let col = color(360.0 / numBugs * (i), 100, 100);
    drawBug(pos.x, pos.y, angle, col);
  }

    // reset modes for the rest of the applications
    colorMode(RGB);
    angleMode(RADIANS);
    ellipseMode(CENTER);
    rectMode(CORNER);

    // save the points for next time
    nextPoints = [];

  }

  /** ================================ Draw Letter Helper Functions ================================ */

  function isEqual(arr1, arr2){
    if (arr1.length != arr2.length) return true;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].x != arr2[i].x) return false;
      if (arr1[i].y != arr2[i].y) return false;
    }

    return true;
  }

function parametricSpline(points, t){

  let i = floor(t);
  let p1 = points[i % 4];
  let p2 = points[(i + 1) % 4];
  let p3 = points[(i + 2) % 4];
  let p4 = points[(i + 3) % 4];
  // extract the numbers after the decimal point
  t = t%1;
  let x = curvePoint(p1.x, p2.x, p3.x, p4.x, t);
  let y = curvePoint(p1.y, p2.y, p3.y, p4.y, t);
  return createVector(x, y);

}



function drawBug(posX, posY, orient, color) {
  stroke(0,0,0);
  strokeWeight(2);
  // move and rotate but to correct position
  push();
  translate(posX, posY);
  rotate(orient);
  push();

  // draw the eyes
  fill(255);
  push();
  rotate(13);
  ellipse(0, -bugSize / 1.8, bugSize / 5.5, bugSize / 5.5);
  pop();
  rotate(-13);
  ellipse(0, -bugSize / 1.8, bugSize / 5, bugSize / 5);
  pop();

  // draw the body
  fill(colorBody);
  rect(0, 0, bugSize * 0.9, bugSize, bugSize / 3);

  // draw the dots
  fill(color);
  ellipse(bugSize / 5, bugSize / 4, bugSize / 5, bugSize / 5);
  ellipse(bugSize / 5, -bugSize / 5, bugSize / 3.8, bugSize / 3.8);
  ellipse(-bugSize / 5, bugSize / 10, bugSize / 3, bugSize / 3);

  // draw legs
  noFill();
  for (let j = -1; j < 2; j += 2) {
    let currentX = j * bugSize / 2.2;
    let currentY = -bugSize / 2.2;
    for (let i = 0; i < 4; i++) {
      currentY += bugSize * 0.17;
      beginShape();
      vertex(currentX, currentY);
      vertex(currentX + j * bugSize * 0.06, currentY + -bugSize * 0.02);
      vertex(currentX + j * bugSize * 0.13, currentY + bugSize * 0.03);
      endShape();
    }
  }

  pop();

}

let scatterpoints = [];




/** ================================ Interpolate Letter Functions ================================ */

function interpolate_letter(percent, oldObj, newObj) {

  // calculate the in-between scatter points using the old and new objects as 'seeds'
  let offset = oldObj["point4_y"] * newObj["point3_x"] + oldObj["point1_y"] * newObj["point2_x"];
  for (let i = 0; i < 4; i++) {
    let xOffset = map(sin(offset * (i+1) + offset *3), -1, 1, 15, 85);
    let yOffset = map(sin(offset * (i+1) + offset*21), -1, 1, 100, 190);
    scatterpoints[i] = createVector(xOffset, yOffset);
  }


  
  // let newPercent = InOutQuadratic(percent/100)*100;
  let newPercent = percent;
  let obj = {};
  obj["point1_x"] = conjoinedInterp(newPercent, oldObj["point1_x"], newObj["point1_x"], scatterpoints[0].x);
  obj["point1_y"] =  conjoinedInterp(newPercent, oldObj["point1_y"], newObj["point1_y"], scatterpoints[0].y);
  obj["point2_x"] =  conjoinedInterp(newPercent, oldObj["point2_x"], newObj["point2_x"], scatterpoints[1].x);
  obj["point2_y"] = conjoinedInterp(newPercent,  oldObj["point2_y"], newObj["point2_y"], scatterpoints[1].y);
  obj["point3_x"] = conjoinedInterp(newPercent,  oldObj["point3_x"], newObj["point3_x"], scatterpoints[2].x);
  obj["point3_y"] =  conjoinedInterp(newPercent,  oldObj["point3_y"], newObj["point3_y"], scatterpoints[2].y);
  obj["point4_x"] =  conjoinedInterp(newPercent,  oldObj["point4_x"], newObj["point4_x"], scatterpoints[3].x);
  obj["point4_y"] =  conjoinedInterp(newPercent,  oldObj["point4_y"], newObj["point4_y"], scatterpoints[3].y);
  // offset for scattering
  obj["offset"] = conjoinedInterp(percent, 0, 0, TWO_PI*2);
  // obj["offset"] = conjoinedInterp(percent, 0, 0, 0);

  /** uncomment to see original sin version talked about in READEME */
  // let offset = oldObj["point4_y"] * newObj["point3_x"] + oldObj["point1_y"] * newObj["point2_x"];
  // obj["offset"] = conjoinedInterp(percent, 0, 0, offset);

  // interpolating
  if (percent > 1 && percent < 100){
    nextPoints = calcPoints(percent + 1, oldObj, newObj);
  } else {
    nextPoints = [];
  }


  return obj;
}

function conjoinedInterp(percent, oldNum, newNum, midNum) {
  if (percent < 51){
    // percent = InOutQuadratic(percent/50) * 50;
    return map(percent, 0, 50, oldNum, midNum);
  } else {
    // percent = InOutQuadratic(percent/100) * 100;
    return map(percent%51, 1, 50, midNum, newNum);
  }
}

function calcPoints(percent, oldObj, newObj){
  let points = [];
  points[0] = createVector(conjoinedInterp( percent, oldObj["point1_x"], newObj["point1_x"], scatterpoints[0].x),
      conjoinedInterp( percent, oldObj["point1_y"], newObj["point1_y"], scatterpoints[0].y));
  points[1] = createVector(conjoinedInterp( percent, oldObj["point2_x"], newObj["point2_x"], scatterpoints[1].x),
      conjoinedInterp( percent,  oldObj["point2_y"], newObj["point2_y"], scatterpoints[1].y));
  points[2] = createVector(conjoinedInterp( percent,  oldObj["point3_x"], newObj["point3_x"], scatterpoints[2].x),
      conjoinedInterp( percent,  oldObj["point3_y"], newObj["point3_y"], scatterpoints[2].y));
  points[3] = createVector(conjoinedInterp( percent, oldObj["point4_x"], newObj["point4_x"], scatterpoints[3].x),
      conjoinedInterp( percent, oldObj["point4_y"], newObj["point4_y"], scatterpoints[3].y));
  points[4] = conjoinedInterp(percent, 0, 0, TWO_PI*2);
  return points;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]

// Smooth animation functions borrowed from Michaelangel007's excellent writeup
// https://github.com/Michaelangel007/easing/blob/master/js/core/easing.js
function InOutQuadratic(p) { var m=p-1,t=p*2; if (t < 1) return p*t; return 1-m*m  *  2; }
function InOutCubic     (p) { var m=p-1,t=p*2; if (t < 1) return p*t*t;           return 1+m*m*m *  4; }
function InOutQuartic   (p) { var m=p-1,t=p*2; if (t < 1) return p*t*t*t;     return 1-m*m*m*m *  8; }

