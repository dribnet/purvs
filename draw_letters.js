const colorFront  = "#ffbc14";
const colorStroke = "#000000";

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

  let ptx = 0;
  let pty = 0;

  let posx = ptx + letterData["ptx"];
  let posy = pty + letterData["pty"];

  let pos2x = ptx + letterData["ptx2"];
  let pos2y = pty + letterData["pty2"];

  let pos3x = ptx + letterData["ptx3"];
  let pos3y = pty + letterData["pty3"];

  let pos4x = ptx + letterData["ptx4"];
  let pos4y = pty + letterData["pty4"];

  let pos5x = ptx + letterData["ptx5"];
  let pos5y = pty + letterData["pty5"];

  let pos6x = ptx + letterData["ptx6"];
  let pos6y = pty + letterData["pty6"];

  let pos7x = ptx + letterData["ptx7"];
  let pos7y = pty + letterData["pty7"];

  let pos8x = ptx + letterData["ptx8"];
  let pos8y = pty + letterData["pty8"];

  strokeWeight(8)
  line(posx,posy,pos2x,pos2y);
  strokeWeight(5);
  line(pos3x,pos3y,pos4x,pos4y);
  line(pos5x,pos5y,pos6x,pos6y);
  line(pos7x,pos7y,pos8x,pos8y);
}






// Git ID for initial sketch ideas 
// 4ebfcd36e8a36e6114e76410a1b9e83d736e7701