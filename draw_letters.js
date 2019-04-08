
const colorStroke  = "#233f11";
const colorBody  = "#199cff";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  let numBugs = 12;
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


  for (let i = 0; i < 3; i++) {
    let p1 = points[i % 4];
    let p2 = points[(i + 1) % 4];
    let p3 = points[(i + 2) % 4];
    let p4 = points[(i + 3) % 4];
    let steps = numBugs / 4;
    for (let j = 0; j <= steps; j++) {
      let t = j / steps;
      let x = curvePoint(p1.x, p2.x, p3.x, p4.x, t);
      let y = curvePoint(p1.y, p2.y, p3.y, p4.y, t);
      let nextx = curvePoint(p1.x, p2.x, p3.x, p4.x, t + 0.5);
      let nexty = curvePoint(p1.y, p2.y, p3.y, p4.y, t + 0.5);
      let vec1 = createVector(0, 1).normalize();
      let vec2 = createVector(nextx - x, nexty - y).normalize();
      let angle = vec1.angleBetween(vec2);
      let col = color(360.0 / 6.0 * (j), 100, 100);
      bugs.push(new Bug(x, y, angle, col));
    }
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
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]

class Bug {
  posX;
  posY;
  orient;
  color;

  constructor(posx, posy, rot, color) {
    this.posX = posx;
    this.posY = posy;
    this.orient = rot;
    this.color = color;

  }

  draw() {
    let size = 25;
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
    translate(0, -size / 1.8);
    ellipse(0, 0, size / 5.5, size / 5.5);
    pop();
    rotate(-13);
    translate(0, -size / 1.8);
    ellipse(0, 0, size / 5, size / 5);
    pop();

    // draw the body
    fill(colorBody);
    rect(0, 0, size * 0.9, size, size / 3);

    // draw the dots
    fill(this.color);
    push();
    translate(size / 5, size / 4);
    ellipse(0, 0, size / 5, size / 5);
    pop();
    push();
    translate(size / 5, -size / 5);
    ellipse(0, 0, size / 3.8, size / 3.8);
    pop();

    push();
    translate(-size / 5, size / 10);
    ellipse(0, 0, size / 3, size / 3);
    pop();

    // draw legs
    for (let j = -1; j < 2; j += 2) {
      push();
      noFill();
      translate(j * size / 2.2, -size / 2.2);
      for (let i = 0; i < 4; i++) {
        translate(0, size * 0.17);
        beginShape();
        vertex(0, 0);
        vertex(j * size * 0.06, -size * 0.02);
        vertex(j * size * 0.13, size * 0.03);
        endShape();
      }
      pop();
    }

    pop();
  }
}