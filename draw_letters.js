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
  line(pos1x,pos1y,pos2x,pos2y);
  line(pos3x,pos3y,pos4x,pos4y);
}
