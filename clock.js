/**
 * I am an object oriented programmer.
 * It is one of my least favourite illnesses.
 */

/*
 * ===================================== ===================================== *
 * ===================================== ===================================== *
 * ================================= SECONDS ================================= *
 * ===================================== ===================================== *
 * ===================================== ===================================== *
 */ 

/**
 * Seconds in this clock is defined by a gear that rotates.
 * Each time an indicator (tooth) passes some pointer, one unit of time will have passed.
 */
class SecondsDisplay {
  /** Constructor. */
  constructor(xCenter, yCenter, innerRadius, outerRadius, indicatorCount, indicatorTopWidth, indicatorBotWidth, indicatorHeight, initialAngle=0, angle=0, detailDepth=120) {
    /* 
     * Co-ords and rotation of the display.
     * The angle property is in degrees to make my life easier, 
     * however, calculations will be done in radians.
     */
    this.xCenter = xCenter; 
    this.yCenter = yCenter;
    this.angle = angle;
    this.initialAngle = initialAngle;
  
    /*
     * Generates some number of indicators and pushes them into an array.
     * Because each indicator is stored in an array, a simple mapping from its position in
     * the array to each second in a minute is made. 
     */
    this.indicatorss = [];
    for (let i=0; i<indicatorCount; i++) {
      this.indicatorss.push(
        new SecondsIndicator(-outerRadius, indicatorTopWidth, indicatorBotWidth, indicatorHeight)
      );
    }

    /*
     * Controls the rotational spacing of each indicator.
     * Degrees equivalent is 360 / detailDepth.
     */
    this.rotationIncrement = 2 * Math.PI / detailDepth; 

    /* 
     * Generates two arrays of points, one for the display and one for the hollow centre.
     * These points are arranged circularly at some resolution.
     */
    this.innerRadiusPoints = this._generatePoints(innerRadius, detailDepth);
    this.outerRadiusPoints = this._generatePoints(outerRadius, detailDepth);
  }

