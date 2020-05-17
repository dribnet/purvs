function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  let posx1 = 50+letterData["x1"];
  let posy1 = 100+letterData["y1"];
  let posw1 = letterData["w1"];
  let posh1 = letterData["h1"];

  let posx2 = 50+letterData["x2"];
  let posy2 = 100+letterData["y2"];
  let posw2 = letterData["w2"];
  let posh2 = letterData["h2"];

  let posx3 = 50+letterData["x3"];
  let posy3 = 100+letterData["y3"];
  let posw3 = letterData["w3"];
  let posh3 = letterData["h3"];


  let posx4 = 50+letterData["x4"];
  let posy4 = 100+letterData["y4"];
  let posw4 = letterData["w4"];
  let posh4 = letterData["h4"];

  // draw two circles
  push()
  rectMode(CENTER)
  fill(colorFront4)
  rect(50, 100, 100, 200, 20)

  fill(colorFront1);
  rect(posx1, posy1, posw1, posh1, 15)

  fill(colorFront2);
  rect(posx2, posy2, posw2, posh2, 15)

  fill(colorFront3);
  rect(posx3, posy3, posw3, posh3, 15)
  rect(posx4, posy4, posw4, posh4, 15)
  pop()

  //   fill(colorFront1);
  // ellipse(50, 150, 75, 75);
  // fill(colorFront2);
  // ellipse(pos2x, pos2y, size2, size2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]