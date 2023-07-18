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
     * Radian equivalent of 360 / detailDepth.
     * This number / frameRate should yield the amount needed to rotate the gear every second.
     */
    this.rotationIncrement = 2 * Math.PI / detailDepth; 

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

    /**
     * This will rotate all the points around the origin (0, 0).
     * There is a variation of this mathmatical equation that uses the rotation of any given point,
     * however, with the way the rotate(...) function works in p5.js, it is much easier to just 
     * translate the origin to where I need it to be.
     */
    for (let i=0; i<detailDepth; i++) {
      tempX = -Math.sin(i * this.rotationIncrement) * radius;
      tempY = Math.cos(i * this.rotationIncrement) * radius;
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

  /** Rotates the gear by some angle theta in degrees. */
  turn(theta) { this._angle = this._angle >= 360 ? 0 : this._angle += theta; }

  /** Manual override of the gear's angle. */
  setAngle(theta) { this.angle = theta; }
}

/**
 * Class that defines the teeth of the SecondsGear class.
 */
class SecondsTooth {
  constructor() {
    
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
