const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * The layout of my variables and how they interact with the letterforms:
 *
  1 triangle(xMain, yMain, tri1X, tri1Ya, tri1X, tri1Yb);
  2 triangle(xMain, yMain, tri2X, tri2Ya, tri2X, tri2Yb);
  3 triangle(xMain, yMain, tri3X, tri3Ya, tri3X, tri3Yb);

  rotate - is there just the letter structure requires the tri2X or tri3X
  variables to relate to the y axis rather than the x. however it simply 
  rotates the letterforms so that they can use the settings all ready in place.
 *
 *
 */

const letterA = {
  "xMain": 0,
    "yMain": -50,
    "tri1X": 150,
    "tri1Ya": -87.5,
    "tri1Yb": -12.5,
    "tri2X": 200,
    "tri2Ya": -30,
    "tri2Yb": 0,
    "tri3X": 200,
    "tri3Ya": -100,
    "tri3Yb": -70,
    "rotate": 90
}

const letterB = {
  "xMain": 0,
    "yMain": 100,
    "tri1X": 75,
    "tri1Ya": 55,
    "tri1Yb": 140,
    "tri2X": 90,
    "tri2Ya": 0,
    "tri2Yb": 80,
    "tri3X": 100,
    "tri3Ya": 100,
    "tri3Yb": 200,
    "rotate": 0
}

const letterC = {
  "xMain": 0,
    "yMain": 100,
    "tri1X": 75,
    "tri1Ya": 25,
    "tri1Yb": 175,
    "tri2X": 100,
    "tri2Ya": 0,
    "tri2Yb": 50,
    "tri3X": 100,
    "tri3Ya": 120,
    "tri3Yb": 200,
    "rotate": 0
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  angleMode (DEGREES);

  // With no animation, redrawing the screen is not necessary.
  noLoop ();
}

function drawLetter (posx, posy, letterData) {
  // Variables for the Points shared by all Triangles.
  let xM = letterData["xMain"];
  let yM = letterData["yMain"];
  // Variables for the other Points on the 1st Triangle.
  let x1 = letterData["tri1X"];
  let y1A = letterData["tri1Ya"];
  let y1B = letterData["tri1Yb"];
  // Variables for the other Points on the 2nd Triangle.
  let x2 = letterData["tri2X"];
  let y2A = letterData["tri2Ya"];
  let y2B = letterData["tri2Yb"];
  // Variables for the other Points on the 3rd Triangle.
  let x3 = letterData["tri3X"];
  let y3A = letterData["tri3Ya"];
  let y3B = letterData["tri3Yb"];
  // Variables determines whether or not to rotate the letter.
  let rotation = letterData["rotate"];

  // Makes me the Letterform
  push(); // Contains the shapes.
  translate (posx-50, posy-100); // Sets the position
  rotate (rotation); // If the Letter needs Rotating it will Rotate.
  triangle(xM, yM, x1, y1A, x1, y1B); // Triangle 1
  triangle(xM, yM , x2, y2A, x2, y2B); // Triangle 2
  triangle(xM, yM, x3, y3A, x3, y3B); // Triangle 3
  pop();
}

function draw () {
  // Clears the screen.
  background (227, 237, 237);
  // Sets the settings for the shapes that make the fonts.

  fill (142, 38, 43, 150);

  strokeWeight (0);

  // Compute the center of the canvas.
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // Draws the Letters.
  drawLetter (center_x - 250, center_y, letterA);
  drawLetter (center_x, center_y, letterB);
  drawLetter (center_x + 250, center_y, letterC);
}

function keyTyped () {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
