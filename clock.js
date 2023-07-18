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
  constructor(xCenter, yCenter, innerRadius, outerRadius, teethCount, teethTopWidth, teethBotWidth, teethHeight, angle=0, detailDepth=120) {
    /* 
     * Co-ords and rotation of the gear.
     * The angle property is in degrees to make my life easier, 
     * however, calculations will be done in radians.
     */
    this.xCenter = xCenter; 
    this.yCenter = yCenter;
    this.angle = angle;

    /* 
     * Inner and outer radii.
     */
    this.innerRadius = innerRadius;
    this.outerRadius = outerRadius;
  
    /*
     * Generates some number of teeth and pushes them into an array.
     * Because each tooth is stored in an array, a simple mapping from its position in
     * the array to each second in a minute is made. 
     */
    this.teeth = [];
    for (let i=0; i<teethCount; i++) {
      this.teeth.push(
        new SecondsTooth(xCenter, yCenter, teethTopWidth, teethBotWidth, teethHeight)
      );
    }

    /*
     * Radian equivalent of 360 / detailDepth.
     * This number / frameRate should yield the amount needed to rotate the gear every second.
     */
    this.rotationIncrement = 2 * Math.PI / detailDepth; 

    /* 
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

    /*
     * This will rotate all the points around the origin (0, 0).
     * There is a variation of this mathmatical equation that uses the rotation of any given point,
     * however, with the way the rotate(...) function works in p5.js, it is much easier to just 
     * translate the origin to where I need it to be.
     */
    for (let i=0; i<detailDepth; i++) {
      tempX = -Math.sin(i * this.rotationIncrement) * radius;
      tempY = +Math.cos(i * this.rotationIncrement) * radius;
      points.push([tempX, tempY]);
    }

    return points;
  }

  /** Draw method for gear. */
  draw(fillColor) {
    /* 
     * Section regarding teeth drawing. 
     */
    push();
    translate(this.xCenter, this.yCenter);
    for (let t of this.teeth) {
      rotate(2 * Math.PI / this.teeth.length);
      t.draw(fillColor, -this.outerRadius);
    }
    pop();

    /* 
     * Section regarding gear drawing. 
     */
    push();

    // Set up
    translate(this.xCenter, this.yCenter);
    rotate(this.angle * Math.PI / 180);
    noStroke();
    fill(fillColor);

    beginShape();

    // Outline
    for (let op of this.outerRadiusPoints) vertex(op[0], op[1]); 

    // Hollow
    beginContour();
    for (let ip of this.innerRadiusPoints) vertex(-ip[0], ip[1]); 
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
  /** Constructor. */
  constructor(xCenter, yCenter, topWidth, botWidth, height) {
    this.xCenter = xCenter;
    this.yCenter = yCenter;

    /**
     * Points are arranged as follows:
     *          0        1
     *            (x, y)
     *      3                2
     */
    this.points = [
      [ - topWidth/2,  - height/2],
      [ + topWidth/2,  - height/2],
      [ + botWidth/2,  + height/2],
      [ - botWidth/2,  + height/2],
    ];
  }

  /** Draw methof for gear tooth. */
  draw(fillColor, yOffset=0) {
    push();

    /** Set up */
    noStroke(); 
    fill(fillColor);

    beginShape();
    for (let p of this.points) vertex(p[0], p[1] + yOffset); // Drawing the tooth.
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










const WIDTH = 960;
const HEIGHT = 500;



let test = new SecondsGear(WIDTH/2, HEIGHT/2, 165, 195, 60, 10, 25, 20);

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


  test.draw([132, 42, 44], 200);
}
