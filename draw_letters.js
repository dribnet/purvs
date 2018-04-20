/*
 * Letters drawn to the specifications given. Simple transformations provided.
 * Uses all the parameters allowed for this project.
 */
function drawLetter(letterData) {
  // color/stroke setup
  // Fill specified here instead of in a variable so that I could include an Alpha condition.
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
}

function interpolate_letter(percent, oldObj, newObj){
  // The linear transition code given out in class Suffices for my interpolations
  // because the letters are complex they need a simple transforma
  let new_letter = {};
  new_letter["xMain"] = map (percent, 0, 100, oldObj["xMain"], newObj["xMain"]);
  new_letter["yMain"] = map (percent, 0, 100, oldObj["yMain"], newObj["yMain"]);
  new_letter["tri1X"] = map (percent, 0, 100, oldObj["tri1X"], newObj["tri1X"]);
  new_letter["tri1Ya"] = map (percent, 0, 100, oldObj["tri1Ya"], newObj["tri1Ya"]);
  new_letter["tri1Yb"] = map (percent, 0, 100, oldObj["tri1Yb"], newObj["tri1Yb"]);
  new_letter["tri2X"] = map (percent, 0, 100, oldObj["tri2X"], newObj["tri2X"]);
  new_letter["tri2Ya"] = map (percent, 0, 100, oldObj["tri2Ya"], newObj["tri2Ya"]);
  new_letter["tri2Yb"] = map (percent, 0, 100, oldObj["tri2Yb"], newObj["tri2Yb"]);
  new_letter["tri3X"] = map (percent, 0, 100, oldObj["tri3X"], newObj["tri3X"]);
  new_letter["tri3Ya"] = map (percent, 0, 100, oldObj["tri3Ya"], newObj["tri3Ya"]);
  new_letter["tri3Yb"] = map (percent, 0, 100, oldObj["tri3Yb"], newObj["tri3Yb"]);
  new_letter["rotate"] = map (percent, 0, 100, oldObj["rotate"], newObj["rotate"]);

  return new_letter;
}