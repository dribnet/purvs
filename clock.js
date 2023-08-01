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
  draw(fillColor, alarm=-1, alarmColor=[209, 63, 128]) {
    /* 
     * Section regarding indicator drawing. 
     */
    push();
    translate(this.xCenter, this.yCenter);
    rotate((this.initialAngle + this.angle) * Math.PI / 180); // Sets the rotation of the entire display

    for (let i=0; i<this.indicators.length; i++) {
      let ind = this.indicators[i];
      ind.draw((i === alarm) ? alarmColor : fillColor);

      rotate(2 * Math.PI / this.indicators.length); // Rotates to draw each indicator circularly
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

    // Setup
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
    push();

    // Setup
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
  draw(active, activeHeight, passiveColor, activeColor, alarm=-1, alarmColor=[209, 63, 128]) {
    /*
     * Changes the heights of all the indicators surrounding the active indicator.
     * All affected indicators are added to a Map, storing both the index and the scale factor.
     * When a unit time passes, the growth and decay rates control the speed at which the indicators change height.
     */
    const GROWTH_RATE = 1.03
    const DECAY_RATE = 0.99;

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
          if (ind.height < newHeight) ind.height *= GROWTH_RATE;

          /*
           * If the indicator is active or is nearby the active AND
           * its current height is GREATER than its calculated new height,
           * decrease its height by some decay factor.
           */
          if (ind.height > newHeight) ind.height *= DECAY_RATE;
          
          /*
           * Adds the affected indicators and their corresponding factos to a Map collection.
           * This will allow for differentiating between affected and unaffected
           * indicators, as well as allowing for colour lerping.
           */
          affected.set(this._wrap(active + j), factor);
        }
      }
    }

    /*
     * If the height after decaying becomes smaller than the 
     * base height, the height is reset back to default.
     */
    for (let i=0; i<this.indicators.length; i++) {
      if (!affected.has(i)) {
        if (this.indicators[i].height > this.indicatorHeight) this.indicators[i].height *= DECAY_RATE;
        if (this.indicators[i].height < this.indicatorHeight) this.indicators[i].height = this.indicatorHeight;
      }
    }

    /* 
     * Section regarding display drawing. 
     */
    push();

    let indColor;

    // Setup
    translate(this.xCenter, this.yCenter);
    rotate(this.initialAngle * Math.PI / 180); // Sets the rotation of the entire display

    for (let i=0; i<this.indicators.length; i++) {
      ind = this.indicators[i];

      /*
       * If the indicator is affected, use colour lerping instead of the base colour.
       * The growth factor also controls the proportion between the base colour and active colour.
       */
      indColor = passiveColor;
      if (affected.has(i)) indColor = lerpColor(color(passiveColor), color(activeColor), affected.get(i));
      if (i === alarm) indColor = alarmColor;

      ind.draw(indColor);
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
  constructor(xCenter, yCenter, radius, indicatorCount, indicatorSize, indicatorGap, initialAngle=0, totalArcSize=2*Math.PI) {
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
    let indicatorArcSize = totalArcSize / indicatorCount;

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
  draw(active, activeRadius, passiveColor, activeColor, alarm=-1, alarmColor=[209, 63, 128]) {
    const GROWTH_RATE=1.005;
    const DECAY_RATE=0.999;

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
        if (ind.radius < newRadius) ind.radius *= GROWTH_RATE;
      }

      if (i === alarm) drawColor = alarmColor;

      /*
       * If the indicator is not active and its radius is greater than
       * the default radius, gradually decrease it.
       */
      if (i !== active && ind.radius > this.radius) ind.radius *= DECAY_RATE; 
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
  draw(fillColor, scaleFactor=1) {
    push();

    // Setup
    translate(this.xCenter, this.yCenter);
    scale(scaleFactor);
    ellipseMode(CENTER);
    noStroke();
    fill(fillColor);

    ellipse(0, 0, this.radius, this.radius);

    pop();
  }

  /** Method that displays AM or PM based on the current hour. */
  text(hour, fontSize, fontColor) {
    const TEXT_OFFSET = 70;
    const FONT = "Courier New";
  
    push();

    // Setup
    translate(this.xCenter, this.yCenter);
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
 * =============================== DECLARATION =============================== *
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
const SEC_SCALE_2 = 0.85; //1

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
const SEC_POINTER_HEIGHT = 30;
const SEC_POINTER_ANGLE = 90;

const pointer = new SecondsPointer(
  19/25 * WIDTH , HEIGHT / 2, 
  SEC_POINTER_WIDTH, SEC_POINTER_HEIGHT, SEC_POINTER_ANGLE
);

/*
 * Minutes.
 */
const MIN_INDICATOR_COUNT = 60;
const MIN_INDICATOR_OFFSET = -205; //-135;
const MIN_INDICATOR_WIDTH = 10; //8;
const MIN_INDICATOR_HEIGHT = 20; // 10; 
const MIN_INITIAL_ANGLE = 0;

const MIN_ACTIVE_HEIGHT = 24;
const MIN_PASSIVE_COL = [92, 29, 31, 128]; //[132, 42, 44];
const MIN_ACTIVE_COL = [97, 141, 39, 200]; //[138, 202, 56];

const minutesDisplay = new MinutesDiplay(
  WIDTH/2, HEIGHT/2,
  MIN_INDICATOR_COUNT, MIN_INDICATOR_OFFSET, MIN_INDICATOR_WIDTH, MIN_INDICATOR_HEIGHT,
  MIN_INITIAL_ANGLE
);

/*
 * Hours.
 */
const HOU_RADIUS_1 = 820;
const HOU_RADIUS_2 = 185;
const HOU_INDICATOR_COUNT = 12;
const HOU_INDICATOR_SIZE_1 = 15;
const HOU_INDICATOR_SIZE_2 = 10;
const HOU_INDICATOR_GAP = 12;
const HOU_INITIAL_ANGLE_1 = -90 * 3.8/10;
const HOU_INITIAL_ANGLE_2 = -105;
const HOU_TOTAL_ARC_SIZE_1 = Math.PI * 3.8/10;

const HOU_ACTIVE_RADIUS_1 = 10;
const HOU_ACTIVE_RADIUS_2 = 8;
const HOU_PASSIVE_COL_1 = [30, 30, 30];
const HOU_ACTIVE_COL_1 = [40, 40, 40];
const HOU_PASSIVE_COL_2 = [132, 42, 44];
const HOU_ACTIVE_COL_2 = [138, 202, 56];

const hourDisplay1 = new HoursDisplay(
  0, HEIGHT/2, 
  HOU_RADIUS_1, HOU_INDICATOR_COUNT, HOU_INDICATOR_SIZE_1, HOU_INDICATOR_GAP,
  HOU_INITIAL_ANGLE_1, HOU_TOTAL_ARC_SIZE_1
);

const hoursDisplay2 = new HoursDisplay(
  WIDTH/2, HEIGHT/2, 
  HOU_RADIUS_2, HOU_INDICATOR_COUNT, HOU_INDICATOR_SIZE_2, HOU_INDICATOR_GAP, 
  HOU_INITIAL_ANGLE_2
);

/*
 * AM/PM.
 */
const AMPM_RADIUS_1 = 60;
const AMPM_RADIUS_2 = 30;
const AMPM_FONT_SIZE = 35;

const AMPM_MONO_COL = [30, 30, 30];
const AMPM_DARK_COL = [105, 10, 125];
const AMPM_LIGHT_COL = [138, 202, 56];

const ampmDisplay1 = new AmPmDisplay(
  0, HEIGHT/2,
  AMPM_RADIUS_1
);

const ampmDisplay2 = new AmPmDisplay(
  WIDTH/2, HEIGHT/2,
  AMPM_RADIUS_2
);

/*
 * ===================================== ===================================== *
 * ===================================== ===================================== *
 * ============================= FUNCTIONS & VARS ============================ *
 * ===================================== ===================================== *
 * ===================================== ===================================== *
 */

/*
 * Pre-alarm setup variables.
 */
let initAlarmVars = true;
let timeUntilActivation = -1; // Time until alarm goes off
let timeOfTrigger = 0;        // The current second when the alarm timer is activated

let alarmSecondsInd = -1;     // Which secondsDisplay indicator needs to be coloured
let alarmMinutesInd = -1;     // Which minutesDisplay indicator needs to be coloured
let alarmHoursInd = -1;       // Which HoursDisplay indicator needs to be coloured

/*
 * Lerp AMPM colour variables.
 */
let totalTime;
let factor;
let ampmColor;

/*
 * Secondary colours used in lerps for when the alarm goes off
 */
const ALARM_ACTIVE_COL_1 = [10, 10, 10];
const ALARM_ACTIVE_COL_2 = [209, 63, 128];

/**
 * Sine lerp color.
 * Function that returns colours based around some inputed colour.
 * Used when the alarm goes off.
 */
function SLC(millis, c1, c2) {
  let factor = Math.pow( Math.sin( Math.PI/999 * millis ), 2 ); // 999 is for max millis
  return lerpColor(color(c1), color(c2), factor);
}

/** Draws all elements of the clock. */
function drawAll(
  secondsDisplay1Col,
  secondsDisplay2Col,
  minutesDisplayPassiveCol, minutesDisplayActiveCol,
  hourDisplay1PassiveCol, hourDisplay1ActiveCol,
  hoursDisplay2PassiveCol, hourDisplay2ActiveCol,
  ampmDisplay1Col, ampmDisplay1TextCol,
  ampmDisplay2Col, ampmDisplay2Scale,
  pointerCol,

  secsInd=-1, minsInd=-1, hoursInd=-1
) {

  secondsDisplay1.draw(secondsDisplay1Col);
  hourDisplay1.draw(
    (obj.hours > 11) ? obj.hours - 12 : obj.hours, 
    HOU_ACTIVE_RADIUS_1, 
    hourDisplay1PassiveCol, hourDisplay1ActiveCol
  );
  ampmDisplay1.draw(ampmDisplay1Col);

  minutesDisplay.draw(
    obj.minutes, 
    MIN_ACTIVE_HEIGHT, 
    minutesDisplayPassiveCol, minutesDisplayActiveCol,
    minsInd
  );

  secondsDisplay2.draw(secondsDisplay2Col, secsInd);

  hoursDisplay2.draw(
    (obj.hours > 11) ? obj.hours - 12 : obj.hours, 
    HOU_ACTIVE_RADIUS_2, 
    hoursDisplay2PassiveCol, hourDisplay2ActiveCol,
    hoursInd
  );

  ampmDisplay1.text(
    obj.hours,
    AMPM_FONT_SIZE,
    ampmDisplay1TextCol
  );
  ampmDisplay2.draw(ampmDisplay2Col, ampmDisplay2Scale);

  pointer.draw(pointerCol, obj.seconds);
}

/** 
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
  /*
   * Uses the current time to calculate a lerp colour.
   */ 
  totalTime = obj.hours + obj.minutes/60 + obj.seconds/3600; // Millis are negligable 
  factor = (0 <= totalTime && totalTime < 13) ? (totalTime) / 12 : 1 - (totalTime - 12) / 12;
  ampmColor = lerpColor(color(AMPM_DARK_COL), color(AMPM_LIGHT_COL), factor);

  /* 
   * Rotates both secondsDisplays.
   */
  secondsDisplay1.angle = - map(obj.seconds + (obj.millis / 1000), 0, 59, 0, 354);
  secondsDisplay2.angle = map(obj.seconds + (obj.millis / 1000), 0, 59, 0, 354);

  /*
   * While the alarm is turned on but has not yet activated.
   */
  if (obj.seconds_until_alarm > -1 && obj.seconds_until_alarm !== 0) {
    /*
     * Initializes some alarm variables.
     */
    if (initAlarmVars) {
      timeUntilActivation = obj.seconds_until_alarm;
      timeOfTrigger = obj.seconds + obj.millis/999;

      alarmSecondsInd = 60 - timeUntilActivation - timeOfTrigger; // Calculation done to get how many indicators from the pointer
      alarmMinutesInd = obj.minutes;
      alarmHoursInd = obj.hours;

      while (alarmSecondsInd < 0) { alarmSecondsInd += 60; alarmMinutesInd++; }
      while (alarmMinutesInd > 59) { alarmMinutesInd -= 60; alarmHoursInd++; }
      while (alarmHoursInd > 11) { alarmHoursInd -= 12; }
      
      initAlarmVars = false;
    }

    drawAll(
      SEC_COL_1,
      SEC_COL_2,
      MIN_PASSIVE_COL, MIN_ACTIVE_COL,
      HOU_PASSIVE_COL_1, HOU_ACTIVE_COL_1,
      HOU_PASSIVE_COL_2, HOU_ACTIVE_COL_2,
      AMPM_MONO_COL, ampmColor,
      ampmColor, 1,
      ampmColor,

      Math.ceil(alarmSecondsInd), alarmMinutesInd, alarmHoursInd
    );
  }

  else if (obj.seconds_until_alarm === 0) {
    drawAll(
      SLC(obj.millis, SEC_COL_1, ALARM_ACTIVE_COL_1),
      SEC_COL_2,
      SLC(obj.millis, MIN_PASSIVE_COL, ALARM_ACTIVE_COL_2), ALARM_ACTIVE_COL_2,
      SLC(obj.millis, HOU_PASSIVE_COL_1, ALARM_ACTIVE_COL_1), SLC(obj.millis, HOU_ACTIVE_COL_1, ALARM_ACTIVE_COL_1),
      HOU_PASSIVE_COL_2, SLC(obj.millis, HOU_ACTIVE_COL_2, ALARM_ACTIVE_COL_2),
      SLC(obj.millis, AMPM_MONO_COL, ALARM_ACTIVE_COL_1), SLC(obj.millis, ampmColor, ALARM_ACTIVE_COL_2), 
      SLC(obj.millis, ampmColor, ALARM_ACTIVE_COL_2), Math.pow( Math.sin( Math.PI/999 * obj.millis ), 2 ),
      SLC(obj.millis, ampmColor, ALARM_ACTIVE_COL_2)
    );
  }

  else {
    /* 
     * Resets variables.
     */
    if (!initAlarmVars) {
      initAlarmVars = true;
      timeUntilActivation = -1;
      timeOfTrigger = 0;

      alarmSecondsInd = -1;
      alarmMinutesInd = -1;
      alarmHoursInd = -1;
    }

    drawAll(
      SEC_COL_1,
      SEC_COL_2,
      MIN_PASSIVE_COL, MIN_ACTIVE_COL,
      HOU_PASSIVE_COL_1, HOU_ACTIVE_COL_1,
      HOU_PASSIVE_COL_2, HOU_ACTIVE_COL_2,
      AMPM_MONO_COL, ampmColor,
      ampmColor, 1,
      ampmColor
    );
  }
}