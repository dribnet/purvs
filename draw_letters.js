/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const White  = "#FFFFFF";
const black  = "#000000";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  let posx = 50;
  let posy = 50;
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
//  let pos3x = letterB["offsetx"];//letter b
  //let pos3y = letterB["offsety"];//letter B
  // let rectwidth =  letterB["rectwidth"];
  // let rectheight = letterB["rectheight"];

  // let trix1 = letterA["coordX1"];//triangle x coord 1
  // let trix2 = letterA["coordX2"];//triangle x coord 2
  // let trix3 = letterA["coordX3"];//triangle x coord 3
  //
  // let triy1 = letterA["offsety"];//triangle y coord 1
  // let triy2 = letterA["offsety"];//triangle y coord 2
  // let triy3 = letterA["offsety"];//triangle y coord 3
  //
  // let rectx1 = letterA["rectX1"];
  // let recty1 = letterA["rectY1"];

  // draw two circles
  strokeWeight(5);
  fill(black);
  rect(posx-5,posy,12,120,0,0,5,5);//main rectangle
  rect(posx+17,posy+25,25,10,0,5,5,0);//small rect up top right of the top circle
  rect(posx-42,posy+100,25,10,5,0,0,5);//small rect on the left side
  // rect(rectx1+194, recty1+265, rectwidth, rectheight-80);
  // triangle(trix1+165, triy1+25, trix2+170, triy2-15, trix3+175, triy3+25);
  fill(White);
  stroke(black);
  ellipse(posx, posy+36, 60, 60);//The circle on the top of the B
  ellipse(posx, posy+100, 60, 60);//The circle on the bottom of the B

  fill(black);
  ellipse(pos2x, pos2y+100, size2-55, size2-55);//Small black circle

  fill(White);
  noStroke();
  ellipse(posx-2, posy+26, 6,6);//small white circle


}

function interpolate_letter(perc90t, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
