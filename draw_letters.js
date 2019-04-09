// changed colorFronts to arrays so I could pass it into fill function and add alpha value 
const colorFront1  = [46, 139, 87]; // sea green #2E8B57
const colorFront2  = [173, 255, 87]; // greenyellow #ADFF2F
const colorStroke  = "#233f11";

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
  strokeWeight(4);

  // determine parameters for second circle
  let size1 = letterData["size"] + 70;
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];
  let start = letterData["arcStart"];
  let stop = letterData["arcStop"];
  
  let bigArc = letterData["bigArc"];
  if(bigArc) size1 = 100;
  
  let arcMode = letterData["arcMode"];
  

  // draw two arcs
  fill(colorFront1[0], colorFront1[1], colorFront1[2], 255);
  if(arcMode == "PIE") arc(50, 100, size1, size1, radians(start), radians(stop), PIE);
  else arc(50, 100, size1, size1, radians(start), radians(stop), CHORD);

  fill(colorFront2[0], colorFront2[1], colorFront2[2], 160);
  if(arcMode == "PIE") arc(pos2x, pos2y, size2, size2, radians(start), radians(stop), PIE);
  else arc(pos2x, pos2y, size2, size2, radians(start), radians(stop), CHORD);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]     = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"]  = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"]  = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["arcStart"] = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcStart"] = map(percent, 0, 100, oldObj["arcStop"], newObj["arcStop"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]