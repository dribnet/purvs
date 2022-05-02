/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
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

  //parameters for cutouts
//cutout 1 point 1
  let Cut1x1 = letterData["IntCutoutx1"];
  let Cut1y1 = letterData["IntCutouty1"];
//cutout 1 point 2
  let Cut1x2 = letterData["IntCutoutx2"];
  let Cut1y2 = letterData["IntCutouty2"];
//cutout 1 point 3
  let Cut1x3 = letterData["IntCutoutx3"];
  let Cut1y3 = letterData["IntCutouty3"];
//cutout 1 point 4
  let Cut1x4 = letterData["IntCutoutx4"];
  let Cut1y4 = letterData["IntCutouty4"];

//cutout 2 point 1
  let Cut2x1 = letterData["IntCutout2x1"];
  let Cut2y1 = letterData["IntCutout2y1"];
//cutout 2 point 2
  let Cut2x2 = letterData["IntCutout2x2"];
  let Cut2y2 = letterData["IntCutout2y2"];
//cutout 2 point 3
  let Cut2x3 = letterData["IntCutout2x3"];
  let Cut2y3 = letterData["IntCutout2y3"];
//cutout 2 point 4
  let Cut2x4 = letterData["IntCutout2x4"];
  let Cut2y4 = letterData["IntCutout2y4"];

//cutout 3 point 1
  let Cut3x1 = letterData["IntCutout3x1"];
  let Cut3y1 = letterData["IntCutout3y1"];
//cutout 3 point 2
  let Cut3x2 = letterData["IntCutout3x2"];
  let Cut3y2 = letterData["IntCutout3y2"];
//cutout 3 point 3
  let Cut3x3 = letterData["IntCutout3x3"];
  let Cut3y3 = letterData["IntCutout3y3"];
//cutout 3 point 4
  let Cut3x4 = letterData["IntCutout3x4"];
  let Cut3y4 = letterData["IntCutout3y4"];

//cutout 4 point 1
  let Cut4x1 = letterData["IntCutout4x1"];
  let Cut4y1 = letterData["IntCutout4y1"];
//cutout 4 point 2
  let Cut4x2 = letterData["IntCutout4x2"];
  let Cut4y2 = letterData["IntCutout4y2"];
//cutout 4 point 3
  let Cut4x3 = letterData["IntCutout4x3"];
  let Cut4y3 = letterData["IntCutout4y3"];
//cutout 4 point 4
  let Cut4x4 = letterData["IntCutout4x4"];
  let Cut4y4 = letterData["IntCutout4y4"];

// determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  // draw two circles
  fill(darkBlue);
  ellipse(50, 150, 75, 75);
  fill(lightBlue);
  ellipse(pos2x, pos2y, size2, size2);
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
