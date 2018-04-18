/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  fill (142, 38, 43, 150);
  strokeWeight (0);

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
  rotate (rotation); // If the Letter needs Rotating it will Rotate.
  triangle(xM, yM, x1, y1A, x1, y1B); // Triangle 1
  triangle(xM, yM , x2, y2A, x2, y2B); // Triangle 2
  triangle(xM, yM, x3, y3A, x3, y3B); // Triangle 3
  pop();

  // noFill();
  // strokeWeight (1);
  // rect (0, 0, 100, 200);
}
