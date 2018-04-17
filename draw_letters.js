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
  //fill(colorFront);

  noFill();
  stroke(colorStroke);
  strokeWeight(6);

  let posx = 50;
  let posy = 100;
  let scale = 100;


  let posiix = posx + letterData["x"];
  let posiiy = posy + letterData["y"];
  let posix = posx + letterData["x1"];
  let posiy = posy + letterData["y1"];
  let pos1x = posx + letterData["x2"];
  let pos1y = posy + letterData["y2"];
  let pos2x = posx + letterData["x3"];
  let pos2y = posy + letterData["y3"];
  let pos3x = posx + letterData["x4"];
  let pos3y = posy + letterData["y4"];
  let pos4x = posx + letterData["x5"];
  let pos4y = posy + letterData["y5"];
  angleMode(DEGREES);
  stroke(300);
  arc(posx,posy,100,100,posix,posiy);
  arc(posx,posy,100,100,posiix,posiiy);
  //stroke('yellow');
  line(pos1x,pos1y,pos2x,pos2y);
  //stroke('red');
  line(pos3x,pos3y,pos4x,pos4y);
}
function interpolate_letter(percent, oldObj, newObj){
  let new_letter = {};
  new_letter["x"] = map(percent, 0, 100, oldObj["x"], newObj["x"]);
  new_letter["y"] = map(percent, 0, 100, oldObj["y"], newObj["y"]);
  new_letter["x1"] = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["x4"] = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
  new_letter["x5"] = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
  new_letter["y5"] = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
  return new_letter;

}