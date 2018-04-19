const colorFront  = "#ffb7ce";
const colorStroke = "#ffb7ce"; 

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

  //first circle parameters
  let size = letterData["size"];
  let posx = letterData["posx"];
  let posy = letterData["posy"];

  //second circle parameters
  let size2 = letterData["size2"];
  let pos2x = 50 + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  //line parameters
  let startx = letterData["x1"];
  let starty = 150 + letterData["y1"];
  let addx = letterData["x2"];
  let endy = 150 + letterData["y2"];

  //arc parameters
  let posarc = letterData["posarc"];
  let arcx = letterData["arcx"];
  let arcy = letterData["arcy"];

  //drawing an arc
  noFill();
  strokeWeight (30);
  arc(arcx, arcy, 60, 60, posarc, PI);
  strokeWeight (4);
  fill(colorFront);



  //drawing two circles
  fill(colorFront);
  ellipse(posx, posy, size, size);
  fill(colorBack);
  stroke(colorBack);
  ellipse(pos2x, pos2y, size2, size2);
  
    //drawing a line
  stroke(colorStroke);
  fill(colorFront);
  strokeWeight (30);
  line(startx, starty, startx, endy);
  strokeWeight (4);

}


function interpolate_letter(percent, oldObj, newObj) {
    let new_letter = {};
    new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
    new_letter["posx"] = map(percent, 0, 100, oldObj["posx"], newObj["posx"]);
    new_letter["posy"] = map(percent, 0, 100, oldObj["posy"], newObj["posy"]);

    new_letter["size2"] = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
    new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
    new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
    new_letter["x1"] = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
    new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
    new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
    new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);

    new_letter["posarc"] = map(percent, 0, 100, oldObj["posarc"], newObj["posarc"]);
    new_letter["arcx"] = map(percent, 0, 100, oldObj["arcx"], newObj["arcx"]);
    new_letter["arcy"] = map(percent, 0, 100, oldObj["arcy"], newObj["arcy"]);

    return new_letter;
  }

























