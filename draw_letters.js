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

  let posx=0;
  let posy=0;
  let scale = 0;
  fill(colorFront);
  noStroke ();

  // determine parameters for second circle
  let size2 = letterData["lengthV2"];
  let pos3x = posx + letterData["offsetxV1"];
  let pos4x = posx + letterData["offsetxV2"];
  let pos2y = posy + letterData["offsetyH1"];
  let pos3y = posy + letterData["offsetyH2"];
  let pos4y = posy + letterData["offsetyH3"];
  let pos5y = posy + letterData["offsetyV2"];

  // draw two circles
  rect(pos3x, posy, 25, 200);
  rect(pos4x, pos5y, 25, size2);
  rect(0, pos2y, 100, 10);
  rect(0, pos3y,100, 10);
  rect(0, pos4y, 100, 10);
}
function interpolate_letter(percent, oldObj, newObj) {
  let new_obj = {};
  new_obj ["lengthV2"] = map(percent, 0, 100, oldObj["lengthV2"], newObj["lengthV2"]);
  new_obj ["offsetxV1"] = map(percent, 0, 100, oldObj["offsetxV1"], newObj["offsetxV1"]);
  new_obj ["offsetxV2"] = map(percent, 0, 100, oldObj["offsetxV2"], newObj["offsetxV2"]);
  new_obj ["offsetyH1"] = map(percent, 0, 100, oldObj["offsetyH1"], newObj["offsetyH1"]);
  new_obj ["offsetyH2"] = map(percent, 0, 100, oldObj["offsetyH2"], newObj["offsetyH2"]);
  new_obj ["offsetyH3"] = map(percent, 0, 100, oldObj["offsetyH3"], newObj["offsetyH3"]);
  new_obj ["offsetyV2"] = map(percent, 0, 100, oldObj["offsetyV2"], newObj["offsetyV2"]);
  return new_obj;
}