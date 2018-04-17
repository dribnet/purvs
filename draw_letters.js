
const colorFront  = "#6ADEDD";
const colorStroke = "#DE5A78";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

    //bounding box
//  rect(0, 0, 100, 200); 


  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  //parameters for first triangle
  let pos1x = letterData["x"];
  let pos1y = letterData["y"];
  let pos2x = letterData["2x"];
  let pos2y = letterData["2y"];
  let pos3x = letterData["3x"];
  let pos3y = letterData["3y"];
  //parameters for second triangle  
  let pos4x = letterData["4x"];
  let pos4y = letterData["4y"];
  let pos5x = letterData["5x"];
  let pos5y = letterData["5y"];
  let pos6x = letterData["6x"];
  let pos6y = letterData["6y"];

  //draw two triangles
  triangle(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y);
  triangle(pos4x, pos4y, pos5x, pos5y, pos6x, pos6y);
}

 function interpolate_letter(percent, oldObj, newObj){
   let new_letter = {};
   new_letter["x"] = map(percent, 0, 100, oldObj["x"], newObj["x"]);
   new_letter["y"] = map(percent, 0, 100, oldObj["y"], newObj["y"]);
   new_letter["2x"] = map(percent, 0, 100, oldObj["2x"], newObj["2x"]);
   new_letter["2y"] = map(percent, 0, 100, oldObj["2y"], newObj["2y"]);
   new_letter["3x"] = map(percent, 0, 100, oldObj["3x"], newObj["3x"]);
   new_letter["3y"] = map(percent, 0, 100, oldObj["3y"], newObj["3y"]);
   new_letter["4x"] = map(percent, 0, 100, oldObj["4x"], newObj["4x"]);
   new_letter["4y"] = map(percent, 0, 100, oldObj["4y"], newObj["4y"]);
   new_letter["5x"] = map(percent, 0, 100, oldObj["5x"], newObj["5x"]);
   new_letter["5y"] = map(percent, 0, 100, oldObj["5y"], newObj["5y"]);
   new_letter["6x"] = map(percent, 0, 100, oldObj["6x"], newObj["6x"]);
   new_letter["6y"] = map(percent, 0, 100, oldObj["6y"], newObj["6y"]);
   return new_letter;
 }

 //  var swapWords = [
 // "NAME",
 // "HUMILITY",
 // "KINDNESS",
 // "DETACHED",
 // "PATIENCE"
 // ]