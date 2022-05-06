/* these are optional special variables which will change the system */
var systemBackgroundColor = "#9bc3e1";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  noStroke();
  let posx = 30
  let posy = 125
  //parameters for cutouts
//cutout 1 position        RECTANGLE 1
  let Cut1x1 = posx + letterData["IntCutoutx1"];
  let Cut1y1 = posy + letterData["IntCutouty1"];
//cutout 1 size
  let Cut1w1 = letterData["IntCutoutw1"];
  let Cut1h1 = letterData["IntCutouth1"];


//cutout 2 point 1        RECTANGLE 2
  let Cut2x1 = posx + letterData["IntCutout2x1"];
  let Cut2y1 = posy + letterData["IntCutout2y1"];
//cutout 2 point 2
  let Cut2w2 = letterData["IntCutout2w1"];
  let Cut2h2 = letterData["IntCutout2h1"];


//cutout 3 point 1        TRIANGLE 1
  let Cut3x1 = posx + letterData["IntCutout3x1"];
  let Cut3y1 = posy + letterData["IntCutout3y1"];
//cutout 3 point 2
  let Cut3x2 = posx + letterData["IntCutout3x2"];
  let Cut3y2 = posy + letterData["IntCutout3y2"];
//cutout 3 point 3
  let Cut3x3 = posx + letterData["IntCutout3x3"];
  let Cut3y3 = posy + letterData["IntCutout3y3"];


//cutout 4 point 1        TRIANGLE 2
  let Cut4x1 = posx + letterData["IntCutout4x1"];
  let Cut4y1 = posy + letterData["IntCutout4y1"];
//cutout 4 point 2
  let Cut4x2 = posx + letterData["IntCutout4x2"];
  let Cut4y2 = posy + letterData["IntCutout4y2"];
//cutout 4 point 3
  let Cut4x3 = posx + letterData["IntCutout4x3"];
  let Cut4y3 = posy +letterData["IntCutout4y3"];

  fill('#bb595f');
  rect(posx-20,posy-70,80,100);

  //fill('#ffffff');
  fill('#9bc3e1');
  rect(Cut1x1, Cut1y1, Cut1w1, Cut1h1);
  rect(Cut2x1, Cut2y1, Cut2w2, Cut2h2);

  triangle(Cut3x1, Cut3y1, Cut3x2, Cut3y2, Cut3x3, Cut3y3);
  triangle(Cut4x1, Cut4y1, Cut4x2, Cut4y2, Cut4x3, Cut4y3);
}

function interpolate_letter(percent, oldObj, newObj) {
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