  /** Draw method for display. */
  draw(fillColor, active=-1, activeColor=255) {
    /* 
     * Section regarding indicator drawing. 
     */
    push();
    translate(this.xCenter, this.yCenter);
    rotate((this.initialAngle + this.angle) * Math.PI / 180); // Sets the rotation of the entire display

    for (let ind of this.indicatorss) {
      if (active > -1) ind.draw( (ind === this.indicatorss[active]) ? activeColor : fillColor);
      else ind.draw(fillColor);

      rotate(2 * Math.PI / this.indicatorss.length); // Only rotates to draw each indicator circularly
    }
    pop();

    /* 
     * Section regarding display drawing. 
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
}

/**
 * Class that defines the teeth (indicators) of the SecondsDisplay class.
 * Each indicator can be thought of as one unit of time.
 */
class SecondsIndicator {
  /** Constructor. */
  constructor(yOffset, topWidth, botWidth, height) {
    /*
     * Since the centre co-ords of the indicator are the same as the display,
     * there is no need to store another pair of centre co-ords. 
     */
    this.yOffset = yOffset;

    /*
     * Points are arranged as follows:
     *         0        1
     *           (x, y)
     *     3                2
     */
    this.points = [
      [ - topWidth/2,  - height/2],
      [ + topWidth/2,  - height/2],
      [ + botWidth/2,  + height/2],
      [ - botWidth/2,  + height/2]
    ];
  }

  /** Draw method for indicator. */
  draw(fillColor) {
    push();
    noStroke(); 
    fill(fillColor);

    /**
     * Since the point of rotation is in the centre of the display
     * and not the centre co-ords of each indicator, it must be offset
     * to make such a rotation possible.
     */
    beginShape();
    for (let p of this.points) vertex(p[0], p[1] + this.yOffset);
    endShape(CLOSE);

    pop();
  }
}

/**
 * Class that defines a point in which an indicator 
 * passing it denotes one unit of time passing.
 */
class SecondsPointer {
  /** Constructor */
  constructor(xCenter, yCenter, width, height, angle=0) {
    /* 
     * Co-ords and rotation of the display.
     */
    this.xCenter = xCenter;
    this.yCenter = yCenter;
    this.angle = angle;

    /**
     * Points are arranged as follows:
     *           1
     *        (x, y)
     *  0                2
     */
    this.points = [
      [ - width / 2, - height / 2],
      [      0     , + height / 2],
      [ + width / 2, - height / 2]
    ];
  }

  /** Draw method for pointer. */
  draw(fillColor, time) {
    push();
    translate(this.xCenter, this.yCenter);
    rotate(this.angle * Math.PI/180);
    textAlign(CENTER, CENTER);

    noStroke(); 
    fill(fillColor);

    beginShape();
    for (let p of this.points) vertex(p[0], p[1]);
    endShape(CLOSE);


    textFont("Courier New", this.points[2][0]); // Uses the pointer width as the size
    text(time, 0, 2 * this.points[0][1]); // Uses negative pointer height as an offset from the pointer

    pop();
  }
}

/*
 * ===================================== ===================================== *
 * ===================================== ===================================== *
 * ================================= MINUTES ================================= *
 * ===================================== ===================================== *
 * ===================================== ===================================== *
 */ 

/**
 * Minutes in this clock is defined by a series of rectangles that change
 * shape and colour depending on the current minute in the hour.
 */
class MinutesDiplay {
  constructor(xCenter, yCenter, indicatorCount, indicatorOffset, indicatorWidth, indicatorHeight, initalAngle=0) {
    this.xCenter = xCenter;
    this.yCenter = yCenter;

    this.initalAngle = initalAngle;

    this.rotationIncrement = 2 * Math.PI / indicatorCount; 

    this.indicators = [];
    for (let i=0; i<indicatorCount; i++) {
      this.indicators.push(
        new MinutesIndicator(indicatorOffset, indicatorWidth, indicatorHeight)
      );
    }
  }

  draw(fillColor, active, activeColor=255, activeHeight=20 ) {
    push();
    translate(this.xCenter, this.yCenter);
    rotate(this.initialAngle * Math.PI / 180); // Sets the rotation of the entire display

    for (let i=0; i<this.indicators.length; i++) {


      // update(n, newHeight) {
      //   const spread = 9;
      //   n = this._wrap(n);
      //   for (let i=0; i<this._rects.length; i++) {
      //     if (i === n) {
      //       for (let j=-spread; j<=spread; j++) {
      //         this._rects[this._wrap(n+j)] = (j != 0) ? newHeight/Math.abs(1.5 * j) : newHeight;
      //       }
      //     } else if (this._rects[i] > this._height) { this._rects[i] *= 0.95; }
      //   }
      // }



  
      // let spreadRange = 2;
      // for(let i=-spreadRange; i<=spreadRange; i++) {
      //   if (ind === this.indicators[active]) ind.draw([0, 255, 0], activeHeight);
      //   else if (ind === this.indicators[active + i] && i !== 0) ind.draw(activeColor, activeHeight);
      //   else if (ind !== this.indicators[active + i] && i !== 0) ind.draw(fillColor);

      // }


      rotate(this.rotationIncrement);
    }

    pop();
  }
}






class MinutesIndicator {
  constructor(yOffset, width, height) {
    this.yOffset = yOffset;
    this.width = width;
    this.height = height;
  }

  draw(fillColor, activeHeight=0) {
    push();
    noStroke();
    fill(fillColor);
    rectMode(CENTER);

    rect(0, this.yOffset, this.width, (activeHeight > 0) ? activeHeight : this.height);

    pop();
  }
}


/*TO DO:
 * - make MinutesDisplay, MinutesIndicator
 * - make HoursDisplay
 * - make AMPMDisplay
 */




/*
 * Canvas constants.
 */
const WIDTH = 960;
const HEIGHT = 500;
const BACKGROUND_COL = [40, 17, 23];

/*
 * ===================================== ===================================== *
 * ===================================== ===================================== *
 * ================================ CONSTANTS ================================ *
 * ===================================== ===================================== *
 * ===================================== ===================================== *
 */ 

/* 
 * Seconds.
 */
const SEC_INNER_RADIUS = 170;
const SEC_OUTER_RADUIS = 195;
const SEC_INDICATOR_COUNT = 60;
const SEC_INDICATOR_TOP_WIDTH = 10;
const SEC_INDICATOR_BOT_WIDTH = 25;
const SEC_INDICATOR_HEIGHT = 20;
const SEC_INITIAL_ANGLE = 90;

const SEC_COL_1 = [30, 30, 30];
const SEC_COL_2 = [132, 42, 44];

const secondsDisplay1 = new SecondsDisplay(
  0, HEIGHT/2, 
  1.75 * SEC_INNER_RADIUS, 1.75 * SEC_OUTER_RADUIS, 
  SEC_INDICATOR_COUNT, 1.75 * SEC_INDICATOR_TOP_WIDTH, 1.75 * SEC_INDICATOR_BOT_WIDTH, 1.75 * SEC_INDICATOR_HEIGHT, 
  SEC_INITIAL_ANGLE
);

const secondsDisplay2 = new SecondsDisplay(
  WIDTH/2, HEIGHT/2, 
  SEC_INNER_RADIUS, SEC_OUTER_RADUIS, 
  SEC_INDICATOR_COUNT, SEC_INDICATOR_TOP_WIDTH, SEC_INDICATOR_BOT_WIDTH, SEC_INDICATOR_HEIGHT, 
  SEC_INITIAL_ANGLE
);

/* 
 * Pointer.
 */
const SEC_POINTER_WIDTH = 25;
const SEC_POINTER_HEIGHT = 28;
const SEC_POINTER_ANGLE = 90;
const SEC_POINTER_COL = [143, 206, 54];

const pointer = new SecondsPointer(
  0.72 * WIDTH, HEIGHT/2, 
  SEC_POINTER_WIDTH, SEC_POINTER_HEIGHT, SEC_POINTER_ANGLE
);




const minutesDisplay = new MinutesDiplay(WIDTH/2, HEIGHT/2, 60, -135, 8, 14);


// draw your own clock here based on the values of obj:
//    obj.hours goes from 0-23
//    obj.minutes goes from 0-59
//    obj.seconds goes from 0-59
//    obj.millis goes from 0-999
//    obj.seconds_until_alarm is:
//        < 0 if no alarm is set
//        = 0 if the alarm is currently going off
//        > 0 --> the number of seconds until alarm should go off
function draw_clock(obj) {

  
  background(BACKGROUND_COL); 

  secondsDisplay1.angle = - map(obj.seconds + (obj.millis / 1000), 0, 59, 0, 354);
  secondsDisplay2.angle = map(obj.seconds + (obj.millis / 1000), 0, 59, 0, 354);

  secondsDisplay1.draw(SEC_COL_1);
  secondsDisplay2.draw(SEC_COL_2);
  
  pointer.draw(SEC_POINTER_COL, obj.seconds);


  minutesDisplay.draw([0, 0, 255], obj.minutes, [255, 0, 0], 30);

  
}


