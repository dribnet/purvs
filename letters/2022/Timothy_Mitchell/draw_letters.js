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

  //SET variables for base shape
  let BaseX = posx-20;
  let BaseY = posy-70;
  let BaseW = 80;
  let BaseH = 100;

  fill('#bb595f');
  rect(BaseX,BaseY,BaseW,BaseH); //draw base shape

  //fill('#ffffff');
  fill('#9bc3e1');//draw cutouts
  rect(Cut1x1, Cut1y1, Cut1w1, Cut1h1);
  rect(Cut2x1, Cut2y1, Cut2w2, Cut2h2);

  triangle(Cut3x1, Cut3y1, Cut3x2, Cut3y2, Cut3x3, Cut3y3);
  triangle(Cut4x1, Cut4y1, Cut4x2, Cut4y2, Cut4x3, Cut4y3);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //let TargetBaseH = 1;
  new_letter["IntCutoutx1"] = map(percent, 0, 100, oldObj["IntCutoutx1"], newObj["IntCutoutx1"]); //rect 1
  new_letter["IntCutouty1"] = map(percent, 0, 100, oldObj["IntCutouty1"], newObj["IntCutouty1"]);
  new_letter["IntCutoutw1"] = map(percent, 0, 100, oldObj["IntCutoutw1"], newObj["IntCutoutw1"]);
  new_letter["IntCutouth1"] = map(percent, 0, 100, oldObj["IntCutouth1"], newObj["IntCutouth1"]);

  new_letter["IntCutout2x1"] = map(percent, 0, 100, oldObj["IntCutout2x1"], newObj["IntCutout2x1"]);//rect 2
  new_letter["IntCutout2y1"] = map(percent, 0, 100, oldObj["IntCutout2y1"], newObj["IntCutout2y1"]);
  new_letter["IntCutout2w1"] = map(percent, 0, 100, oldObj["IntCutout2w1"], newObj["IntCutout2w1"]);
  new_letter["IntCutout2h1"] = map(percent, 0, 100, oldObj["IntCutout2h1"], newObj["IntCutout2h1"]);

  new_letter["IntCutout3x1"] = map(percent, 0, 100, oldObj["IntCutout3x1"], newObj["IntCutout3x1"]);//triangle 1
  new_letter["IntCutout3y1"] = map(percent, 0, 100, oldObj["IntCutout3y1"], newObj["IntCutout3y1"]);
  new_letter["IntCutout3x2"] = map(percent, 0, 100, oldObj["IntCutout3x2"], newObj["IntCutout3x2"]);
  new_letter["IntCutout3y2"] = map(percent, 0, 100, oldObj["IntCutout3y2"], newObj["IntCutout3y2"]);
  new_letter["IntCutout3x3"] = map(percent, 0, 100, oldObj["IntCutout3x3"], newObj["IntCutout3x3"]);
  new_letter["IntCutout3y3"] = map(percent, 0, 100, oldObj["IntCutout3y3"], newObj["IntCutout3y3"]);

  new_letter["IntCutout4x1"] = map(percent, 0, 100, oldObj["IntCutout4x1"], newObj["IntCutout4x1"]);//triangle 2
  new_letter["IntCutout4y1"] = map(percent, 0, 100, oldObj["IntCutout4y1"], newObj["IntCutout4y1"]);
  new_letter["IntCutout4x2"] = map(percent, 0, 100, oldObj["IntCutout4x2"], newObj["IntCutout4x2"]);
  new_letter["IntCutout4y2"] = map(percent, 0, 100, oldObj["IntCutout4y2"], newObj["IntCutout4y2"]);
  new_letter["IntCutout4x3"] = map(percent, 0, 100, oldObj["IntCutout4x3"], newObj["IntCutout4x3"]);
  new_letter["IntCutout4y3"] = map(percent, 0, 100, oldObj["IntCutout4y3"], newObj["IntCutout4y3"]);


  return new_letter;
}

var swapWords = [
  "FOXBERRY",
  "12345678",
  "BLACKBOX",
  "EPICNESS"
]
