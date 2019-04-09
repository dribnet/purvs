
const colorStroke  = "#233f11";
const colorBody  = "#199cff";
const bugSize = 25;


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  let numBugs = 8;
  let bugSpacing = bugSize;
  let bugs = [];
  let points = [];

  angleMode(DEGREES);
  ellipseMode(CENTER);
  rectMode(CENTER);
  colorMode(HSB);
  curveTightness(-2);

  points.push({x: letterData["point1_x"], y: letterData["point1_y"]});
  points.push({x: letterData["point2_x"], y: letterData["point2_y"]});
  points.push({x: letterData["point3_x"], y: letterData["point3_y"]});
  points.push({x: letterData["point4_x"], y: letterData["point4_y"]});


  // for (let i = 0; i < 3; i++) {
  //   let p1 = points[i % 4];
  //   let p2 = points[(i + 1) % 4];
  //   let p3 = points[(i + 2) % 4];
  //   let p4 = points[(i + 3) % 4];
  //   let steps = numBugs / 4;
  //   for (let j = 0; j <= steps; j++) {
  //     let t = j / steps;
  //     let x = curvePoint(p1.x, p2.x, p3.x, p4.x, t);
  //     let y = curvePoint(p1.y, p2.y, p3.y, p4.y, t);
  //     let nextx = curvePoint(p1.x, p2.x, p3.x, p4.x, t + 0.5);
  //     let nexty = curvePoint(p1.y, p2.y, p3.y, p4.y, t + 0.5);
  //     let vec1 = createVector(0, 1).normalize();
  //     let vec2 = createVector(nextx - x, nexty - y).normalize();
  //     let angle = vec1.angleBetween(vec2);
  //     let col = color(360.0 / 6.0 * (j), 100, 100);
  //     bugs.push(new Bug(x, y, angle, col));
  //   }
  // }

  for (let i = 0; i < numBugs; i++) {
    let t = i/numBugs*3;
    let pos = parametricSpline(points, t);
    let nextPos = parametricSpline(points, t+0.2);
    let vec1 = createVector(0, 1).normalize();
    let vec2 = p5.Vector.sub(nextPos, pos);
    let angle = vec1.angleBetween(vec2.normalize());
    let col = color(360.0 / numBugs * (i), 100, 100);
    bugs.push(new Bug(pos.x, pos.y, angle, col));
  }


    // draw all bugs
    push();
    for (let bug of bugs) {
      bug.draw();
    }
    pop();

    // reset modes for the rest of the applications
    colorMode(RGB);
    angleMode(RADIANS);
    ellipseMode(CENTER);
    rectMode(CORNER);
    colorMode(HSB);

  }


function interpolate_letter(percent, oldObj, newObj) {
  let obj = {};
  // new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  // new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  // new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
    obj["point1_x"] = map(percent, 0, 100, oldObj["point1_x"], newObj["point1_x"]);
    obj["point1_y"] =  map(percent, 0, 100, oldObj["point1_y"], newObj["point1_y"]);
    obj["point2_x"] =  map(percent, 0, 100, oldObj["point2_x"], newObj["point2_x"]);
    obj["point2_y"] = map(percent, 0, 100, oldObj["point2_y"], newObj["point2_y"]);
    obj["point3_x"] = map(percent, 0, 100, oldObj["point3_x"], newObj["point3_x"]);
    obj["point3_y"] =  map(percent, 0, 100, oldObj["point3_y"], newObj["point3_y"]);
    obj["point4_x"] =  map(percent, 0, 100, oldObj["point4_x"], newObj["point4_x"]);
    obj["point4_y"] =  map(percent, 0, 100, oldObj["point4_y"], newObj["point4_y"]);
  return obj;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]

function parametricSpline(points, t){

    let i = floor(t);
    let p1 = points[i % 4];
    let p2 = points[(i + 1) % 4];
    let p3 = points[(i + 2) % 4];
    let p4 = points[(i + 3) % 4];
    t = t%1;
    let x = curvePoint(p1.x, p2.x, p3.x, p4.x, t);
    let y = curvePoint(p1.y, p2.y, p3.y, p4.y, t);
    return createVector(x, y);

}

class Bug {

  constructor(posx, posy, rot, color) {
    this.posX = posx;
    this.posY = posy;
    this.orient = rot;
    this.color = color;

  }

  draw() {
    stroke(0,0,0);
    strokeWeight(2);
    // move and rotate but to correct position
    push();
    translate(this.posX, this.posY);
    rotate(this.orient);
    push();

    // draw the eyes
    fill(255);
    push();
    rotate(13);
    translate(0, -bugSize / 1.8);
    ellipse(0, 0, bugSize / 5.5, bugSize / 5.5);
    pop();
    rotate(-13);
    translate(0, -bugSize / 1.8);
    ellipse(0, 0, bugSize / 5, bugSize / 5);
    pop();

    // draw the body
    fill(colorBody);
    rect(0, 0, bugSize * 0.9, bugSize, bugSize / 3);

    // draw the dots
    fill(this.color);
    push();
    translate(bugSize / 5, bugSize / 4);
    ellipse(0, 0, bugSize / 5, bugSize / 5);
    pop();
    push();
    translate(bugSize / 5, -bugSize / 5);
    ellipse(0, 0, bugSize / 3.8, bugSize / 3.8);
    pop();

    push();
    translate(-bugSize / 5, bugSize / 10);
    ellipse(0, 0, bugSize / 3, bugSize / 3);
    pop();

    // draw legs
    for (let j = -1; j < 2; j += 2) {
      push();
      noFill();
      translate(j * bugSize / 2.2, -bugSize / 2.2);
      for (let i = 0; i < 4; i++) {
        translate(0, bugSize * 0.17);
        beginShape();
        vertex(0, 0);
        vertex(j * bugSize * 0.06, -bugSize * 0.02);
        vertex(j * bugSize * 0.13, bugSize * 0.03);
        endShape();
      }
      pop();
    }

    pop();
  }
}