const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * The layout of my variables and how they interact with the letterforms:
 *
  1 triangle(xMain, yMain, tri1X, tri1Ya, tri1X, tri1Yb);
  2 triangle(xMain, yMain, xQuad, tri2Ya, xQuad, tri2Yb);
  3 triangle(xMain, yMain, xQuad, tri3Ya, xQuad, tri3Yb);

  rotate - is there just the letter structure requires the xQuad variable
  to relate to the y axis rather than the x. however it simply rotates the
  letterforms so that they can use the settings all ready in place.
 *
 *
 */

const letterA = {
  "xMain": -100,
  "yMain": 0,
  "xQuad": 50,
  "tri1X": 0,
  "tri1Ya": -50,
  "tri1Yb": 50,
  "tri2Ya": 75,
  "tri2Yb": 25,
  "tri3Ya": -75,
  "tri3Yb": -25,
  "rotate": 90
}

const letterB = {
  "xMain": -75,
  "yMain": -60,
  "xQuad": 75,
  "tri1X": 47,
  "tri1Ya": 0,
  "tri1Yb": -75,
  "tri2Ya": -50,
  "tri2Yb": -100,
  "tri3Ya": 50,
  "tri3Yb": -25,
  "rotate": 0
}

const letterC = {
  "xMain": -75,
  "yMain": -25,
  "xQuad": 75,
  "tri1X": 50,
  "tri1Ya": -87,
  "tri1Yb": 37,
  "tri2Ya": -50,
  "tri2Yb": -100,
  "tri3Ya": 0,
  "tri3Yb": 50,
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
  let xQ = letterData["xQuad"];
  // Variables for the other Points on the 1st Triangle.
  let x1 = letterData["tri1X"];
  let y1A = letterData["tri1Ya"];
  let y1B = letterData["tri1Yb"];
  // Variables for the other Points on the 2nd Triangle.
  let y2A = letterData["tri2Ya"];
  let y2B = letterData["tri2Yb"];
  // Variables for the other Points on the 3rd Triangle.
  let y3A = letterData["tri3Ya"];
  let y3B = letterData["tri3Yb"];
  // Variables determines whether or not to rotate the letter.
  let rotation = letterData["rotate"];

  // Makes me the Letterform
  push(); // Contains the shapes.
  translate (posx, posy); // Sets the position
  rotate (rotation); // If the Letter needs Rotating it will Rotate.
  triangle(xM, yM, x1, y1A, x1, y1B); // Triangle 1
  triangle(xM, yM, xQ, y2A, xQ, y2B); // Triangle 2
  triangle(xM, yM, xQ, y3A, xQ, y3B); // Triangle 3
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
