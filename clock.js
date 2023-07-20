/**
 * I am an object oriented programmer.
 * It is one of my least favourite illnesses.
 */


/**
 * Seconds in this clock is defined by a gear that rotates.
 * Each time a tooth passes some pointer, one secound will have passed.
 */
class SecondsGear {
  /** Constructor. */
  constructor(xCenter, yCenter, innerRadius, outerRadius, teethCount, teethTopWidth, teethBotWidth, teethHeight, initialAngle=0, angle=0, detailDepth=120) {
    /* 
     * Co-ords and rotation of the gear.
     * The angle property is in degrees to make my life easier, 
     * however, calculations will be done in radians.
     */
    this.xCenter = xCenter; 
    this.yCenter = yCenter;
    this.angle = angle;
    this.initialAngle = initialAngle;

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
      tempX = - Math.sin(i * this.rotationIncrement) * radius;
      tempY = + Math.cos(i * this.rotationIncrement) * radius;
      points.push([tempX, tempY]);
    }

    return points;
  }

  /** Draw method for gear. */
  draw(fillColor, highlight=-1, highlightColor=255) {
    /* 
     * Section regarding teeth drawing. 
     */
    push();
    translate(this.xCenter, this.yCenter);
    rotate((this.initialAngle + this.angle) * Math.PI / 180); // Sets the rotation of the entire gear

    for (let t of this.teeth) {
      rotate(2 * Math.PI / this.teeth.length); // Only rotates to draw each tooth circularly
      if (highlight > -1) t.draw( (t === this.teeth[highlight]) ? highlightColor : fillColor, -this.outerRadius);
      else t.draw(fillColor, -this.outerRadius);
    }
    pop();

    /* 
     * Section regarding gear drawing. 
     */
    push();

    // Set up
    translate(this.xCenter, this.yCenter);
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

  /** Draw method for gear tooth. */
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


class SecondPointer {
  constructor() {

  }
}




/** TO DO:
 * - make Pointer
 * - make MinutesDisplay
 * - make HoursDisplay
 * - make AMPMDisplay
 */




let kill = false;
function stop() {
  kill = true;
}



/*
 * Canvas constants.
 */
const WIDTH = 960;
const HEIGHT = 500;
const BACKGROUND_COL = [40, 17, 23];


/* 
 * Seconds.
 */

const INNER_RADIUS = 165;
const OUTER_RADUIS = 195;
const TEETH_COUNT = 60;
const TEETH_TOP_WIDTH = 10;
const TEETH_BOT_WIDTH = 25;
const TEETH_HEIGHT = 20;
const INITIAL_ANGLE = 90;


const SECONDS1_COL = [30, 30, 30];
const SECONDS2_COL = [132, 42, 44];

const sec1 = new SecondsGear(
  0, HEIGHT/2, 
  1.75 * INNER_RADIUS, 1.75 * OUTER_RADUIS, 
  TEETH_COUNT, 1.75 * TEETH_TOP_WIDTH, 1.75 * TEETH_BOT_WIDTH, 1.75 * TEETH_HEIGHT, 
  INITIAL_ANGLE
);

const sec2 = new SecondsGear(
  WIDTH/2, HEIGHT/2, 
  INNER_RADIUS, OUTER_RADUIS, 
  TEETH_COUNT, TEETH_TOP_WIDTH, TEETH_BOT_WIDTH, TEETH_HEIGHT, 
  INITIAL_ANGLE
);



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
  background(BACKGROUND_COL); 


  sec1.angle = - map(obj.seconds + (obj.millis / 1000), 0, 59, 6, 360);
  sec2.angle = map(obj.seconds + (obj.millis / 1000), 0, 59, -6, 348);

  sec1.draw(SECONDS1_COL);
  sec2.draw(SECONDS2_COL);
  

  
  //console.log(obj.seconds + (obj.millis /1000));

  



  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(WIDTH/2, HEIGHT/2, 3, 450);
  rect(WIDTH/2, HEIGHT/2, 900, 3);

  if (kill) {
    throw "Program manually terminated";
  }
}


