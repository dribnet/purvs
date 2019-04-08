const canvasWidth = 960;
const canvasHeight = 500;


let letterA = {
  "bug1_x": -25,
      "bug1_y": -18,
      "bug1_rot": 136.8,
      "bug2_x": 26,
      "bug2_y": -20,
      "bug2_rot": 18,
      "bug3_x": 2,
      "bug3_y": 0,
      "bug3_rot": 54,
      "bug4_x": -49,
      "bug4_y": 26,
      "bug4_rot": 26,
      "bug5_x": 48,
      "bug5_y": 22,
      "bug5_rot": -28,
      "bug6_x": 1,
      "bug6_y":-56,
      "bug6_rot": 129,
      "legRotOffset": 0,
};
let letterB =  {
  "bug1_x": 50,
      "bug1_y": -30,
      "bug1_rot": -21,
      "bug2_x": 35,
      "bug2_y": -2,
      "bug2_rot": 54,
      "bug3_x": 1,
      "bug3_y": -2,
      "bug3_rot": 172,
      "bug4_x": 42,
      "bug4_y": 30,
      "bug4_rot": -7,
      "bug5_x": 4,
      "bug5_y": 48,
      "bug5_rot": 111,
      "bug6_x": 1,
      "bug6_y": -54,
      "bug6_rot": -162,
      "legRotOffset": 0,
};
let letterC =  {
  "bug1_x": 36,
      "bug1_y": -50,
      "bug1_rot": -165.6,
      "bug2_x": -35,
      "bug2_y": -10,
      "bug2_rot": 180,
      "bug3_x": -33,
      "bug3_y": 28,
      "bug3_rot": 115,
      "bug4_x": 9,
      "bug4_y": 32,
      "bug4_rot": -86,
      "bug5_x": -7,
      "bug5_y": -70,
      "bug5_rot": -136,
      "bug6_x": 26,
      "bug6_y": -76,
      "bug6_rot": -90,
      "legRotOffset": 0,
};


const colorBody  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

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

function drawLetter(letterData) {
  angleMode(DEGREES);
  ellipseMode(CENTER);
  rectMode(CENTER);
  colorMode(HSB);

  translate(50, 100);

  // load in all bugs
  let bugs = [];
  for (let i = 1; i <= 6; i++) {
    let bugString = "bug"+i+"_";
    let xString = bugString+"x";
    let x = letterData[xString];
    let y = letterData[bugString+"y"];
    let rot = letterData[bugString+"rot"];
    let col = color(360.0/6.0 * i, 100, 100);
    bugs[i-1] = new Bug(x, y, rot, col);

  }

  // draw all bugs
  push();
  for (let bug of bugs) {
    bug.draw();
  }
  pop();

}




function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2-100;
  let center_y = canvasHeight / 3- 50;


  // draw the letters A, B, C from saved data
  push();
  translate(center_x - 250, center_y);
  scale(1.5);
  drawLetter(letterA);
  pop();

  push();
  translate(center_x, center_y);
  scale(1.5);
  drawLetter(letterB);
  pop();

  push();
  translate(center_x + 250, center_y);
  scale(1.5);
  drawLetter(letterC);
  pop();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
