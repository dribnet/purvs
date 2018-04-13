// const colorFront  = "#199cff";
// const colorStroke = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

const color1  = 'rgba(250,210,0, 0.75)';
const color2 = 'rgba(237,33,44, 0.75)';
const color3 = 'rgba(31,36,102, 0.75)';
// const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function drawLetter(letterData) {
  angleMode(DEGREES);

  let posx = 0;
  let posy = 0;
  let size = 1;


  let size2 = letterData["size"];
  let size3 = letterData["size3"];
  let size4 = letterData["size4"];

  let posx1 = posx + letterData["x1"];
  let posy1 = posy + letterData["y1"];
  let posx2 = posx + letterData["x2"];
  let posy2 = posy + letterData["y2"];
  let posx3 = posx + letterData["x3"];
  let posy3 = posy + letterData["y3"];

  noStroke();

  // color/stroke setup
  // fill(colorFront);
  // stroke(colorStroke);
  // strokeWeight(4);

  // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = 50+letterData["offsetx"];
  // let pos2y = 150+letterData["offsety"];

  // draw two circles
  // ellipse(50, 150, 100, 100);
  // ellipse(pos2x, pos2y, size2, size2);


  fill(color2);
  arc(posx1, posy1, size2, size2,180,360);//red

  fill(color3);
  arc(posx3, posy3, size4, size4, 0, 180);//blue
  
  fill(color1);
  arc(posx2, posy2, size3, size3, 90, 270);//yellow
  

}
