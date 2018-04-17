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
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
     let posx = letterData["x"];
  let posy = letterData["y"];

  let pos2x = letterData["x2"];
  let pos2y = letterData["y2"];

  let pos3x = letterData["x3"];
  let pos3y = letterData["y3"];

  let pos4x = letterData["x4"];
  let pos4y = letterData["y4"];

  let pos5x = letterData["x5"];
  let pos5y = letterData["y5"];

  let pos6x = letterData["x6"];
  let pos6y = letterData["y6"];

  let pos7x = letterData["x7"];
  let pos7y = letterData["y7"];

  let pos8x = letterData["x8"];
  let pos8y = letterData["y8"];

 let pos9x = letterData["x9"];
 let pos9y = letterData["y9"];

 let pos10x = letterData["x10"];
 let pos10y = letterData["y10"];

push();
stroke(255,105,180);
strokeWeight(6);
smooth();
noFill();
  line(posx,posy,pos2x,pos2y);
  line(pos3x,pos3y,pos4x,pos4y);
  line(pos5x,pos5y,pos6x,pos6y);
  line(pos7x,pos7y,pos8x,pos8y);
  line(pos9x,pos9y,pos10x,pos10y);

pop();


stroke(255);
strokeWeight(3);
  line(posx,posy,pos2x,pos2y);
  line(pos3x,pos3y,pos4x,pos4y);
  line(pos5x,pos5y,pos6x,pos6y);
  line(pos7x,pos7y,pos8x,pos8y);
  line(pos9x,pos9y,pos10x,pos10y);



}
