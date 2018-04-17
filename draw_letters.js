
//const colorFront  = "#199cff";
const colorStroke = "#233f11";
//const colorBack = "#e3eded";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(20);

  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = 50+letterData["offsetx"];
  //let pos2y = 150+letterData["offsety"];
  let rlx = letterData["rx1"];
  let rly = letterData["ry1"];
  let rlx2 = letterData["rx2"];
  let rly2 = letterData["ry2"];

  let olx = letterData["ox1"];
  let oly = letterData["oy1"];
  let olx2 = letterData["ox2"];
  let oly2 = letterData["oy2"];

  let ex = letterData["c1x"];
  let ey = letterData["c1y"];
  let ex2 = letterData["c2x"];
  let ey2 = letterData["c2y"]; 

  //red
   stroke(255, 69, 0);
   strokeCap(ROUND);
   line(rlx, rly, rlx2, rly2);
  
  //gold
    stroke(255, 165, 0);
    strokeCap(ROUND);
    line(olx, oly, olx2, oly2);

  //circle 1
    fill(255);
    strokeWeight(15)
    stroke(255, 215, 0);
    ellipse(ex,ey,50,50)
  //circle 2
    ellipse(ex2,ey2,50,50)

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
   new_letter["rx1"] = map(percent, 0, 100, oldObj["rx1"], newObj["rx1"]);
   new_letter["ry1"] = map(percent, 0, 100, oldObj["ry1"], newObj["ry1"]);
   new_letter["rx2"] = map(percent, 0, 100, oldObj["rx2"], newObj["rx2"]);
   new_letter["ry2"] = map(percent, 0, 100, oldObj["ry2"], newObj["ry2"]);
   new_letter["ox1"] = map(percent, 0, 100, oldObj["ox1"], newObj["ox1"]);
   new_letter["oy1"] = map(percent, 0, 100, oldObj["oy1"], newObj["oy1"]);
   new_letter["ox2"] = map(percent, 0, 100, oldObj["ox2"], newObj["ox2"]);
   new_letter["oy2"] = map(percent, 0, 100, oldObj["oy2"], newObj["oy2"]);
   new_letter["c1x"] = map(percent, 0, 100, oldObj["c1x"], newObj["c1x"]);
   new_letter["c1y"] = map(percent, 0, 100, oldObj["c1y"], newObj["c1y"]);
   new_letter["c2x"] = map(percent, 0, 100, oldObj["c2x"], newObj["c2x"]);
   new_letter["c2y"] = map(percent, 0, 100, oldObj["c2y"], newObj["c2y"]);
   return new_letter;
 }





