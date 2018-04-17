const colorFront  = "#199cff";
const colorStroke = "#233f11";

let x1 = null;
let x2 = null;
let y1 = null;
let y2 = null;

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

  let outer_arcStart = letterData["arcStart1"];
  let outer_arcEnd = letterData["arcEnd1"];
  let inner_arcStart = letterData["arcStart2"];
  let inner_arcEnd = letterData["arcEnd2"];
  let orient = letterData["lineOrient"];

  if(orient == 0){
    x1 = 50-40;
    x2 = 50+40;
    y1 = 100-40;
    y2 = 100-40;

  }
  if(orient == 1){
    x1 = 50-40;
    x2 = 50+40;
    y1 = 100+40;
    y2 = 100+40;
  }
  if(orient == 2){
    x1 = 50-40;
    x2 = 50-40;
    y1 = 100+40;
    y2 = 100-40;
  }
  if(orient == 3){
    x1 = 50+40;
    x2 = 50+40;
    y1 = 100+40;
    y2 = 100-40;
  }
  if(orient == 4){
    x1 = 50-40;
    x2 = 50+40;
    y1 = 100;
    y2 = 100;
  }
  if(orient == 5){
    x1 = 50;
    x2 = 50;
    y1 = 100-40;
    y2 = 100+40;
  }
  if(orient == 6){
    x1 = 50-30;
    x2 = 50+30;
    y1 = 100-30;
    y2 = 100+30;
  }
  if(orient == 7){
    x1 = 50-30;
    x2 = 50+30;
    y1 = 100+30;
    y2 = 100-30;
  }

  // draw two arcs and a line
  noFill();
  stroke(220);
  angleMode(DEGREES);

  push();
    scale(0.6);
    translate(50, 70);
    strokeWeight(12);
    arc(50, 100, 200, 200, outer_arcStart, outer_arcEnd);
    strokeWeight(8);
    arc(50, 100, 150, 150, inner_arcStart, inner_arcEnd);
    strokeWeight(7);
    line(x1, y1, x2, y2);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcStart1"] = map(percent, 0, 100, oldObj["arcStart1"], newObj["arcStart1"]);
  new_letter["arcEnd1"] = map(percent, 0, 100, oldObj["arcEnd1"], newObj["arcEnd1"]);
  new_letter["arcStart2"] = map(percent, 0, 100, oldObj["arcStart2"], newObj["arcStart2"]);
  new_letter["arcEnd2"] = map(percent, 0, 100, oldObj["arcEnd2"], newObj["arcEnd2"]);
  new_letter["lineOrient"] = map(percent, 0, 100, oldObj["lineOrient"], newObj["lineOrient"]);
  return new_letter;
}
