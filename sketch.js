const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

  // 1 triangle(xMain, yMain, tri1X, tri1Ya, tri1X, tri1Yb);
  // 2 triangle(xMain, yMain, xQuad, tri2Ya, xQuad, tri2Yb);
  // 3 triangle(xMain, yMain, xQuad, tri3Ya, xQuad, tri3Yb);

const letterA = {
  "xMain": -100,//Start Point X.
  "yMain": 0,//Start Point Y,
  "xQuad": 50,//The X points in a row.
  "tri1X": 0,//Coordinates for the other points of Triangle 1.
  "tri1Ya": -50,
  "tri1Yb": 50,
  "tri2Ya": 75,//Coordinates for the other points of Triangle 2.
  "tri2Yb": 25,
  "tri3Ya": -75,//Coordinates for the other points of Triangle 3.
  "tri3Yb": -25,
  "rotate": 90//Rotate depending on whether the design is verticle or not.
}

const letterB = {
  "xMain": -75,//Start Point X.
  "yMain": -60,//Start Point Y,
  "xQuad": 75,//The X points in a row.
  "tri1X": 47,//Coordinates for the other points of Triangle 1.
  "tri1Ya": 0,
  "tri1Yb": -75,
  "tri2Ya": -50,//Coordinates for the other points of Triangle 2.
  "tri2Yb": -100,
  "tri3Ya": 50,//Coordinates for the other points of Triangle 3.
  "tri3Yb": -25,
  "rotate": 0//Rotate depending on whether the design is verticle or not.
}

const letterC = {
  "xMain": -75,//Start Point X.
  "yMain": -25,//Start Point Y,
  "xQuad": 75,//The X points in a row.
  "tri1X": 50,//Coordinates for the other points of Triangle 1.
  "tri1Ya": -87,
  "tri1Yb": 37,
  "tri2Ya": -50,//Coordinates for the other points of Triangle 2.
  "tri2Yb": -100,
  "tri3Ya": 0,//Coordinates for the other points of Triangle 3.
  "tri3Yb": 50,
  "rotate": 0//Rotate depending on whether the design is verticle or not.
}









//TO FIX!!!!


// const colorFront  = color(204, 102, 0);
// const colorBack   = color(204, 153, 0);
// const colorStroke = color(153, 51, 0);









function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  angleMode (DEGREES);






  //TO FIX!!!

  // color/stroke setup
  // fill (colorFront);
  // stroke (colorStroke);
  // strokeWeight (10);








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
  background (66, 244, 235);
  // Sets the settings for the shapes that make the fonts.







  //Need to Fix Possibly.
  fill (255, 122, 122, 150);








  stroke (56, 56, 56);
  strokeWeight (0);

  // Compute the center of the canvas.
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // Draws the Letters.
  drawLetter (center_x - 250, center_y, letterA);
  drawLetter (center_x, center_y, letterB);
  drawLetter (center_x + 250, center_y, letterC);


  // //B
  // push();
  // translate (center_x, center_y);
  // ellipse (0, 0, 10)
  // triangle(-75, -60, 47, 0, 47, -75);

  // triangle(-75, -60, 75, -50, 75, -100);
  // triangle(-75, -60, 75, 50, 75, -25);
  // pop();
}

function keyTyped () {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
