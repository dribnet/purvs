/**
 * I am an object oriented programmer.
 * It is one of my least favourite illnesses.
 */


/**
 * Seconds in this clock is defined by a gear that rotates.
 * Each time a tooth passes the pointer, one secound will have passed
 */
class SecondsGear {
  /** Constructor. */
  constructor(xCenter, yCenter, innerRadius, outerRadius, teethCount=0, teethSize=0, angle=0, detailDepth=120) {
    /** 
     * Co-ords and rotation of the gear.
     * The angle property is in degrees to make my life easier, 
     * however, calculations will be done in radians.
     */
    this.xCenter = xCenter; 
    this.yCenter = yCenter;
    this.angle = angle;

    /** 
     * Generates two arrays of points, one for the gear and one for the hollow centre.
     * These points are arranged circularly at some resolution.
     */
    this.innerRadiusPoints = this._generatePoints(innerRadius, detailDepth);
    this.outerRadiusPoints = this._generatePoints(outerRadius, detailDepth);

  }

  /** Private method for generate points. */
  _generatePoints(radius, detailDepth) {
    let points = [];
    let tempX;
    let tempY;
    let rotationIncrement = 2 * Math.PI / detailDepth; // radian equivalent of 360 / detailDepth.

    /**
     * This will rotate all the points around the origin (0, 0).
     * There is a variation of this mathmatical equation that uses the rotation of any given point,
     * however, with the way the rotate(...) function works in p5.js, it is much easier to just 
     * translate the origin to where I need it to be.
     */
    for (let i=0; i<detailDepth; i++) {
      tempX = -Math.sin(i * rotationIncrement) * radius;
      tempY = Math.cos(i * rotationIncrement) * radius;
      points.push([tempX, tempY]);
    }

    return points;
  }

  /** Draw method for gear. */
  draw(fillColor) {
    push();

    /** Set up */
    translate(this.xCenter, this.yCenter);
    rotate(this.angle * Math.PI / 180);
    noStroke();
    fill(fillColor);

    
    beginShape();
    for (let op of this.outerRadiusPoints) vertex(op[0], op[1]); // Drawing the main gear.

    beginContour();
    for (let ip of this.innerRadiusPoints) vertex(-ip[0], ip[1]); // Drawing the hollow centre.
    endContour();

    endShape(CLOSE);

    pop();
  }
}

/** TO DO:
 * - make MinutesDisplay
 * - make teeth class
 *   - each tooth needs to be mapped to a number (use an array); this will make setting the alarm way easier
 * - make HoursDisplay
 * - make Pointer
 * - make AMPMDisplay
 */




/** ----------------------------------------------------------------------------------------------------------------------------
 *  ----------------------------------------------------------------------------------------------------------------------------
 *  ------------------------------------------------------ OLD CODE BELOW ------------------------------------------------------  
 *  ----------------------------------------------------------------------------------------------------------------------------
 *  ---------------------------------------------------------------------------------------------------------------------------- */


class _Gear {
  /**
   * Base gear constructor
   * @param {number} x centre coord
   * @param {number} y centre coord
   * @param {number} dist distance fron centre
   * @param {number} num number of points
   * @param {number} arcSize size of the arc
   * @param {number} angle drawn angle
   * @param {number} angleDisplace drawn angle displacement
   * @param {number} teethSize scale size of teeth
   */
  constructor(x, y, dist, num, arcSize, angle=0, angleDisplace=0, teethSize=1.2) {
    this._xCen = x;
    this._yCen = y;
    this._angle = angle;

    this._points = this._createPoints(dist, num, arcSize, angleDisplace, teethSize);
  }

  _createPoints(dist, num, arcSize, angleDisplace, teethSize) {
    let points = [];
    let r = arcSize/num;
    angleDisplace *= Math.PI/180;

    for (let i=0; i<num; i++) {
      let s = 1;
      if (teethSize !== 0) {
        if (i % 4 == 0) s = teethSize;
        if (i % 4 == 1) s = teethSize;
      }

      let nx = -Math.sin(i * r + angleDisplace) * dist * s;
      let ny = Math.cos(i * r + angleDisplace) * dist * s;
      points.push([nx, ny]);
    }

    return points;
  }

  _draw(col, scalar, xoffset, yoffset, _drawFunction) {
    push();
      translate(this._xCen + xoffset, this._yCen + yoffset);
      rotate(this._angle * Math.PI/180);
      scale(scalar);
      noStroke();
      fill(col);
      _drawFunction();
    pop();
  }

  turn(angle) { this._angle = this._angle >= 360 ? 0 : this._angle += angle; }
  anti(angle) { this.turn(-angle); }

  get p() { return this._points; }
  get a() { return this._angle; }
  set a(v) { this._angle = v; }
}


class HollowGear extends _Gear {
  constructor(x, y, dist1, dist2, num1, num2, angle=0, angleDisplace=0, size=1.2) {
    super(x, y, dist1, num1, 2*Math.PI, angle, angleDisplace, size);
    this._circle = this._createPoints(dist2, num2, 2*Math.PI, angleDisplace, 0);
  }

  draw(col, scalar=1, xoffset=0, yoffset=0, core=false) {
    this._draw(col, scalar, xoffset, yoffset, () => {
      beginShape();
      for (let p of this._points) {
        vertex(p[0], p[1]);
      }
  
      beginContour();
      for (let p of this._circle) {
        vertex(-p[0], p[1]);
      }
      endContour();
      endShape(CLOSE);






      if (core) {
        scale(0.9 * scalar);
        beginShape();
        for (let p of this._circle) {
          vertex(p[0], p[1]);
        }
        endShape(CLOSE);
      }
    });
  }
}


/** ----------------------------------------------------------------------------------------------------------------------------
 *  ----------------------------------------------------------------------------------------------------------------------------
 *  ------------------------------------------------------ OLD CODE ABOVE ------------------------------------------------------  
 *  ----------------------------------------------------------------------------------------------------------------------------
 *  ---------------------------------------------------------------------------------------------------------------------------- */


const WIDTH = 960;
const HEIGHT = 500;

const test = new SecondsGear(WIDTH/2, HEIGHT/2, 160, 190);

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
  background([40, 17, 23]); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);


  fill(249, 140, 255);// pink
  ellipse(width / 3, 350, 150);
  fill(140, 255, 251) // blue
  ellipse(width / 2, 350, 150);
  fill(175, 133, 255); // purple
  ellipse(width / 3 * 2, 350, 150);

  test.draw([132, 42, 44]);

}
