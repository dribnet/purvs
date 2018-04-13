const colorFront  = "#199cff";
const colorStroke = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  fill(75);
  stroke(colorStroke);

  // determine parameters for arcs
  //let size2 = letterData["size"];
  //let pos2x = 50+letterData["offsetx"];
  //let pos2y = 150+letterData["offsety"];

  let outer_arcStart = letterData["box1"]["arcStart"];
  let outer_arcEnd = letterData["box1"]["arcEnd"];
  let mid_arcStart = letterData["box2"]["arcStart"];
  let mid_arcEnd = letterData["box2"]["arcEnd"];
  let inner_arcStart = letterData["box3"]["arcStart"];
  let inner_arcEnd = letterData["box3"]["arcEnd"];

  // draw three arcs

  noFill();
  stroke(220);
  angleMode(DEGREES);

  push();
    scale(0.6);
    translate(50, 70);
    strokeWeight(12);
    arc(50, 100, 200, 200, outer_arcStart, outer_arcEnd);
    strokeWeight(10);
    arc(50, 100, 150, 150, mid_arcStart, mid_arcEnd);
    strokeWeight(8);
    arc(50, 100, 100, 100, inner_arcStart, inner_arcEnd);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {
    "box1": {},
    "box2": {},
    "box3": {}
  };
  new_letter["box1"]["arcStart"] = map(percent, 0, 100, oldObj["box1"]["arcStart"], newObj["box1"]["arcStart"]);
  new_letter["box1"]["arcEnd"] = map(percent, 0, 100, oldObj["box1"]["arcEnd"], newObj["box1"]["arcEnd"]);
  new_letter["box2"]["arcStart"] = map(percent, 0, 100, oldObj["box2"]["arcStart"], newObj["box2"]["arcStart"]);
  new_letter["box2"]["arcEnd"] = map(percent, 0, 100, oldObj["box2"]["arcEnd"], newObj["box2"]["arcEnd"]);
  new_letter["box3"]["arcStart"] = map(percent, 0, 100, oldObj["box3"]["arcStart"], newObj["box3"]["arcStart"]);
  new_letter["box3"]["arcEnd"] = map(percent, 0, 100, oldObj["box3"]["arcEnd"], newObj["box3"]["arcEnd"]);
  return new_letter;
}
