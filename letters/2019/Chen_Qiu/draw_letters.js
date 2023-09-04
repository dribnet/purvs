//const colorFront1  = "#199cff";
//const colorFront2  = "#59ccff";
//const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  //stroke(colorStroke);
  //strokeWeight(4);



  // determine parameters for second circle
  let size1 = letterData["size1"];
  let size2 = letterData["size2"];
  let size3 = letterData["size3"];
  let size4 = letterData["size4"];
  let posX1 = letterData["posX1"];
  let posY1 = letterData["posY1"];
  let posX2 = letterData["posX2"];
  let posY2 = letterData["posY2"];
  let posX3 = letterData["posX3"];
  let posY3 = letterData["posY3"];
  let posX4 = letterData["posX4"];
  let posY4 = letterData["posY4"];
  // draw two circles
  //fill(colorFront1);
  //ellipse(50, 150, 75, 75);
  //fill(colorFront2);
  //ellipse(pos2x, pos2y, size2, size2);

  // fill(100);
  // rect(0, 0, 100, 200);

  let c = color('#ffffff');

push()

  // draw 4 quads
  rectMode(CENTER);
  noStroke();

push()
  fill(63, 114, 175, 200);
  translate(posX1,posY1);
  quad(size1,0,size1*2,size1*2,size1,size1*4,0,size1*2);
pop() ;

push()
  fill(17, 45, 78, 150);
  translate(posX2,posY2);
   quad(size2,0,size2*2,size2*2,size2,size2*4,0,size2*2);
pop();

  noFill();
  strokeWeight(8);
  stroke(c);

  push()
    translate(posX3,posY3);
    quad(size3,0,size3*2,size3*2,size3,size3*4,0,size3*2);
  pop();

  push()
  translate(posX4,posY4);
  quad(size4,0,size4*2,size4*2,size4,size4*4,0,size4*2);
  pop();

pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size1"] = map(percent, 0, 100, oldObj["size1"], newObj["size1"]);
  new_letter["size2"] = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["size3"] = map(percent, 0, 100, oldObj["size3"], newObj["size3"]);
  new_letter["size4"] = map(percent, 0, 100, oldObj["size4"], newObj["size4"]);
  new_letter["posX1"] = map(percent, 0, 100, oldObj["posX1"], newObj["posX1"]);
  new_letter["posY1"] = map(percent, 0, 100, oldObj["posY1"], newObj["posY1"]);

  new_letter["posX2"] = map(percent, 0, 100, oldObj["posX2"], newObj["posX2"]);
  new_letter["posY2"] = map(percent, 0, 100, oldObj["posY2"], newObj["posY2"]);

  new_letter["posX3"] = map(percent, 0, 100, oldObj["posX3"], newObj["posX3"]);
  new_letter["posY3"] = map(percent, 0, 100, oldObj["posY3"], newObj["posY3"]);

  new_letter["posX4"] = map(percent, 0, 100, oldObj["posX4"], newObj["posX4"]);
  new_letter["posY4"] = map(percent, 0, 100, oldObj["posY4"], newObj["posY4"]);

  return new_letter;
}

var swapWords = [
  "ICEFIELD",
  "TRAINING",
  "PROGRAMS"
]
