/**
 * Parent class describing a visual representation of digits.
 */
class Number {
  /**
   * Constructor for Number class.
   * @param {number} x Coord for x center pixel.
   * @param {number} y Coord for y center pixel.
   * @param {number} psize Size of each pixel in digit.
   * @param {Object[]} shape 2D array containing shape of digit as a series of ones and zeros.
   */
  constructor(x, y, psize, shape) {
    this.x = x;
    this.y = y;
    this.psize = psize;
    this.shape = shape;
  }

  /**
   * Draw method for digit.
   * @param {*} fillColor Fill color of pixel. Can be a hex code, number, p5 color object, or array.
   */
  draw(fillColor) {
    push();
    noStroke();
    fill(fillColor);

    // First for loop gets row
    for (let r=0; r<this.shape.length; r++) {
      let deltaY = this.y + r * this.psize;

      // Second for loop gets column
      for (let c=0; c<this.shape[0].length; c++) {
        let deltaX = this.x + c * this.psize;

        // Needs to subtract psize from drawing position in order to center digit
        if (this.shape[r][c] > 0) {
          rect(deltaX - 2 * this.psize, deltaY - 3 * this.psize, this.psize, this.psize);
        }
      }
    }

    pop();
  }
}

/** Subclass of Number representing zero. */
class Zero extends Number {
  constructor(x, y, psize) {
    super(
      x, y, psize,
      [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0]
      ]
    );
  }
}

/** Subclass of Number representing one. */
class One extends Number {
  constructor(x, y, psize) {
    super(
      x, y, psize,
      [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1]
      ]
    );
  }
}

/** Subclass of Number representing two. */
class Two extends Number {
  constructor(x, y, psize) {
    super(
      x, y, psize,
      [
        [0, 1, 1 ,1, 0],
        [1, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [1, 1, 1, 1, 1]
      ]
    );
  }
}

/** Subclass of Number representing three. */
class Three extends Number {
  constructor(x, y, psize) {
    super(
      x, y, psize,
      [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0]
      ]
    );
  }
}

/** Subclass of Number representing four. */
class Four extends Number {
  constructor(x, y, psize) {
    super(
      x, y, psize,
      [
        [0, 0, 0, 1, 0],
        [0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0]
      ]
    );
  }
}

/** Subclass of Number representing five. */
class Five extends Number {
  constructor(x, y, psize) {
    super(
      x, y, psize,
      [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0]
      ]
    );
  }
}

/** Subclass of Number representing six. */
class Six extends Number {
  constructor(x, y, psize) {
    super(
      x, y, psize,
      [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0]
      ]
    );
  }
}

/** Subclass of Number representing seven. */
class Seven extends Number {
  constructor(x, y, psize) {
    super(
      x, y, psize,
      [
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0]
      ]
    );
  }
}

/** Subclass of Number representing eight. */
class Eight extends Number {
  constructor(x, y, psize) {
    super(
      x, y, psize,
      [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0]
      ]
    );
  }
}

/** Subclass of Number representing nine. */
class Nine extends Number {
  constructor(x, y, psize) {
    super(
      x, y, psize,
      [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 1],
        [0, 1, 1, 1, 0]
      ]
    );
  }
}

// Width and height of canvas
const WIDTH = 960;
const HEIGHT = 500;

function draw_clock(obj) {
  // Initializes draw settings
  background([29, 24, 28]); 
  angleMode(DEGREES);
  rectMode(CENTER);
  translate(WIDTH/2, HEIGHT/2);

  // Hour
  let hourSize = 40;
  push();
  rotate(210);
  new Seven(0, 0, hourSize).draw([0, 0, 0]);
  pop();

  // Minute
  let minuteSize = 27;
  push();
  rotate(110);
  new Three(-3 * minuteSize, 0, minuteSize).draw([164, 163, 165]);
  new Four(3 * minuteSize, 0, minuteSize).draw([164, 163, 165]);
  pop();

  // Second
  let secondSize = 18;
  push();
  rotate(230);
  new Five(-3 * secondSize, 0, secondSize).draw([141, 0, 1]);
  new Three(3 * secondSize, 0, secondSize).draw([141, 0, 1]);
  pop();
}
