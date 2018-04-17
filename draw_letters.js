const colorFront  = "#253d63";
const colorStroke = "#ffffff";

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
  strokeWeight(4);
  strokeCap(ROUND);

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


  //3 thinner lines
  stroke(255); //192, 214, 249
  line(pos3x,pos3y,pos4x,pos4y);
  line(pos5x,pos5y,pos6x,pos6y);
  line(pos7x,pos7y,pos8x,pos8y);

  strokeWeight(8);
  //stroke(44, 72, 96); //242, 247, 255   44, 72, 96
  line(posx,posy,pos2x,pos2y); //The thicker line
}
function interpolate_letter(percent, oldObj, newObj){
let new_letter = {};
new_letter["ptx"] = map(percent, 0, 100, oldObj["ptx"], newObj["ptx"]);
new_letter["pty"] = map(percent, 0, 100, oldObj["pty"], newObj["pty"]);

new_letter["ptx2"] = map(percent, 0, 100, oldObj["ptx2"], newObj["ptx2"]);
new_letter["pty2"] = map(percent, 0, 100, oldObj["pty2"], newObj["pty2"]);

new_letter["ptx3"] = map(percent, 0, 100, oldObj["ptx3"], newObj["ptx3"]);
new_letter["pty3"] = map(percent, 0, 100, oldObj["pty3"], newObj["pty3"]);

new_letter["ptx4"] = map(percent, 0, 100, oldObj["ptx4"], newObj["ptx"]);
new_letter["pty4"] = map(percent, 0, 100, oldObj["pty4"], newObj["pty4"]);

new_letter["ptx5"] = map(percent, 0, 100, oldObj["ptx5"], newObj["ptx5"]);
new_letter["pty5"] = map(percent, 0, 100, oldObj["pty5"], newObj["pty5"]);

new_letter["ptx6"] = map(percent, 0, 100, oldObj["ptx6"], newObj["ptx6"]);
new_letter["pty6"] = map(percent, 0, 100, oldObj["pty6"], newObj["pty6"]);

new_letter["ptx7"] = map(percent, 0, 100, oldObj["ptx7"], newObj["ptx7"]);
new_letter["pty7"] = map(percent, 0, 100, oldObj["pty7"], newObj["pty7"]);

new_letter["ptx8"] = map(percent, 0, 100, oldObj["ptx8"], newObj["ptx8"]);
new_letter["pty8"] = map(percent, 0, 100, oldObj["pty8"], newObj["pty8"]);

return new_letter;
}






// Git ID for initial sketch ideas 
// 4ebfcd36e8a36e6114e76410a1b9e83d736e7701