class Number {
  constructor(x, y, psize, shape) {
    this.x = x;
    this.y = y;
    this.psize = psize;
    this.shape = shape;
  }

  draw(fillColor) {
    push();
    noStroke();
    fill(fillColor);

    for (let i=0; i<this.shape.length; i++) {
      let deltaY = this.y + i * this.psize;

      for (let j=0; j<this.shape[0].length; j++) {
        let deltaX = this.x + j * this.psize;
        if (this.shape[i][j] > 0) {
          rect(deltaX - 2 * this.psize, deltaY - 3 * this.psize, this.psize, this.psize);
        }
      }
    }

    pop();
  }
}

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

const WIDTH = 960;
const HEIGHT = 500;

function draw_clock(obj) {
  background(color("#1d181c")); 
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
