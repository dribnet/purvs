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
     * the array to each unit in time is made. 
     */
    this.indicators = [];
    for (let i=0; i<indicatorCount; i++) {
      this.indicators.push(
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
  draw(fillColor, active=-1, activeColor=255, t1=-1, t2=[0, 255, 0]) {
    /* 
     * Section regarding indicator drawing. 
     */
    push();
    translate(this.xCenter, this.yCenter);
    rotate((this.initialAngle + this.angle) * Math.PI / 180); // Sets the rotation of the entire display

    for (let i=0; i<this.indicators.length; i++) {
      let ind = this.indicators[i];
      let indCol = fillColor;

      if (i === active) indCol = activeColor;
      else if (i === t1) indCol = t2;
      
      ind.draw(indCol);

      rotate(2 * Math.PI / this.indicators.length); // Only rotates to draw each indicator circularly
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

    // Setup
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
 * Class that defines a point in which an indicator passing it denotes one unit of time passing.
 */
class SecondsPointer {
  /** Constructor */
  constructor(xCenter, yCenter, width, height, angle=0) {
    /* 
     * Co-ords and rotation of the pointer.
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
    // Setup
    push();
    translate(this.xCenter, this.yCenter);
    rotate(this.angle * Math.PI/180);
    textAlign(CENTER, CENTER);

    noStroke(); 
    fill(fillColor);

    // Drawing the pointer
    beginShape();
    for (let p of this.points) vertex(p[0], p[1]);
    endShape(CLOSE);

    // Drawing the text
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
  /** Constructor. */
  constructor(xCenter, yCenter, indicatorCount, indicatorOffset, indicatorWidth, indicatorHeight, initialAngle=0) {
    /* 
     * Co-ords and rotation of the display.
     * The angle property is in degrees to make my life easier, 
     * however, calculations will be done in radians.
     */
    this.xCenter = xCenter;
    this.yCenter = yCenter;
    this.initialAngle = initialAngle;

    /* 
     * The height of each indicator.
     */
    this.indicatorHeight = indicatorHeight;

    /*
     * Controls the rotational spacing of each indicator.
     * Degrees equivalent is 360 / indicatorCount.
     */
    this.rotationIncrement = 2 * Math.PI / indicatorCount; 

    /*
     * Generates some number of indicators and pushes them into an array.
     * Because each indicator is stored in an array, a simple mapping from its position in
     * the array to each unit in time is made. 
     */
    this.indicators = [];
    for (let i=0; i<indicatorCount; i++) {
      this.indicators.push(
        new MinutesIndicator(indicatorOffset, indicatorWidth, indicatorHeight)
      );
    }
  }

  /** Draw method for display. */
  draw(active, activeHeight, passiveColor, activeColor, growthRate=1.03, decayRate=0.99) {
    /*
     * Changes the heights of all the indicators surrounding the active indicator.
     * All affected indicators are added to a Map, storing both the index and the scale factor.
     * When a unit time passes, the growth and decay rates control the speed at which the indicators change height.
     */
    let factor;
    let ind;
    let newHeight;
    const affected = new Map();
    const SPREAD_RANGE = 5;

    for (let i=0; i<this.indicators.length; i++) {

      /*
       * If the for loop has reached the active unit of time, a spread is applied to nearby surrounding indicators.
       * The number of indicators affected is 2 * (spread range - 1).
       * The active unit will grow by activeHeight, while neighbouring indicators will grow by 
       * (spread range - distance from active) / spread range * activeHeight.
       * Note that the indicators will grow BY activeHeight and not grow TO activeHeight.
       */
      if (i === active) {
        for (let j=-SPREAD_RANGE; j<=SPREAD_RANGE; j++) {
          
          factor = (SPREAD_RANGE - Math.abs(j)) / SPREAD_RANGE; // Growth factor
          ind = this.indicators[this._wrap(active + j)]; // Active or neighbouring indicator
          newHeight = this.indicatorHeight + activeHeight * factor; // Calculated new height based on growth factor

          /*
           * If the indicator is active or is nearby the active AND
           * its current height is LESS than its calculated new height,
           * increase its height by some growth factor.
           */
          if (ind.height < newHeight) ind.height *= growthRate;

          /*
           * If the indicator is active or is nearby the active AND
           * its current height is GREATER than its calculated new height,
           * decrease its height by some decay factor.
           */
          if (ind.height > newHeight) ind.height *= decayRate;
          
          /*
           * Adds the affected indicators and their corresponding factos to a Map collection.
           * This will allow for differentiating between affected and unaffected
           * indicators, as well as allowing for colour lerping.
           */
          affected.set(this._wrap(active + j), factor);
        }
      }
    }

    /**
     * If an indicator is not affected, revert its height.
     */
    for (let i=0; i<this.indicators.length; i++) {
      if (!affected.has(i)) {
        if (this.indicators[i].height > this.indicatorHeight) this.indicators[i].height *= decayRate;

        /*
         * If the height after decaying becomes smaller than the 
         * base height, the height is reset back to default.
         */
        if (this.indicators[i].height < this.indicatorHeight) this.indicators[i].height = this.indicatorHeight;
      }
    }

    /* 
     * Section regarding display drawing. 
     */
    push();

    // Setup
    translate(this.xCenter, this.yCenter);
    rotate(this.initialAngle * Math.PI / 180); // Sets the rotation of the entire display

    for (let i=0; i<this.indicators.length; i++) {
      /*
       * If the indicator is affected, use colour lerping instead of the base colour.
       * The growth factor also controls the proportion between the base colour and active colour.
       */
      this.indicators[i].draw( (affected.has(i)) ? lerpColor(color(passiveColor), color(activeColor), affected.get(i)) : passiveColor);
      rotate(this.rotationIncrement);
    }

    pop();
  }

  /** Private method for creating circular loops in the indicator array. */
  _wrap(index) {

    /*
     * If the index is greater than the max index of the array,
     * subtract off the length of the array until it is within bounds.
     */
    while (index > this.indicators.length - 1) index -= this.indicators.length;

    /*
     * If the index is less than zero,
     * add on the length of the array until it is within bounds.
     */
    while (index < 0) index += this.indicators.length;

    return index;
  }
}

/**
 * Class that defines each indicator of the MinutesDiplay class.
 */
class MinutesIndicator {
  constructor(yOffset, width, height) {
    /*
     * Since the point of rotation is stored within the MinutesDiplay class,
     * having this class contain an xCenter and yCenter is redundant.
     * All that really matters is its yOffset from that centre point. 
     */
    this.yOffset = yOffset;

    /*
     * Width and height of the indicator. 
     */
    this.width = width;
    this.height = height;
  }

  /** Draw method for indicator. */
  draw(fillColor) {
    push();
    
    // Setup
    noStroke();
    fill(fillColor);
    rectMode(CENTER);

    rect(0, this.yOffset, this.width, this.height, 3);

    pop();
  }
}

/*
 * ===================================== ===================================== *
 * ===================================== ===================================== *
 * ================================== HOURS ================================== *
 * ===================================== ===================================== *
 * ===================================== ===================================== *
 */ 

/**
 * Hours in this clock is defined by a series of arcs.
 * At some given hour, one of the arcs' distances from some origin will increase.
 */
class HoursDisplay {
  /** Constructor. */
  constructor(xCenter, yCenter, radius, indicatorCount, indicatorSize, indicatorGap, initialAngle=0) {

    /*
     * Center co-ords, initial angle, and radius of each arc.
     */
    this.xCenter = xCenter;
    this.yCenter = yCenter;
    this.initialAngle = initialAngle;
    this.radius = radius;

    /*
     * Indicator size refers to the stroke width of the arc.
     */

    this.indicatorSize = indicatorSize;

    /*
     * The size of the arc of each indicator depends on the number of indicators.
     * Essentially what this does is segment a circle into an indicatorCount number of parts. 
     */
    let indicatorArcSize = 2 * Math.PI / indicatorCount;

    /*
     * Generates some number of indicators and pushes them into an array.
     * Because each indicator is stored in an array, a simple mapping from its position in
     * the array to each unit in time is made. 
     */
    this.indicators = [];
    for (let i=0; i<indicatorCount; i++) {
      this.indicators.push(
        new HoursIndicator(
          radius, indicatorSize,
          /*
           * The indicatorGap is a number that slightly reduces the ends of each arc in order
           * to make distinguishing between them easier. 
           * This number is the denominator of the ratio indicatorArcSize / indicatorGap.
           * This ratio is added on to the arc's start in order to shift it forward slightly,
           * and is subtracted from the arc's end in order to shift it back slightly.
           */
          ( indicatorArcSize * (indicatorGap * i + 1) ) / indicatorGap,         // = i * 0 + indicatorArcSize + indicatorArcSize / indicatorGap, 
          ( indicatorArcSize * (indicatorGap * (i + 1) - 1) ) / indicatorGap    // = i * indicatorArcSize + indicatorArcSize - indicatorArcSize / indicatorGap
        )
      );
    }
  }

  /** Draw method for display. */
  draw(active, activeRadius, passiveColor, activeColor, growthRate=1.005, decayRate=0.999) {
    push();

    // Setup
    translate(this.xCenter, this.yCenter);
    rotate(this.initialAngle * Math.PI/180);

    /*
     * Changes only the colour and radius of the active arc.
     * Similar to MinuteDisplay, the active indicator's radius will increase over time to
     * activeRadius, and the speed at which it grows depends on the growth rate and vice versa.
     */
    let ind;
    let drawColor;
    let newRadius = this.radius + activeRadius;

    for (let i=0; i<this.indicators.length; i++) {
      drawColor = passiveColor;
      ind = this.indicators[i];
      
      if (i === active) { 
        /*
         * Changes the draw colour if the current indicator is active.
         */
        drawColor = activeColor;
        if (ind.radius < newRadius) ind.radius *= growthRate;
      }

      /*
       * If the indicator is not active and its radius is greater than
       * the default radius, gradually decrease it.
       */
      if (i !== active && ind.radius > this.radius) ind.radius *= decayRate; 
      else if (i !== active && ind.radius < this.radius) ind.radius = this.radius;

      ind.draw(drawColor);
    }
    pop();
  }
}

/**
 * Class that defines each indicator of the HoursDisplay class.
 */
class HoursIndicator {
  /** Constructor */
  constructor(radius, size, start, stop) {
    /*
     * An indicator is just an arc, so all the information that is needed is 
     * its distance from its center co-ords and the stroke weight.
     */
    this.radius = radius;
    this.size = size;

    /*
     * These numbers are in radians.
     * Start and stop denote where the arc begins and stops, e.g. 
     * start at 0 and stop at 2 PI draws a full circle.
     * Pretending that a full cicle is just four points, the drawn path is as follows:
     *       3Pi/4
     *
     * PI   (x, y)   0 OR 2Pi
     *
     *       Pi/2 
     */
    this.start = start;
    this.stop = stop;
  }

  /** Draw method for indicator. */
  draw(fillColor) {
    push();

    // Setup
    noFill();
    stroke(fillColor);
    ellipseMode(CENTER);
    strokeCap(SQUARE);
    strokeWeight(this.size);
    
    arc(0, 0, this.radius, this.radius, this.start, this.stop);

    pop();
  }
}

/*
 * ===================================== ===================================== *
 * ===================================== ===================================== *
 * ================================== AM/PM ================================== *
 * ===================================== ===================================== *
 * ===================================== ===================================== *
 */ 

/**
 * AM and PM are represented by a circle which transitions between two colours.
 * It starts with a darker colour at 0000, goes to a brighter colour at 1200,
 * and finally diminishes back to dark as it approaches 2359.
 */
class AmPmDisplay {
  /** Constructor. */
  constructor(xCenter, yCenter, radius) {
    this.xCenter = xCenter;
    this.yCenter = yCenter;
    this.radius = radius;
  }

  /** Draw method for display. */
  draw(fillColor) {
    // Setup
    push();
    translate(this.xCenter, this.yCenter);
    ellipseMode(CENTER);
    noStroke();
    fill(fillColor);

    ellipse(0, 0, this.radius, this.radius);
    pop();
  }

  /** Static method that displays AM or PM based on the current hour. */
  static text(x, y, hour, fontSize, fontColor) {
    const TEXT_OFFSET = 70;
    const FONT = "Courier New";
    
    push();
    // Setup
    translate(x, y);
    textAlign(CENTER, CENTER);
    textFont(FONT, fontSize);
    noStroke();
    fill(fontColor);
  
    text((hour > 11) ? "PM" : "AM", TEXT_OFFSET, 0);
    pop();
  }
}

/*
 * ===================================== ===================================== *
 * ===================================== ===================================== *
 * ================================ CONSTANTS ================================ *
 * ===================================== ===================================== *
 * ===================================== ===================================== *
 */ 

/*
 * Canvas constants.
 */
const WIDTH = 960;
const HEIGHT = 500;
const BACKGROUND_COL = [40, 17, 23];

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

const SEC_SCALE_1 = 1.85;
const SEC_SCALE_2 = 1;

const SEC_COL_1 = [30, 30, 30];
const SEC_COL_2 = [132, 42, 44];

const secondsDisplay1 = new SecondsDisplay(
  0, HEIGHT/2, 
  SEC_SCALE_1 * SEC_INNER_RADIUS, SEC_SCALE_1 * SEC_OUTER_RADUIS, 
  SEC_INDICATOR_COUNT, SEC_SCALE_1 * SEC_INDICATOR_TOP_WIDTH, SEC_SCALE_1 * SEC_INDICATOR_BOT_WIDTH, SEC_SCALE_1 * SEC_INDICATOR_HEIGHT, 
  SEC_INITIAL_ANGLE
);

const secondsDisplay2 = new SecondsDisplay(
  WIDTH/2, HEIGHT/2, 
  SEC_SCALE_2 * SEC_INNER_RADIUS, SEC_SCALE_2 * SEC_OUTER_RADUIS, 
  SEC_INDICATOR_COUNT, SEC_SCALE_2 * SEC_INDICATOR_TOP_WIDTH, SEC_SCALE_2 * SEC_INDICATOR_BOT_WIDTH, SEC_SCALE_2 * SEC_INDICATOR_HEIGHT, 
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

/*
 * Minutes.
 */
const MIN_INDICATOR_COUNT = 60;
const MIN_INDICATOR_OFFSET = -135;
const MIN_INDICATOR_WIDTH = 8;
const MIN_INDICATOR_HEIGHT = 10;
const MIN_INITIAL_ANGLE = 0;

const MIN_ACTIVE_HEIGHT = 24;
const MIN_PASSIVE_COL = [132, 42, 44];
const MIN_ACTIVE_COL = [138, 202, 56];

const minutesDisplay = new MinutesDiplay(
  WIDTH/2, HEIGHT/2,
  MIN_INDICATOR_COUNT, MIN_INDICATOR_OFFSET, MIN_INDICATOR_WIDTH, MIN_INDICATOR_HEIGHT,
  MIN_INITIAL_ANGLE
);

/*
 * Hours.
 */
const HOU_RADIUS = 185;
const HOU_INDICATOR_COUNT = 12;
const HOU_INDICATOR_SIZE = 10;
const HOU_INDICATOR_GAP = 12;
const HOU_INITIAL_ANGLE = -105;

const HOU_ACTIVE_RADIUS = 8;
const HOU_PASSIVE_COL = [132, 42, 44];
const HOU_ACTIVE_COL = [138, 202, 56];

const hoursDisplay = new HoursDisplay(
  WIDTH/2, HEIGHT/2, 
  HOU_RADIUS, HOU_INDICATOR_COUNT, HOU_INDICATOR_SIZE, HOU_INDICATOR_GAP, 
  HOU_INITIAL_ANGLE
);

/*
 * AM/PM.
 */
const AMPM_RADIUS = 30;
const AMPM_FONT_SIZE = 45;

const AMPM_DARK_COL = [105, 10, 125];
const AMPM_LIGHT_COL = [138, 202, 56];

const ampmDisplay = new AmPmDisplay(
  WIDTH/2, HEIGHT/2,
  AMPM_RADIUS
);













let initAlarmVars = true;
let alarmSec;
let pain = 0;

/*
 * draw your own clock here based on the values of obj:
 *    obj.hours goes from 0-23
 *    obj.minutes goes from 0-59
 *    obj.seconds goes from 0-59
 *    obj.millis goes from 0-999
 *    obj.seconds_until_alarm is:
 *        < 0 if no alarm is set
 *        = 0 if the alarm is currently going off
 *        > 0 --> the number of seconds until alarm should go off
 */
function draw_clock(obj) {
  background(BACKGROUND_COL); 

  // Rotates both secondsDisplays
  secondsDisplay1.angle = - map(obj.seconds + (obj.millis / 1000), 0, 59, 0, 354);
  secondsDisplay2.angle = map(obj.seconds + (obj.millis / 1000), 0, 59, 0, 354);
  //secondsDisplay2.angle = map(obj.millis, 0, 999, 0, 6);

  // Draws both secondsDisplays
  secondsDisplay1.draw(SEC_COL_1);
  secondsDisplay2.draw(SEC_COL_2, 0, [255, 0, 0], 15, [255, 0, 255]);

  // Draws the pointer
  pointer.draw(SEC_POINTER_COL, obj.seconds);

  // Draws the minutesDisplay
  minutesDisplay.draw(obj.minutes, MIN_ACTIVE_HEIGHT, MIN_PASSIVE_COL, MIN_ACTIVE_COL);

  // Draws the hoursDisplay
  hoursDisplay.draw((obj.hours > 11) ? obj.hours - 12 : obj.hours, HOU_ACTIVE_RADIUS, HOU_PASSIVE_COL, HOU_ACTIVE_COL);

  // Uses the current time to calculate a lerp colour
  let sumTime = obj.hours + obj.minutes/60 + obj.seconds/3600; // millis are negligable 
  let factor = (0 <= sumTime && sumTime < 13) ? (sumTime) / 12 : 1 - (sumTime - 12) / 12;
  let ampmColor = lerpColor(color(AMPM_DARK_COL), color(AMPM_LIGHT_COL), factor)

  // Draws the ampmDisplay and text
  ampmDisplay.draw(ampmColor);
  // AmPmDisplay.text(
  //   0, HEIGHT/2,
  //   obj.hours,
  //   AMPM_FONT_SIZE,
  //   ampmColor
  // );

  if (obj.seconds_until_alarm > -1) {
    
    
    if (initAlarmVars) {
      alarmSec = obj.seconds_until_alarm;
      pain = obj.seconds + alarmSec
      pain -= (pain > 59) ? 59 : 0;
      initAlarmVars = false;
    }

    

    

    secondsDisplay2.draw(SEC_COL_2, Math.floor(pain), [60, 20, 128]);
    console.log("pain: " + pain); // whichever is at the pointer rn - Math.floor(alarmSec)
  }
  else {
    initAlarmVars = true;
    
  }

  
  
}

/*
 * assume alarm = 0 seconds
 * s = 00 ? alarm should be at ind[00] (15) | 60 - 0                | 
 * s = 15 ? alarm should be at ind[45] (15) | 60 - 0 - 15           | 
 * s = 30 ? alarm should be at ind[30] (15) | 60 - 0 - 15 - 15      | 
 * s = 45 ? alarm should be at ind[15] (15) | 60 - 0 - 15 - 15 - 15 | 
 */

/*
 * assume alarm = 3 seconds
 * s = 00 ? alarm should be at ind[57] (15) | 60 - 3                | 
 * s = 15 ? alarm should be at ind[42] (15) | 60 - 3 - 15           | 
 * s = 30 ? alarm should be at ind[27] (15) | 60 - 3 - 15 - 15      | 
 * s = 45 ? alarm should be at ind[12] (15) | 60 - 3 - 15 - 15 - 15 | 
 */

/*
 * assume alarm = 5 seconds
 * s = 00 ? alarm should be at ind[55] (15) | 60 - 5                |
 * s = 15 ? alarm should be at ind[40] (15) | 60 - 5 - 15           |
 * s = 30 ? alarm should be at ind[25] (15) | 60 - 5 - 15 - 15      |
 * s = 45 ? alarm should be at ind[10] (15) | 60 - 5 - 15 - 15 - 15 |
 */

/*
 * assume alarm = 15 seconds
 * s = 00 ? alarm should be at ind[45] (15) | 60 - 15                |
 * s = 15 ? alarm should be at ind[30] (15) | 60 - 15 - 15           |
 * s = 30 ? alarm should be at ind[15] (15) | 60 - 15 - 15 - 15      |
 * s = 45 ? alarm should be at ind[00] (15) | 60 - 15 - 15 - 15 - 15 |
 */

/*
 * assume alarm = 18 seconds
 * s = 00 ? alarm should be at ind[42] (15) | 60 - 18                |
 * s = 15 ? alarm should be at ind[37] (15) | 60 - 18 - 15           |
 * s = 30 ? alarm should be at ind[12] (15) | 60 - 18 - 15 - 15      |
 * s = 45 ? alarm should be at ind[37] (15) | 60 - 18 - 15 - 15 - 15 |
 */


/*
 * assume alarm = 30 seconds
 * s = 00 ? alarm should be at ind[30] | 60 - 30                |
 * s = 15 ? alarm should be at ind[15] | 60 - 30 - 15           |
 * s = 30 ? alarm should be at ind[00] | 60 - 30 - 15 - 15      |
 * s = 45 ? alarm should be at ind[45] | 60 - 30 - 15 - 15 - 15 |
 */

/*
 * assume alarm = 32 seconds
 * s = 00 ? alarm should be at ind[28] | 60 - 32                |
 * s = 15 ? alarm should be at ind[13] | 60 - 32 - 15           |
 * s = 30 ? alarm should be at ind[58] | 60 - 32 - 15 - 15      |
 * s = 45 ? alarm should be at ind[43] | 60 - 32 - 15 - 15 - 15 |
 */

/*
 * assume alarm K seconds
 * s = 00 ? alarm should be at ind[60 - K - 0 * 15]
 * s = 15 ? alarm should be at ind[60 - K - 1 * 15]
 * s = 30 ? alarm should be at ind[60 - K - 2 * 15]
 * s = 45 ? alarm should be at ind[60 - K - 3 * 15]
 */